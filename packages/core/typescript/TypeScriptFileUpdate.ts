import * as ts from "typescript";
import { App } from "..";
import { TemplateDependency } from "../types";
import { FS_TOKEN, IFileSystem } from "../types/FileSystem";
import { Util } from "../util/Util";
import { TypeScriptUtils as TsUtils } from "./TypeScriptUtils";

const DEFAULT_ROUTES_VARIABLE = "routes";
const DEFAULT_APPCONFIG_VARIABLE = "appConfig";
/**
 * Apply various updates to typescript files using AST
 */
export class TypeScriptFileUpdate {
	// https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API for general source parsing
	// http://blog.scottlogic.com/2017/05/02/typescript-compiler-api-revisited.html
	// for AST transformation API List: https://github.com/Microsoft/TypeScript/pull/13940

	protected formatOptions = { spaces: false, indentSize: 4, singleQuotes: false };
	private fileSystem: IFileSystem;
	private targetSource: ts.SourceFile;
	private importsMeta: { lastIndex: number, modulePaths: string[] };

	private requestedImports: Array<{ from: string, imports: string[], edit: boolean }>;
	private ngMetaEdits: {
		declarations: string[],
		imports: Array<{ name: string, root: boolean, standalone?: boolean }>,
		providers: string[],
		schemas: Array<{ name: string, standalone?: boolean }>,
		exports: string[]
	};

	private createdStringLiterals: string[];

	/** Create updates for a file. Use `add<X>` methods to add transformations and `finalize` to apply and save them. */
	constructor(private targetPath: string) {
		this.fileSystem = App.container.get<IFileSystem>(FS_TOKEN);
		this.initState();
	}

	public transform<T extends ts.Node>(source: T | T[],
		transformers: ts.TransformerFactory<T>[],
		compilerOptions?: ts.CompilerOptions)
		: ts.TransformationResult<T> {
		return ts.transform(source, transformers, compilerOptions);
	}

	/** Applies accumulated transforms, saves and formats the file */
	public finalize() {
		const transforms = [];
		// walk AST for modifications.
		if (this.requestedImports.filter(x => x.edit).length) {
			transforms.push(this.importsTransformer);
		}

		// should we support both standalone and module-based components in the same app?
        if (this.ngMetaEdits.imports.some(x => x.standalone) || (this.ngMetaEdits.schemas.some(x => x.standalone))) {
            transforms.push(this.componentMetaTransformer);
		} else if (Object.keys(this.ngMetaEdits).filter(x => this.ngMetaEdits[x].length).length) {
			transforms.push(this.ngModuleTransformer);
		}

		if (transforms.length) {
			this.targetSource = this.transform(this.targetSource, transforms).transformed[0];
		}

		// add new import statements after visitor walks:
		this.addNewFileImports();

		TsUtils.saveFile(this.targetPath, this.targetSource);
		this.formatFile(this.targetPath);
		// reset state in case of further updates
		this.initState();
	}

	/**
	 * Create configuration object for a component and add it to the `Routes` array variable.
	 * Imports the first exported class and finalizes the file update (see `.finalize()`).
	 * @param filePath Path to the component file to import
	 * @param linkPath Routing `path` to add
	 * @param linkText Text of the route to add as `data.text`
	 * @param parentRoutePath Will include the new route as a **child** of the specified route path
	 * @param routesVariable Name of the array variable holding routes
	 * @param lazyload Whether to use lazy loading for the route
	 * @param routesPath Path to the routing module
	 * @param root Whether the route is a root route
	 * @param isDefault Whether the route is the default route for the view
	 */
	public addChildRoute(
		filePath: string,
		linkPath: string,
		linkText: string,
		parentRoutePath: string,
		routesVariable = DEFAULT_ROUTES_VARIABLE,
		lazyload = false,
		routesPath = "",
		root = false,
		isDefault = false,
		className?: string
	) {
		this.addRouteModuleEntry(filePath, linkPath, linkText, routesVariable,
			parentRoutePath, lazyload, routesPath, root, isDefault, className);
	}

