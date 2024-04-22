import * as ts from 'typescript';
import { EOL } from 'os';

import {
  FormattingService,
  KeyValuePair,
  IIdentifier,
  IPropertyAssignment,
  RouteTarget,
  TemplateDependency,
  TypeScriptASTTransformer,
  Util,
  TypeScriptUtils,
  IFormatSettings,
} from '@igniteui/cli-core';

import {
  IAngularRouteLike,
  AngularDecoratorMetaTarget,
  IAngularRouteEntry,
  AngularRouteTarget,
} from './types';

// TODO: consider creating a global-constants file
const ROUTES_VARIABLE_NAME = 'routes';
const THEN_IDENTIFIER_NAME = 'then';
const IMPORT_IDENTIFIER_NAME = 'import';

const NG_MODULE_DECORATOR_NAME = 'NgModule';
const NG_SA_DECORATOR_NAME = 'Component';
const NG_FOR_ROOT_IDENTIFIER_NAME = 'forRoot';
const NG_LOAD_CHILDREN_IDENTIFIER_NAME = 'loadChildren';
const NG_LOAD_COMPONENT_IDENTIFIER_NAME = 'loadComponent';
export const NEW_LINE_PLACEHOLDER = '//I keep the new line';

// insert before node that contains this element
const anchorElement: IPropertyAssignment = {
  name: 'path',
  value: ts.factory.createStringLiteral('**'),
};

const printerOptions: ts.PrinterOptions = {
  newLine:
    EOL === '\n'
      ? ts.NewLineKind.LineFeed
      : ts.NewLineKind.CarriageReturnLineFeed,
};

export class AngularTypeScriptFileUpdate {
  private readonly astTransformer: TypeScriptASTTransformer;
  constructor(
    targetPath: string,
    private standalone: boolean = false,
    formatSettings?: IFormatSettings
  ) {
    const sourceFile = TypeScriptUtils.getFileSource(targetPath);
    this.astTransformer = new TypeScriptASTTransformer(
      sourceFile,
      new FormattingService(sourceFile, null, formatSettings, printerOptions),
      printerOptions // TODO: may not be needed
    );
  }

  //#region Public API

  /**
   * Adds a route to the Angular routing module.
   * @param route The route to add.
   * @param multiline Whether to format the new entry as multiline.
   */
  public addRoute(
    route: IAngularRouteLike,
    multiline: boolean = false
  ): ts.SourceFile {
    const visitCondition = (node: ts.Node) =>
      !!this.astTransformer.findNodeAncenstor(
        node,
        (node) =>
          ts.isVariableDeclaration(node) &&
          node.name.getText() === ROUTES_VARIABLE_NAME
      );

    if (
      route.lazyload &&
      route.path &&
      route.identifierName &&
      route.modulePath
    ) {
      return this.addLazyLoadedRouteEntry(
        route,
        visitCondition,
        anchorElement,
        multiline,
        true // prepend
      );
    }

    return this.addRedirectOrSimpleRouteEntry(
      route,
      visitCondition,
      anchorElement,
      multiline,
      true // prepend
    );
  }

  /**
   * Adds a child route to a parent route.
   * @param parentPath The path of the parent route.
   * @param route The child route to add.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to prepend the new added routes.
   * @remarks The `parentPath` is used to determine where the child route should be added.
   */
  public addChildRoute(
    parentPath: string,
    route: IAngularRouteLike,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    // find a node that has the parent's path
    const visitCondition = (node: ts.Node | ts.ObjectLiteralElementLike) =>
      ts.isPropertyAssignment(node) &&
      node.name.getText() === RouteTarget.Path &&
      ts.isStringLiteral(node.initializer) &&
      node.initializer.text === parentPath;

    const parentRoute =
      this.astTransformer.findPropertyAssignment(visitCondition);
    if (!parentRoute) return this.astTransformer.sourceFile;

    const childrenKey = 'children';
    const parentContainsChildrenKey =
      ts.isObjectLiteralExpression(parentRoute.parent) &&
      parentRoute.parent.properties.find(
        (p) => ts.isPropertyAssignment(p) && p.name?.getText() === childrenKey
      );

    if (!parentContainsChildrenKey) {
      // if the parent route does not have the children array, create it
      this.astTransformer.addMemberToObjectLiteral(
        (node) =>
          ts.isObjectLiteralExpression(node) &&
          node.properties.some(visitCondition),
        {
          name: childrenKey,
          value: this.astTransformer.createArrayLiteralExpression(
            [],
            multiline
          ),
        }
      );
    }

    // add the child route to the parent's children array
    return this.addRedirectOrSimpleRouteEntry(
      route,
      (node) =>
        ts.isPropertyAssignment(node.parent) &&
        node.parent.name.getText() === childrenKey &&
        // check if the parent route is the one we're looking for
        !!this.astTransformer.findNodeAncenstor(
          node,
          (node) =>
            ts.isObjectLiteralExpression(node) &&
            node.properties.some(visitCondition)
        ),
      anchorElement,
      multiline,
      prepend
    );
  }

  /**
   * Adds an import identifier to a standalone component's metadata.
   * @param dep The dependency to add to the standalone component's metadata.
   * @param variables Variables to replace in the dependency strings.
   * @param multiline Whether to format the new entry as multiline.
   */
  public addStandaloneComponentMeta(
    dep: TemplateDependency,
    variables?: KeyValuePair<string>,
    multiline: boolean = false
  ): ts.SourceFile {
    if (!this.standalone || !dep.standalone)
      return this.astTransformer.sourceFile;

    const copy = {
      import: this.asArray(dep.import || [], variables || {}),
      provide: this.asArray(dep.provide || [], variables || {}),
    };

    if (dep.from) {
      // add an import declaration for the dependency
      const identifiers = [...copy.import, ...copy.provide].map((name) => ({
        name,
      }));

      this.astTransformer.addImportDeclaration(
        identifiers.filter(
          (i) => !this.astTransformer.importDeclarationCollides(i)
        ),
        this.applyConfigTransformation(dep.from, variables!)
      );
    }

    if (copy.import.length > 0) {
      return this.mutateNgDecoratorMeta(
        NG_SA_DECORATOR_NAME,
        copy.import,
        AngularDecoratorMetaTarget.Imports,
        multiline
      );
    }
    if (copy.provide.length > 0) {
      return this.mutateNgDecoratorMeta(
        NG_SA_DECORATOR_NAME,
        copy.provide,
        AngularDecoratorMetaTarget.Providers,
        multiline
      );
    }

    return this.astTransformer.sourceFile;
  }