	/**
	 * Create configuration object for a component and add it to the `Routes` array variable.
	 * Imports the first exported class and finalizes the file update (see `.finalize()`).
	 * @param filePath Path to the component file to import
	 * @param linkPath Routing `path` to add
	 * @param linkText Text of the route to add as `data.text`
	 * @param routesVariable Name of the array variable holding routes
	 */
	public addRoute(
		filePath: string,
		linkPath: string,
		linkText: string,
		routesVariable = DEFAULT_ROUTES_VARIABLE,
		lazyload = false, routesPath = "", root = false, isDefault = false, className?: string,) {
		this.addRouteModuleEntry(filePath, linkPath, linkText, routesVariable, null, lazyload, routesPath, root, isDefault, className);
	}

	/**
	 * Import class and add it to `NgModule` declarations.
	 * Creates `declarations` array if one is not present already.
	 * @param filePath Path to the file to import
	 */
	public addDeclaration(filePath: string, addToExport?: boolean) {
		let className: string;
		const fileSource = TsUtils.getFileSource(filePath);
		const relativePath: string = Util.relativePath(this.targetPath, filePath, true, true);
		className = TsUtils.getClassName(fileSource.getChildren());
		if (addToExport) {
			this.addNgModuleMeta({ declare: className, from: relativePath, export: className });
		} else {
			this.addNgModuleMeta({ declare: className, from: relativePath });
		}
	}

	/**
	 * Add a metadata update to the file's `NgModule`. Will also import identifiers.
	 */
	public addNgModuleMeta(dep: TemplateDependency, variables?: { [key: string]: string }) {
		const copy = {
			declare: this.asArray(dep.declare, variables),
			import: this.asArray(dep.import, variables),
			provide: this.asArray(dep.provide, variables),
			schema: this.asArray(dep.schema, variables),
			// tslint:disable-next-line:object-literal-sort-keys
			export: this.asArray(dep.export, variables)
		};

		if (dep.from) {
			// request import
			const identifiers = [...copy.import, ...copy.declare, ...copy.provide, ...copy.schema];
			this.requestImport(identifiers, Util.applyConfigTransformation(dep.from, variables));
		}
		const imports = copy.import
			.map(x => ({ name: x, root: dep.root }))
			.filter(x => !this.ngMetaEdits.imports.find(i => i.name === x.name));
		this.ngMetaEdits.imports.push(...imports);

		const declarations = copy.declare
			.filter(x => !this.ngMetaEdits.declarations.find(d => d === x));
		this.ngMetaEdits.declarations.push(...declarations);

		const providers = copy.provide
			.filter(x => !this.ngMetaEdits.providers.find(p => p === x));
		this.ngMetaEdits.providers.push(...providers);

		const schemas = copy.schema
			.map(x => ({ name: x, root: dep.root }))
			.filter(x => !this.ngMetaEdits.schemas.find(s => s.name === x.name));
		this.ngMetaEdits.schemas.push(...schemas);

		const exportsArr = copy.export
			.filter(x => !this.ngMetaEdits.exports.find(p => p === x));
		this.ngMetaEdits.exports.push(...exportsArr);
	}

	/**
	 * Updates a standalone component's imports metadata.
	 */
	public addStandaloneImport(dep: TemplateDependency, variables?: { [key: string]: string }) {
		const copy = {
			import: this.asArray(dep.import, variables),
			provide: this.asArray(dep.provide, variables),
			schema: this.asArray(dep.schema, variables)
		};
		if (dep.from) {
			// request import
			const identifiers = [...copy.import, ...copy.provide, ...copy.schema];
			this.requestImport(identifiers, Util.applyConfigTransformation(dep.from, variables));
		}

		const imports = copy.import
			.map(x => ({ name: x, root: dep.root, standalone: true }))
			.filter(x => !this.ngMetaEdits.imports.find(i => i.name === x.name));
		this.ngMetaEdits.imports.push(...imports);

		const schemas = copy.schema
            .map(x => ({ name: x, root: dep.root, standalone: true}))
            .filter(x => !this.ngMetaEdits.schemas.find(i => i.name === x.name));
        this.ngMetaEdits.schemas.push(...schemas);
	}

	/**
	 * Create a CallExpression for dep and add it to the `ApplicationConfig` providers array.
	 * @param dep The dependency to provide. TODO: Use different type to describe CallExpression, possible parameters, etc
	 * @param configVariable The name of the app config variable to edit
	 */
	public addAppConfigProvider(
		dep: Pick<TemplateDependency, "provide" | "from">,
		configVariable = DEFAULT_APPCONFIG_VARIABLE) {
		let providers = this.asArray(dep.provide, {});

		const transformer: ts.TransformerFactory<ts.SourceFile> = <T extends ts.SourceFile>(context: ts.TransformationContext) =>
		(rootNode: T) => {
			const conditionalVisitor: ts.Visitor = (node: ts.Node): ts.Node => {
				if (node.kind === ts.SyntaxKind.ArrayLiteralExpression &&
					node.parent.kind === ts.SyntaxKind.PropertyAssignment &&
					(node.parent as ts.PropertyAssignment).name.getText() === "providers") {
					const array = (node as ts.ArrayLiteralExpression);
					const nodes = ts.visitNodes(array.elements, visitor, ts.isExpression);
					const alreadyProvided = nodes.map(x => TsUtils.getIdentifierName(x));

					providers =  providers.filter(x => alreadyProvided.indexOf(x) === -1);
					this.requestImport(providers, dep.from);

					const newProvides = providers
						.map(x => ts.factory.createCallExpression(ts.factory.createIdentifier(x), undefined, undefined));
					const elements = ts.factory.createNodeArray<ts.Expression>([
						...nodes,
						...newProvides
					]);

					return ts.factory.updateArrayLiteralExpression(array, elements);
				} else {
					return ts.visitEachChild(node, conditionalVisitor, context);
				}
			};

			const visitCondition = (node: ts.Node): boolean => {
				return node.kind === ts.SyntaxKind.VariableDeclaration &&
					(node as ts.VariableDeclaration).name.getText() === configVariable &&
					(node as ts.VariableDeclaration).type.getText() === "ApplicationConfig";
			};
			const visitor: ts.Visitor = this.createVisitor(conditionalVisitor, visitCondition, context);
			context.enableSubstitution(ts.SyntaxKind.ArrayLiteralExpression);
			return ts.visitNode(rootNode, visitor, ts.isSourceFile);
		};
		this.targetSource = this.transform(this.targetSource, [transformer], {
			pretty: true // oh well..
		}).transformed[0];
	}

	//#region File state

	/** Initializes existing imports info, [re]sets import and `NgModule` edits */
	protected initState() {
		this.targetSource = TsUtils.getFileSource(this.targetPath);
		this.importsMeta = this.loadImportsMeta();
		this.requestedImports = [];
		this.ngMetaEdits = {
			declarations: [],
			imports: [],
			providers: [],
			schemas: [],
			exports: []
		};
		this.createdStringLiterals = [];
	}

	/* load some metadata about imports */
	protected loadImportsMeta() {
		const meta = { lastIndex: 0, modulePaths: [] };

		for (let i = 0; i < this.targetSource.statements.length; i++) {
			const statement = this.targetSource.statements[i];
			switch (statement.kind) {
				case ts.SyntaxKind.ImportDeclaration:
					const importStmt = (statement as ts.ImportDeclaration);

					if (importStmt.importClause && importStmt.importClause.namedBindings &&
						importStmt.importClause.namedBindings.kind !== ts.SyntaxKind.NamespaceImport) {
						// don't add imports without named (e.g. `import $ from "JQuery"` or `import "./my-module.js";`)
						// don't add namespace imports (`import * as fs`) as available for editing, maybe in the future
						meta.modulePaths.push((importStmt.moduleSpecifier as ts.StringLiteral).text);
					}

				// don't add equals imports (`import url = require("url")`) as available for editing, maybe in the future
				case ts.SyntaxKind.ImportEqualsDeclaration:
					meta.lastIndex = i + 1;
					break;
				default:
					break;
			}
		}

		return meta;
	}

	//#endregion File state