  /**
   * Adds metadata to an NgModule decorator.
   * @param dep The dependency to add to the NgModule decorator.
   * @param variables Variables to replace in the dependency strings.
   * @param multiline Whether to format the new entry as multiline.
   */
  public addNgModuleMeta(
    dep: TemplateDependency,
    variables?: KeyValuePair<string>,
    multiline: boolean = false
  ): ts.SourceFile {
    if (this.standalone || dep.standalone)
      return this.astTransformer.sourceFile;

    const copy = {
      import: this.asArray(dep.import || [], variables || {}),
      declare: this.asArray(dep.declare || [], variables || {}),
      provide: this.asArray(dep.provide || [], variables || {}),
      export: this.asArray(dep.export || [], variables || {}),
    };

    if (dep.from) {
      // add an import declaration for the dependency
      const uniqueIdentifiers = new Set<string>([
        ...copy.import,
        ...copy.declare,
        ...copy.provide,
        ...copy.export,
      ]);
      const identifiers = [...uniqueIdentifiers].map((name) => ({ name }));

      this.astTransformer.addImportDeclaration(
        identifiers.filter(
          (i) => !this.astTransformer.importDeclarationCollides(i)
        ),
        this.applyConfigTransformation(dep.from, variables!)
      );
    }

    if (dep.root && copy.import.length > 0) {
      // add forRoot to the module
      copy.import = copy.import.map((i) =>
        this.astTransformer.printer.printNode(
          ts.EmitHint.Unspecified,
          this.astTransformer.createCallExpression(
            i,
            NG_FOR_ROOT_IDENTIFIER_NAME
          ),
          this.astTransformer.sourceFile
        )
      );
    }

    if (copy.declare.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_MODULE_DECORATOR_NAME,
        copy.declare,
        AngularDecoratorMetaTarget.Declarations,
        multiline
      );
    }
    if (copy.import.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_MODULE_DECORATOR_NAME,
        copy.import,
        AngularDecoratorMetaTarget.Imports,
        multiline
      );
    }
    if (copy.provide.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_MODULE_DECORATOR_NAME,
        copy.provide,
        AngularDecoratorMetaTarget.Providers,
        multiline
      );
    }
    if (copy.export.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_MODULE_DECORATOR_NAME,
        copy.export,
        AngularDecoratorMetaTarget.Exports,
        multiline
      );
    }

    return this.astTransformer.sourceFile;
  }

  /**
   * Parses the AST and returns the resulting formatted source code.
   * @remarks This method should be called after all modifications have been made to the AST.
   */
  public finalize(): string {
    return this.astTransformer.finalize();
  }

  //#endregion

  //#region Internals

  /**
   * Updates an Angular decorator's metadata.
   * @param name The name of the decorator to update.
   * @param meta Names of identifiers to be added.
   * @param target The target metadata property to update.
   * @param multiline Whether to format the new entry as multiline.
   */
  private mutateNgDecoratorMeta(
    name: string,
    meta: string[],
    target: AngularDecoratorMetaTarget,
    multiline: boolean = false
  ): ts.SourceFile {
    const identifiers = meta.map(ts.factory.createIdentifier);
    const targetMetaProp = this.findNgDecoratorProperty(name, target);
    if (!targetMetaProp) {
      return this.astTransformer.addMemberToObjectLiteral(
        (node) => this.checkNgDecorator(name, node),
        {
          name: target,
          value: this.astTransformer.createArrayLiteralExpression(
            identifiers,
            multiline
          ),
        }
      );
    }

    if (ts.isArrayLiteralExpression(targetMetaProp.initializer)) {
      // prop assignment of the form { member: [...] }
      const existingIdentifiers = identifiers.filter((i) =>
        this.astTransformer.findElementInArrayLiteral((node: ts.Node) => {
          return (
            node.getText().includes(i.text) &&
            this.checkNgDecorator(NG_MODULE_DECORATOR_NAME, node)
          );
        })
      );

      return this.astTransformer.addMembersToArrayLiteral(
        (node) =>
          ts.isPropertyAssignment(node.parent) &&
          node.parent.name.getText() === target &&
          this.checkNgDecorator(name, node),
        identifiers.filter((i) => !existingIdentifiers.includes(i))
      );
    }

    // prop assignment of the form { member: <some-val> }
    return this.astTransformer.updateObjectLiteralMember(
      (node) => this.checkNgDecorator(name, node),
      {
        name: target,
        value: this.astTransformer.createArrayLiteralExpression(
          [targetMetaProp.initializer, ...identifiers],
          multiline
        ),
      }
    );
  }

  /**
   * Checks if a node has an ancenstor with a specific decorator.
   * @param name The name of the decoator.
   * @param node The node to start checking from.
   */
  private checkNgDecorator(name: string, node: ts.Node): boolean {
    return !!this.astTransformer.findNodeAncenstor(
      node,
      (node) =>
        ts.isDecorator(node) &&
        node.expression.getFirstToken()?.getText() === name
    );
  }

  /**
   * Finds a property assignment that exists in a specific NG decorator meta.
   * @param decoratorName The name of the decorator to check.
   * @param propName The property name to check.
   * @param node The node to start checking from.
   */
  private findNgDecoratorProperty(
    decoratorName: string,
    propName: string
  ): ts.PropertyAssignment | undefined {
    return this.astTransformer.findPropertyAssignment(
      (node) =>
        ts.isPropertyAssignment(node) &&
        node.name.getText() === propName &&
        !!this.astTransformer.findNodeAncenstor(
          node,
          (node) =>
            ts.isDecorator(node) &&
            node.expression.getFirstToken()?.getText() === decoratorName
        )
    );
  }

  /**
   * Creates an arrow function of the form `() => import(path).then(m => m.prop)`.
   * @param path The path to the module to import.
   * @param importedEntity The entity to import from the module.
   * @param root Whether it should be `loadChildren` or `loadComponent`.
   * @remarks If the `root` param is `true` the function will use `routes` as an `importedEntity`.
   */
  private createDynamicImport(
    path: string,
    importedEntity: string,
    root: boolean = false
  ): ts.ArrowFunction {
    const thenClause = root ? ROUTES_VARIABLE_NAME : importedEntity;
    // create the 'import(path)' expression
    const importExpression = ts.factory.createCallExpression(
      ts.factory.createIdentifier(IMPORT_IDENTIFIER_NAME),
      undefined, // type arguments
      [ts.factory.createStringLiteral(path)]
    );

    const thenFuncParamName = 'm';
    // create the 'm => m.prop' arrow function
    const thenExprArrowFuncBody = ts.factory.createArrowFunction(
      undefined, // modifiers
      undefined, // type parameters
      [
        ts.factory.createParameterDeclaration(
          undefined, // decorators
          undefined, // modifiers
          ts.factory.createIdentifier(thenFuncParamName)
        ),
      ],
      undefined,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.factory.createPropertyAccessChain(
        ts.factory.createIdentifier(thenFuncParamName),
        undefined, // question-dot token
        thenClause
      )
    );

    // build the '.then(m => m.prop)' expression and add it to the import expression
    const body = ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        importExpression,
        THEN_IDENTIFIER_NAME
      ),
      undefined, // type arguments
      [thenExprArrowFuncBody]
    );

    // Create the '() => import(path).then(m => m.prop)' arrow function
    const dynamicImport = ts.factory.createArrowFunction(
      undefined, // modifiers
      undefined, // type parameters
      [], // parameters
      undefined, // type
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      body
    );

    return dynamicImport;
  }

  /**
   * Converts a string or string array union to array.
   * @param value The value to convert.
   * @param variables Variables to replace in the strings.
   * @remraks Splits strings as comma delimited.
   */
  private asArray(
    value: string | string[],
    variables: KeyValuePair<string>
  ): string[] {
    let result: string[] = [];
    if (value) {
      result = typeof value === 'string' ? value.split(/\s*,\s*/) : value;
      result = result.map((x) => this.applyConfigTransformation(x, variables));
    }
    return result;
  }

  /**
   * Applies a configuration transformation to a string.
   * @param data The string to transform.
   * @param configuration The items to replace in the string.
   */
  private applyConfigTransformation = (
    data: string,
    configuration: KeyValuePair<string>
  ): string => {
    let key;
    for (key in configuration) {
      data = data.replace(
        new RegExp(Util.escapeRegExp(key), 'g'),
        configuration[key]
      );
    }

    return data;
  };

  /**
   * Adds a new entry to the routes array. With a component identifier and path or with redirect option.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param anchorElement The anchor element to insert.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   */
  private addRedirectOrSimpleRouteEntry(
    route: IAngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    anchorElement: IPropertyAssignment,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    if (route.lazyload) return this.astTransformer.sourceFile;

    if (route.path && route.identifierName) {
      this.addRouteEntry(
        route,
        visitCondition,
        anchorElement,
        multiline,
        prepend
      );
    }

    if (route.redirectTo) {
      this.addRedirectRouteEntry(
        route,
        visitCondition,
        anchorElement,
        multiline,
        prepend
      );
    }

    if (route.children?.length) {
      route.children.forEach((child) => {
        this.addChildRoute(route.path!, child, multiline, false);
      });
    }

    return this.astTransformer.sourceFile;
  }

  /**
   * Adds a new not lazy-loaded route entry to the routes array. With a component identifier and path.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param anchorElement The anchor element to insert to.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   */
  private addRouteEntry(
    route: IAngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    anchorElement: IPropertyAssignment,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    // if (!route.path || !route.identifierName || route.lazyload)
    //   return this.sourceFile;

    if (route.modulePath) {
      // add an import for the given identifier
      const routeIdentifier: IIdentifier = { name: route.identifierName };
      if (!this.astTransformer.importDeclarationCollides(routeIdentifier)) {
        // if identifierName, there must be a modulePath as well
        this.astTransformer.addImportDeclaration(
          [routeIdentifier],
          route.modulePath
        );
      }
    }

    const structure: IAngularRouteEntry[] = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(route.path),
      },
      {
        name: RouteTarget.Component,
        value: ts.factory.createIdentifier(route.identifierName),
      },
    ];
    if (route.data) {
      structure.push({
        name: AngularRouteTarget.Data,
        value: this.astTransformer.createObjectLiteralExpression(
          [route.data],
          multiline,
          ts.factory.createStringLiteral
        ),
      });
    }

    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    return this.astTransformer.addMembersToArrayLiteral(
      visitCondition,
      [newRoute],
      prepend,
      anchorElement
    );
  }

  /**
   * Adds a new not lazy-loaded route entry to the routes array. With a redirect option.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param anchorElement The anchor element to insert to.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   */
  private addRedirectRouteEntry(
    route: IAngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    anchorElement: IPropertyAssignment,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    // if (!route.redirectTo || route.lazyload) return this.sourceFile;
    const structure = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(route.path || ''),
      },
      {
        name: AngularRouteTarget.RedirectTo,
        value: ts.factory.createStringLiteral(route.redirectTo),
      },
    ];
    if (route.pathMatch) {
      structure.push({
        name: AngularRouteTarget.PathMatch,
        value: ts.factory.createStringLiteral(route.pathMatch),
      });
    }

    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    return this.astTransformer.addMembersToArrayLiteral(
      visitCondition,
      [newRoute],
      prepend,
      anchorElement
    );
  }

  /**
   * Adds a new lazy-loaded route entry to the routes array.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param anchorElement The anchor element to insert to.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   */
  private addLazyLoadedRouteEntry(
    route: IAngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    anchorElement: IPropertyAssignment,
    multiline: boolean = false,
    prepend: boolean = false
  ): ts.SourceFile {
    // if (
    //   !route.lazyload ||
    //   !route.path ||
    //   !route.identifierName ||
    //   !route.modulePath
    // )
    //   return this.sourceFile;

    const lazyLoadedModule = this.createDynamicImport(
      route.modulePath,
      route.identifierName,
      route.root
    );
    const propAssignmentName = route.root
      ? NG_LOAD_CHILDREN_IDENTIFIER_NAME
      : NG_LOAD_COMPONENT_IDENTIFIER_NAME;
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      [
        {
          name: RouteTarget.Path,
          value: ts.factory.createStringLiteral(route.path),
        },
        { name: propAssignmentName, value: lazyLoadedModule },
      ],
      multiline
    );

    return this.astTransformer.addMembersToArrayLiteral(
      visitCondition,
      [newRoute],
      prepend,
      anchorElement
    );
  }

  //#endregion
}