	protected addRouteModuleEntry(
		filePath: string,
		linkPath: string,
		linkText: string,
		routesVariable = DEFAULT_ROUTES_VARIABLE,
		parentRoutePath?: string,
		lazyload = false,
		routesPath = "",
		root = false,
		isDefault = false,
		providedClassName?: string
	) {
		const fileSource = TsUtils.getFileSource(filePath);
		const relativePath: string = Util.relativePath(this.targetPath, filePath, true, true);
		const className = providedClassName || TsUtils.getClassName(fileSource.getChildren());

		if (!lazyload) {
			this.requestImport([className], relativePath);
		}

		// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
		const transformer: ts.TransformerFactory<ts.Node> = <T extends ts.Node>(context: ts.TransformationContext) =>
			(rootNode: T) => {
				let conditionalVisitor: ts.Visitor;
				// the visitor that should be used when adding routes to the main route array
				const routeArrayVisitor = (node: ts.Node): ts.Node => {
					if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
						const newObject = this.createRouteEntry(linkPath, className, linkText, lazyload, routesPath, root);
						const array = (node as ts.ArrayLiteralExpression);
						this.createdStringLiterals.push(linkPath, linkText);
						const notFoundWildCard = "**";
						const nodes = ts.visitNodes(array.elements, visitor);
						const errorRouteNode = nodes.filter(element => element.getText().includes(notFoundWildCard))[0];
						let resultNodes = null;
						if (errorRouteNode) {
							resultNodes = nodes
								.slice(0, nodes.indexOf(errorRouteNode))
								.concat(newObject)
								.concat(errorRouteNode);
						} else {
							resultNodes = nodes
								.concat(newObject);
						}

						const elements = ts.factory.createNodeArray([
							...resultNodes
						]);

						return ts.factory.updateArrayLiteralExpression(array, elements);
					} else {
						return ts.visitEachChild(node, conditionalVisitor, context);
					}
				};
				// the visitor that should be used when adding child routes to a specified parent
				const parentRouteVisitor = (node: ts.Node): ts.Node => {
					if (node.kind === ts.SyntaxKind.ObjectLiteralExpression) {
						if (!node.getText().includes(parentRoutePath)) {
							return node;
						}
						const nodeProperties = (node as ts.ObjectLiteralExpression).properties;
						const parentPropertyCheck = (element: ts.PropertyAssignment) => {
							return element.name.kind === ts.SyntaxKind.Identifier && element.name.text === "path"
								&& element.initializer.kind === ts.SyntaxKind.StringLiteral
								&& (element.initializer as ts.StringLiteral).text === parentRoutePath;
						};
						const parentProperty = nodeProperties.filter(parentPropertyCheck)[0];
						if (!parentProperty) {
							return node;
						}
						function filterForChildren(element: ts.Node): boolean {
							if (element.kind === ts.SyntaxKind.PropertyAssignment) {
								const identifier = element.getChildren()[0];
								return identifier.kind === ts.SyntaxKind.Identifier && identifier.getText().trim() === "children";
							}
							return false;
						}
						let defaultRoute: ts.ObjectLiteralExpression;
						if (isDefault) {
							defaultRoute = this.createRouteEntry("", null, null, false, routesPath, root, isDefault);
						}
						const newObject = this.createRouteEntry(linkPath, className, linkText);
						const currentNode = node as ts.ObjectLiteralExpression;
						this.createdStringLiterals.push(linkPath, linkText);
						const syntaxList: ts.SyntaxList = node.getChildren()
							.filter(element => element.kind === ts.SyntaxKind.SyntaxList)[0] as ts.SyntaxList;
						let childrenProperty: ts.PropertyAssignment = syntaxList
							.getChildren().filter(filterForChildren)[0] as ts.PropertyAssignment;
						let childrenArray: ts.ArrayLiteralExpression = null;

						// if the target parent route already has child routes - get them
						// if not - create an empty 'chuldren' array
						if (childrenProperty) {
							childrenArray = childrenProperty.getChildren()
								.filter(element => element.kind === ts.SyntaxKind.ArrayLiteralExpression)[0] as ts.ArrayLiteralExpression
								|| ts.factory.createArrayLiteralExpression();
						} else {
							childrenArray = ts.factory.createArrayLiteralExpression();
						}

						let existingProperties = syntaxList.getChildren()
							.filter(element => element.kind !== ts.SyntaxKind["CommaToken"]) as ts.ObjectLiteralElementLike[];
						let newArrayValues: ts.Expression[];
						if (isDefault) {
							newArrayValues = childrenArray.elements.concat(defaultRoute, newObject);
						} else {
							newArrayValues = childrenArray.elements.concat(newObject);
						}
						if (!childrenProperty) {
							const propertyName = "children";
							const propertyValue = ts.factory.createArrayLiteralExpression([...newArrayValues]);
							childrenProperty = ts.factory.createPropertyAssignment(propertyName, propertyValue);
							existingProperties = existingProperties
								.concat(childrenProperty);
						} else {
							const index = existingProperties.indexOf(childrenProperty);
							const childrenPropertyName = childrenProperty.name;
							childrenProperty =
								ts.factory.updatePropertyAssignment(
									childrenProperty,
									childrenPropertyName,
									ts.factory.createArrayLiteralExpression([...newArrayValues])
								);
							existingProperties
								.splice(index, 1, childrenProperty);
						}
						return ts.factory.updateObjectLiteralExpression(currentNode, existingProperties) as ts.Node;
					} else {
						return ts.visitEachChild(node, conditionalVisitor, context);
					}
				};

				if (parentRoutePath === null) {
					conditionalVisitor = routeArrayVisitor;
				} else {
					conditionalVisitor = parentRouteVisitor;
				}
				const visitCondition = (node: ts.Node): boolean => {
					return node.kind === ts.SyntaxKind.VariableDeclaration &&
						(node as ts.VariableDeclaration).name.getText() === routesVariable &&
						(node as ts.VariableDeclaration).type.getText() === "Routes";
				};
				const visitor: ts.Visitor = this.createVisitor(conditionalVisitor, visitCondition, context);
				context.enableSubstitution(ts.SyntaxKind.ClassDeclaration);
				return ts.visitNode(rootNode, visitor);
			};

		this.targetSource = this.transform(this.targetSource, [transformer], {
			pretty: true // oh well..
		}).transformed[0] as ts.SourceFile;

		this.finalize();
	}

	/**
	 * Add named imports from a path/package.
	 * @param identifiers Strings to create named import from ("Module" => `import { Module }`)
	 * @param modulePath Module specifier - can be path to file or npm package, etc
	 */
	protected requestImport(identifiers: string[], modulePath: string) {
		const existing = this.requestedImports.find(x => x.from === modulePath);
		if (!existing) {
			// new imports, check if already exists in file
			this.requestedImports.push({
				from: modulePath, imports: identifiers,
				edit: this.importsMeta.modulePaths.indexOf(modulePath) !== -1
			});
		} else {
			const newNamedImports = identifiers.filter(x => existing.imports.indexOf(x) === -1);
			existing.imports.push(...newNamedImports);
		}
	}

	/** Add `import` statements not previously found in the file  */
	protected addNewFileImports() {
		const newImports = this.requestedImports.filter(x => !x.edit);
		if (!newImports.length) {
			return;
		}

		const newStatements = ts.factory.createNodeArray([
			...this.targetSource.statements.slice(0, this.importsMeta.lastIndex),
			...newImports.map(x => TsUtils.createIdentifierImport(x.imports, x.from)),
			...this.targetSource.statements.slice(this.importsMeta.lastIndex)
		]);
		newImports.forEach(x => this.createdStringLiterals.push(x.from));

		this.targetSource = ts.factory.updateSourceFile(this.targetSource, newStatements);
	}

	//#region ts.TransformerFactory

	/** Transformation to apply edits to existing named import declarations */
	protected importsTransformer: ts.TransformerFactory<ts.Node> =
		<T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
			const editImports = this.requestedImports.filter(x => x.edit);

			// https://github.com/Microsoft/TypeScript/issues/14419#issuecomment-307256171
			const visitor = (node: ts.Node): ts.Node => {
				if (node.kind === ts.SyntaxKind.ImportDeclaration &&
					editImports.find(x => x.from === ((node as ts.ImportDeclaration).moduleSpecifier as ts.StringLiteral).text)
				) {
					// visit just the source file main array (second visit)
					return visitImport(node as ts.ImportDeclaration);
				} else {
					node = ts.visitEachChild(node, visitor, context);
				}
				return node;
			};
			function visitImport(node: ts.Node) {
				if (node.kind === ts.SyntaxKind.NamedImports) {
					const namedImports = node as ts.NamedImports;
					const moduleSpecifier = (namedImports.parent.parent.moduleSpecifier as ts.StringLiteral).text;

					const existing = ts.visitNodes(namedImports.elements, visitor, ts.isImportSpecifier);
					const alreadyImported = existing.map(x => ts.isImportSpecifier(x) && x.name.text);

					const editImport = editImports.find(x => x.from === moduleSpecifier);
					const newImports = editImport.imports.filter(x => alreadyImported.indexOf(x) === -1);

					node = ts.factory.updateNamedImports(namedImports, [
						...existing,
						...newImports.map(x => ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(x)))
					]);
				} else {
					node = ts.visitEachChild(node, visitImport, context);
				}
				return node;
			}
			return ts.visitNode(rootNode, visitor);
		}

	/** Transformation to apply `this.ngMetaEdits` to `NgModule` metadata properties */
	protected ngModuleTransformer: ts.TransformerFactory<ts.Node> =
		<T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
			const visitNgModule: ts.Visitor = (node: ts.Node): ts.Node => {
				const properties: string[] = []; // "declarations", "imports", "providers"
				for (const key in this.ngMetaEdits) {
					if (this.ngMetaEdits[key].length) {
						properties.push(key);
					}
				}
				if (node.kind === ts.SyntaxKind.ObjectLiteralExpression &&
					node.parent &&
					node.parent.kind === ts.SyntaxKind.CallExpression) {

					let obj = (node as ts.ObjectLiteralExpression);

					//TODO: test node.parent for ts.CallExpression NgModule
					const missingProperties = properties.filter(x => !obj.properties.find(o => o.name.getText() === x));

					// skip visiting if no declaration/imports/providers arrays exist:
					if (missingProperties.length !== properties.length) {
						obj = ts.visitEachChild(node, visitNgModule, context) as ts.ObjectLiteralExpression;
					}

					if (!missingProperties.length) {
						return obj;
					}

					const objProperties = ts.visitNodes(obj.properties, visitor);
					const newProps = [];
					for (const prop of missingProperties) {
						if (this.ngMetaEdits[prop].length) {
							const expr = ts.factory.createArrayLiteralExpression(
								this.ngMetaEdits[prop].map(x => {
									if (typeof x === "string") {
										return TsUtils.createIdentifier(x);
									}
									if (typeof x === "object" && "name" in x) {
										return TsUtils.createIdentifier(x.name, x.root ? "forRoot" : "")
									}
								})
							);
							newProps.push(ts.factory.createPropertyAssignment(prop, expr));
						}
					}

					return ts.factory.updateObjectLiteralExpression(obj, [
						...objProperties,
						...newProps
					]);
				} else if (node.kind === ts.SyntaxKind.ArrayLiteralExpression &&
					node.parent.kind === ts.SyntaxKind.PropertyAssignment &&
					properties.indexOf((node.parent as ts.PropertyAssignment).name.getText()) !== -1) {
					const initializer = (node as ts.ArrayLiteralExpression);
					const props = ts.visitNodes(initializer.elements, visitor);
					const alreadyImported = props.map(x => TsUtils.getIdentifierName(x));
					const prop = properties.find(x => x === (node.parent as ts.PropertyAssignment).name.getText());

					let identifiers = [];
					switch (prop) {
						case "imports":
							identifiers = this.ngMetaEdits.imports
								.filter(x => alreadyImported.indexOf(x.name) === -1)
								.map(x => TsUtils.createIdentifier(x.name, x.root ? "forRoot" : ""));
							break;
						case "schemas":
							identifiers = this.ngMetaEdits.schemas
								.filter(x => alreadyImported.indexOf(x.name) === -1)
								.map(x => TsUtils.createIdentifier(x.name));
							break;
						case "declarations":
						case "providers":
						case "exports":
							identifiers = this.ngMetaEdits[prop]
								.filter(x => alreadyImported.indexOf(x) === -1)
								.map(x => ts.factory.createIdentifier(x));
							break;
					}
					const elements = ts.factory.createNodeArray([
						...props,
						...identifiers
					]);

					return ts.factory.updateArrayLiteralExpression(initializer, elements);
				} else {
					node = ts.visitEachChild(node, visitNgModule, context);
				}
				return node;
			};
			const visitCondition: (node: ts.Node) => boolean = (node: ts.Node) => {
				return node.kind === ts.SyntaxKind.CallExpression &&
					node.parent && node.parent.kind === ts.SyntaxKind.Decorator &&
					(node as ts.CallExpression).expression.getText() === "NgModule";
			};
			const visitor = this.createVisitor(visitNgModule, visitCondition, context);
			return ts.visitNode(rootNode, visitor);
		}

	// TODO: extend to allow the modification of multiple metadata properties
	/** Transformation to apply `this.ngMetaEdits` to a standalone `Component` metadata imports */
	protected componentMetaTransformer: ts.TransformerFactory<ts.Node> =
		<T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
			const visitComponent: ts.Visitor = (node: ts.Node): ts.Node => {
				const properties = Object.keys(this.ngMetaEdits);
				if (node.kind === ts.SyntaxKind.ObjectLiteralExpression &&
					node.parent &&
					node.parent.kind === ts.SyntaxKind.CallExpression) {
						const obj = (node as ts.ObjectLiteralExpression);
						const objProperties = ts.visitNodes(obj.properties, visitor);
						const newProps = [];
						const missingProperties = properties.filter(x => !obj.properties.find(o => o.name.getText() === x));
						for (const prop of missingProperties) {
							if (this.ngMetaEdits[prop].length) {
								const expr = ts.factory.createArrayLiteralExpression(
									this.ngMetaEdits[prop].map(x => TsUtils.createIdentifier(x.name))
								);
								newProps.push(ts.factory.createPropertyAssignment(prop, expr));
							}
						}
						return context.factory.updateObjectLiteralExpression(obj, [
							...objProperties,
							...newProps
						]);
				} else {
					node = ts.visitEachChild(node, visitComponent, context);
				}

				return node;
			};
			const visitCondition: (node: ts.Node) => boolean = (node: ts.Node) => {
				return node.kind === ts.SyntaxKind.CallExpression &&
					node.parent && node.parent.kind === ts.SyntaxKind.Decorator &&
					(node as ts.CallExpression).expression.getText() === "Component";
			};
			const visitor = this.createVisitor(visitComponent, visitCondition, context);
			return ts.visitNode(rootNode, visitor);
		}

	//#endregion ts.TransformerFactory

	//#region Formatting

	/** Format a TS source file, very TBD */
	protected formatFile(filePath: string) {
		// formatting via LanguageService https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
		// https://github.com/Microsoft/TypeScript/issues/1651

		let text = this.fileSystem.readFile(filePath);
		// create the language service files
		const services = ts.createLanguageService(this.getLanguageHost(filePath), ts.createDocumentRegistry());

		this.readFormatConfigs();
		const textChanges = services.getFormattingEditsForDocument(filePath, this.getFormattingOptions());
		text = this.applyChanges(text, textChanges);

		if (this.formatOptions.singleQuotes) {
			for (const str of this.createdStringLiterals) {
				// there shouldn't be duplicate strings of these
				text = text.replace(`"${str}"`, `'${str}'`);
			}
			text = text.replace(/["]/g, "'");
		}

		this.fileSystem.writeFile(filePath, text);
	}

	/**  Try and parse formatting from project `.editorconfig` / `tslint.json` */
	protected readFormatConfigs() {
		if (this.fileSystem.fileExists(".editorconfig")) {
			// very basic parsing support
			const text = this.fileSystem.readFile(".editorconfig", "utf-8");
			const options = text
				.replace(/\s*[#;].*([\r\n])/g, "$1") //remove comments
				.replace(/\[(?!\*\]|\*.ts).+\][^\[]+/g, "") // leave [*]/[*.ts] sections
				.split(/\r\n|\r|\n/)
				.reduce((obj, x) => {
					if (x.indexOf("=") !== -1) {
						const pair = x.split("=");
						obj[pair[0].trim()] = pair[1].trim();
					}
					return obj;
				}, {});

			this.formatOptions.spaces = options["indent_style"] === "space";
			if (options["indent_size"]) {
				this.formatOptions.indentSize = parseInt(options["indent_size"], 10) || this.formatOptions.indentSize;
			}
			if (options["quote_type"]) {
				this.formatOptions.singleQuotes = options["quote_type"] === "single";
			}
		}
		if (this.fileSystem.fileExists("tslint.json")) {
			// tslint prio - overrides other settings
			const options = JSON.parse(this.fileSystem.readFile("tslint.json", "utf-8"));
			if (options.rules && options.rules.indent && options.rules.indent[0]) {
				this.formatOptions.spaces = options.rules.indent[1] === "spaces";
				if (options.rules.indent[2]) {
					this.formatOptions.indentSize = parseInt(options.rules.indent[2], 10);
				}
			}
			if (options.rules && options.rules.quotemark && options.rules.quotemark[0]) {
				this.formatOptions.singleQuotes = options.rules.quotemark.indexOf("single") !== -1;
			}
		}
	}

	/**
	 * Apply formatting changes (position based) in reverse
	 * from https://github.com/Microsoft/TypeScript/issues/1651#issuecomment-69877863
	 */
	private applyChanges(orig: string, changes: ts.TextChange[]): string {
		let result = orig;
		for (let i = changes.length - 1; i >= 0; i--) {
			const change = changes[i];
			const head = result.slice(0, change.span.start);
			const tail = result.slice(change.span.start + change.span.length);
			result = head + change.newText + tail;
		}
		return result;
	}

	/** Return source file formatting options */
	private getFormattingOptions(): ts.FormatCodeSettings {
		const formatOptions: ts.FormatCodeSettings = {
			// tslint:disable:object-literal-sort-keys
			indentSize: this.formatOptions.indentSize,
			tabSize: 4,
			newLineCharacter: ts.sys.newLine,
			convertTabsToSpaces: this.formatOptions.spaces,
			indentStyle: ts.IndentStyle.Smart,
			insertSpaceAfterCommaDelimiter: true,
			insertSpaceAfterSemicolonInForStatements: true,
			insertSpaceBeforeAndAfterBinaryOperators: true,
			insertSpaceAfterKeywordsInControlFlowStatements: true,
			insertSpaceAfterTypeAssertion: true
			// tslint:enable:object-literal-sort-keys
		};

		return formatOptions;
	}

	/** Get language service host, sloppily */
	private getLanguageHost(filePath: string): ts.LanguageServiceHost {
		const files = {};
		files[filePath] = { version: 0 };
		// create the language service host to allow the LS to communicate with the host
		const servicesHost: ts.LanguageServiceHost = {
			getCompilationSettings: () => ({}),
			getScriptFileNames: () => Object.keys(files),
			getScriptVersion: fileName => files[fileName] && files[fileName].version.toString(),
			getScriptSnapshot: fileName => {
				if (!this.fileSystem.fileExists(fileName)) {
					return undefined;
				}
				return ts.ScriptSnapshot.fromString(this.fileSystem.readFile(fileName));
			},
			getCurrentDirectory: () => process.cwd(),
			getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
			readDirectory: ts.sys.readDirectory,
			readFile: ts.sys.readFile,
			fileExists: ts.sys.fileExists
		};
		return servicesHost;
	}

	//#endregion Formatting

	/** Convert a string or string array union to array. Splits strings as comma delimited */
	private asArray(value: string | string[], variables: { [key: string]: string }): string[] {
		let result: string[] = [];
		if (value) {
			result = typeof value === "string" ? value.split(/\s*,\s*/) : value;
			result = result.map(x => Util.applyConfigTransformation(x, variables));
		}
		return result;
	}

	private createVisitor(
		conditionalVisitor: ts.Visitor,
		visitCondition: (node: ts.Node) => boolean,
		nodeContext: ts.TransformationContext
	): ts.Visitor {
		return function visitor(node: ts.Node): ts.Node {
			if (visitCondition(node)) {
				node = ts.visitEachChild(node, conditionalVisitor, nodeContext);
			} else {
				node = ts.visitEachChild(node, visitor, nodeContext);
			}
			return node;
		};
	}

	private createRouteEntry(
		linkPath: string,
		className: string,
		linkText: string,
		lazyload = false,
		routesPath = "",
		root = false,
		isDefault = false
	): ts.ObjectLiteralExpression {
		const routePath = ts.factory.createPropertyAssignment("path", ts.factory.createStringLiteral(linkPath));
		if (isDefault) {
			const routeRedirectTo = ts.factory.createPropertyAssignment("redirectTo",
				ts.factory.createStringLiteral(routesPath));
			const routePathMatch = ts.factory.createPropertyAssignment("pathMatch",
				ts.factory.createStringLiteral("full"));
			return ts.factory.createObjectLiteralExpression([routePath, routeRedirectTo, routePathMatch]);
		}
		let routeComponent;
		// TODO: we should consider using the ts.factory instead of string interpolations
		if (lazyload) {
			if (root) {
				routeComponent = ts
				.factory
				.createPropertyAssignment("loadChildren",
				ts.factory.createIdentifier(`() => import('${routesPath}').then(m => m.routes)`));
			} else {
				routeComponent = ts
				.factory
				.createPropertyAssignment("loadComponent",
				ts.factory.createIdentifier(`() => import('./${linkPath}/${linkPath}.component').then(m => m.${className})`));
			}
		} else {
			routeComponent = ts.factory.createPropertyAssignment("component", ts.factory.createIdentifier(className));
		}
		const routeDataInner = ts.factory.createPropertyAssignment("text", ts.factory.createStringLiteral(linkText));
		const routeData = ts.factory.createPropertyAssignment(
			"data", ts.factory.createObjectLiteralExpression([routeDataInner]));
		return ts.factory.createObjectLiteralExpression([routePath, routeComponent, routeData]);
	}

}
