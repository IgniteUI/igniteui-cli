import * as ts from 'typescript';
import {
  RouteTarget,
  KeyValuePair,
  FormatSettings,
  PropertyAssignment,
  TemplateDependency,
  TypeScriptFileUpdate,
  variableAsParentCondition,
  ANCHOR_ELEMENT,
  RouteEntry,
  NG_SA_DECORATOR_NAME,
  NG_MODULE_DECORATOR_NAME,
  NG_FOR_ROOT_IDENTIFIER_NAME,
  WITH_COMPONENT_INPUT_BINDING,
  PROVIDE_ROUTER,
  NG_DECORATOR_PROVIDERS,
  NG_ROUTER_PACKAGE,
  TRUE_CLAUSE,
  ROUTES_VARIABLE_NAME,
  NG_HTTP_CLIENT_PROVIDER,
  NG_COMMON_HTTP_PACKAGE,
  NG_CONFIG_TESTING_MODULE,
} from '@igniteui/cli-core';
import {
  AngularRouteLike,
  AngularDecoratorMetaTarget,
  AngularRouteEntry,
  AngularRouteTarget,
} from './types';

export class AngularTypeScriptFileUpdate extends TypeScriptFileUpdate {
  /**
   * Creates a new AngularTypeScriptFileUpdate instance for the given file.
   * @param standalone Whether the file is a standalone component.
   * @param formatSettings Custom formatting settings to apply.
   */
  constructor(
    public readonly filePath: string,
    public readonly standalone: boolean = false,
    protected formatSettings?: FormatSettings,
    compilerOptions?: ts.CompilerOptions
  ) {
    super(filePath, formatSettings, compilerOptions);
  }

  //#region Public API

  /**
   * Adds a route entry to the Angular routing module's routes variable instance.
   * @param route The route to add.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  public override addRoute(
    route: AngularRouteLike,
    multiline: boolean = false,
    prepend: boolean = true,
    anchorElement: PropertyAssignment = ANCHOR_ELEMENT
  ): void {
    if (!route.lazyload) {
      this.requestImportForRouteIdentifier(route);
    }

    const structure = this.buildRouteStructure(route, multiline);
    const newRoute = this.astTransformer.createObjectLiteralExpression(
      structure,
      multiline
    );
    this.astTransformer.requestNewMembersInArrayLiteral(
      variableAsParentCondition(this.astTransformer, ROUTES_VARIABLE_NAME),
      [newRoute],
      prepend,
      anchorElement
    );
  }

  public override addChildRoute(
    parentPath: string,
    route: AngularRouteLike,
    asIdentifier: boolean = false,
    multiline: boolean = false
  ): void {
    super.addChildRoute(parentPath, route, asIdentifier, multiline);
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
  ): void {
    if (!this.standalone || !dep.standalone) return;

    const copy: AngularDecoratorMetaTarget = {
      imports: this.asArray(dep.import || [], variables || {}),
      providers: this.asArray(dep.provide || [], variables || {}),
      schemas: this.asArray(dep.schema || [], variables || {}),
    };
    if (dep.from) {
      this.addImportDeclarationForDependency(copy, dep.from, variables);
    }

    this.applyDecoratorMutations(NG_SA_DECORATOR_NAME, copy, multiline);
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
  ): void {
    if (this.standalone || dep.standalone) return;

    const copy: AngularDecoratorMetaTarget = {
      imports: this.asArray(dep.import || [], variables || {}),
      declarations: this.asArray(dep.declare || [], variables || {}),
      providers: this.asArray(dep.provide || [], variables || {}),
      exports: this.asArray(dep.export || [], variables || {}),
      schemas: this.asArray(dep.schema || [], variables || {}),
    };
    if (dep.from) {
      this.addImportDeclarationForDependency(copy, dep.from, variables);
    }

    this.addRootToModule(dep, copy);
    this.applyDecoratorMutations(NG_MODULE_DECORATOR_NAME, copy, multiline);
  }

  /**
   * Adds metadata to the arguments provided in `TestBed.configureTestingModule`.
   * @param dep The dependency to add to the testing module's metadata.
   * @param variables Variables to replace in the dependency strings.
   * @param multiline Whether to format the new entry as multiline.
   */
  public addTestingModuleMeta(
    dep: TemplateDependency,
    variables?: KeyValuePair<string>,
    multiline: boolean = false
  ) {
    const copy: AngularDecoratorMetaTarget = {
      imports: this.asArray(dep.import || [], variables || {}),
      declarations: this.asArray(dep.declare || [], variables || {}),
      providers: this.asArray(dep.provide || [], variables || {}),
      exports: this.asArray(dep.export || [], variables || {}),
      schemas: this.asArray(dep.schema || [], variables || {}),
    };
    if (dep.from) {
      this.addImportDeclarationForDependency(copy, dep.from, variables);
    }

    if (!this.standalone) {
      this.addRootToModule(dep, copy);
    }

    const parentIsConfigureTestingModule = (
      node: ts.PropertyAssignment | ts.ObjectLiteralExpression
    ) => {
      return !!this.astTransformer.findNodeAncestor(node, (_node) => {
        return (
          ts.isCallExpression(_node) &&
          ts.isPropertyAccessExpression(_node.expression) &&
          ts.isIdentifier(_node.expression.name) &&
          _node.expression.name.text === NG_CONFIG_TESTING_MODULE
        );
      });
    };
    const findTargetMetaProp = (propName: string) =>
      this.astTransformer.findPropertyAssignment(
        (node) =>
          ts.isIdentifier(node.name) &&
          node.name.text === propName &&
          parentIsConfigureTestingModule(node)
      );
    for (const key of Object.keys(copy)) {
      const targetMetaProp = findTargetMetaProp(key);
      const identifiers = copy[key].map(ts.factory.createIdentifier);
      if (copy[key].length > 0) {
        this.mutateNgMeta(
          key,
          targetMetaProp,
          identifiers,
          parentIsConfigureTestingModule,
          multiline
        );
      }
    }
  }

  /**
   * Includes `{ bindToComponentInputs: true }` for a `forRoot` call in an `NgModule`'s `imports` member.
   *
   * For standalone projects, includes an `withComponentInputBinding` call in a `providers` variable. Mainly present in an `app.config` file.
   */
  public allowComponentInputBinding() {
    if (this.standalone) {
      this.astTransformer.requestNewImportDeclaration({
        identifiers: [{ name: WITH_COMPONENT_INPUT_BINDING }],
        moduleName: NG_ROUTER_PACKAGE,
      });
      // create withComponentInputBinding()
      const callExpr = ts.factory.createCallExpression(
        ts.factory.createIdentifier(WITH_COMPONENT_INPUT_BINDING),
        undefined, // type args
        [] // args
      );
      this.astTransformer.requestNewArgumentInMethodCallExpression(
        (node) =>
          ts.isIdentifier(node.expression) &&
          node.expression.text === PROVIDE_ROUTER &&
          variableAsParentCondition(
            this.astTransformer,
            NG_DECORATOR_PROVIDERS
          )(node),
        callExpr
      );
    } else {
      const objLiteral = this.astTransformer.createObjectLiteralExpression(
        [{ bindToComponentInputs: TRUE_CLAUSE }],
        false, // multiline
        () => ts.factory.createTrue()
      );
      this.astTransformer.requestNewArgumentInMethodCallExpression(
        (node) =>
          ts.isPropertyAccessExpression(node.expression) &&
          ts.isIdentifier(node.expression.name) &&
          node.expression.name.text === NG_FOR_ROOT_IDENTIFIER_NAME &&
          this.checkNgDecorator(NG_MODULE_DECORATOR_NAME, node),
        objLiteral
      );
    }
  }

  /**
   * Provides the `HttpClient` for standalone applications.
   */
  public provideHttpClientForStandaloneAppConfig() {
    this.astTransformer.requestNewImportDeclaration({
      identifiers: [{ name: NG_HTTP_CLIENT_PROVIDER }],
      moduleName: NG_COMMON_HTTP_PACKAGE,
    });

    // create provideHttpClient()
    const callExpr = ts.factory.createCallExpression(
      ts.factory.createIdentifier(NG_HTTP_CLIENT_PROVIDER),
      undefined, // type args
      [] // args
    );
    this.astTransformer.requestNewMembersInArrayLiteral(
      variableAsParentCondition(this.astTransformer, NG_DECORATOR_PROVIDERS),
      [callExpr]
    );
  }

  //#endregion

  //#region Protected Overrides

  protected override buildRouteStructure(
    route: AngularRouteLike,
    multiline: boolean
  ): RouteEntry[] {
    let structure: AngularRouteEntry[] = [];

    // lazily loaded route
    if (
      route.lazyload &&
      route.path &&
      route.identifierName &&
      route.modulePath
    ) {
      const lazyLoadedModule = this.createDynamicImport(
        route.modulePath,
        route.identifierName,
        route.root
      );
      const propAssignmentName = route.root
        ? AngularRouteTarget.LoadChildren
        : AngularRouteTarget.LoadComponent;

      structure = [
        {
          name: RouteTarget.Path,
          value: ts.factory.createStringLiteral(
            route.path,
            this.formatSettings?.singleQuotes
          ),
        },
        { name: propAssignmentName, value: lazyLoadedModule },
      ];
    }

    if (route.redirectTo) {
      // redirect route
      structure = [
        {
          name: RouteTarget.Path,
          value: ts.factory.createStringLiteral(
            route.path || '',
            this.formatSettings?.singleQuotes
          ),
        },
        {
          name: AngularRouteTarget.RedirectTo,
          value: ts.factory.createStringLiteral(
            route.redirectTo,
            this.formatSettings?.singleQuotes
          ),
        },
      ];
      if (route.pathMatch) {
        structure.push({
          name: AngularRouteTarget.PathMatch,
          value: ts.factory.createStringLiteral(
            route.pathMatch,
            this.formatSettings?.singleQuotes
          ),
        });
      }
    } else if (!route.lazyload) {
      // default route
      structure = [
        {
          name: RouteTarget.Path,
          value: ts.factory.createStringLiteral(
            route.path,
            this.formatSettings?.singleQuotes
          ),
        },
        {
          name: RouteTarget.Component,
          value: ts.factory.createIdentifier(
            route.aliasName || route.identifierName
          ),
        },
      ];
    }

    if (route.data) {
      structure.push({
        name: AngularRouteTarget.Data,
        value: this.astTransformer.createObjectLiteralExpression(
          [route.data],
          multiline,
          (value) =>
            ts.factory.createStringLiteral(
              value,
              this.formatSettings?.singleQuotes
            )
        ),
      });
    }

    return structure as RouteEntry[];
  }

  //#endregion

  //#region Internals

  /**
   * Add an imort declaration for the dependency.
   * @param meta The metadata to use for the import declaration.
   * @param moduleName The name of the module to import from.
   * @param variables Variables to replace in the dependency strings.
   */
  private addImportDeclarationForDependency(
    meta: AngularDecoratorMetaTarget,
    moduleName: string,
    variables?: KeyValuePair<string>
  ): void {
    // add an import declaration for the dependency
    const uniqueIdentifiers = new Set<string>(Object.values(meta).flat());
    const identifiers = [...uniqueIdentifiers].map((name) => ({ name }));
    this.astTransformer.requestNewImportDeclaration({
      identifiers,
      moduleName: this.applyConfigTransformation(moduleName, variables!),
    });
  }

  /**
   * Applies mutations to an Angular decorator's metadata.
   * @param decoratorName The name of the decorator to update.
   * @param meta The metadata to use for the mutations.
   * @param multiline Whether to format the new entry as multiline.
   */
  private applyDecoratorMutations(
    decoratorName: string,
    meta: AngularDecoratorMetaTarget,
    multiline: boolean = false
  ): void {
    for (const key of Object.keys(meta)) {
      if (meta[key].length > 0) {
        this.mutateNgDecoratorMeta(decoratorName, meta[key], key, multiline);
      }
    }
  }

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
    target: string,
    multiline: boolean = false
  ): void {
    const identifiers = meta.map(ts.factory.createIdentifier);
    const targetMetaProp = this.findNgDecoratorProperty(name, target);
    this.mutateNgMeta(
      target,
      targetMetaProp,
      identifiers,
      (node) => this.checkNgDecorator(name, node),
      multiline
    );
  }

  /**
   * Updates Angular's metadata related to NgModules, Standalone Components or TestingModules.
   * @param target The name of the target metadata property to update.
   * @param targetMetaProp The property that is to be updated.
   * @param identifiers The identifiers to add.
   * @param visitorCondition The condition to find the object literal that contains the target property.
   * @param multiline Whether to format the new entry as multiline.
   */
  private mutateNgMeta(
    target: string,
    targetMetaProp: ts.PropertyAssignment,
    identifiers: ts.Identifier[],
    visitorCondition: (node: ts.ObjectLiteralExpression) => boolean,
    multiline: boolean
  ): void {
    const value =
      targetMetaProp && !ts.isArrayLiteralExpression(targetMetaProp.initializer)
        ? [targetMetaProp.initializer, ...identifiers]
        : identifiers;
    this.astTransformer.requestNewMemberInObjectLiteral(
      visitorCondition,
      target,
      this.astTransformer.createArrayLiteralExpression(value, multiline),
      multiline
    );
  }

  /**
   * Checks if a node has an ancestor with a specific decorator.
   * @param name The name of the decorator.
   * @param node The node to start checking from.
   */
  private checkNgDecorator(name: string, node: ts.Node): boolean {
    const getNodeExpressionTokenName = (node: ts.Node) => {
      const nodeExpression =
        ts.isDecorator(node) &&
        ts.isCallExpression(node.expression) &&
        node.expression;
      const token =
        nodeExpression &&
        ts.isIdentifier(nodeExpression.expression) &&
        nodeExpression.expression;
      return ts.isIdentifier(token) && token.text;
    };
    return !!this.astTransformer.findNodeAncestor(
      node,
      (node) => getNodeExpressionTokenName(node) === name
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
    const ngDecoratorExists = (node: ts.PropertyAssignment): boolean =>
      !!this.astTransformer.findNodeAncestor(node, (_node) => {
        const nodeExpressionToken =
          ts.isDecorator(_node) &&
          ts.isCallExpression(_node.expression) &&
          _node.expression.expression;
        return (
          ts.isIdentifier(nodeExpressionToken) &&
          nodeExpressionToken.text === decoratorName
        );
      });
    return this.astTransformer.findPropertyAssignment(
      (node) =>
        ts.isIdentifier(node.name) &&
        node.name.text === propName &&
        ngDecoratorExists(node)
    );
  }

  /**
   * Calls `forRoot` on a module identifier.
   * @param dep The dependency to add to the module's metadata.
   * @param copy The copy of the module's metadata.
   * @param args The arguments to pass to the `forRoot` call.
   */
  private addRootToModule(
    dep: TemplateDependency,
    copy: AngularDecoratorMetaTarget,
    args?: ts.Expression | ts.Expression[]
  ) {
    if (dep.root && copy.imports.length > 0) {
      // add forRoot to the module
      let forRootArgs: ts.Expression[] = [
        this.astTransformer.createArrayLiteralExpression([]),
      ];
      if (args) {
        forRootArgs = Array.isArray(args)
          ? args
          : [this.astTransformer.createArrayLiteralExpression([args])];
      }
      copy.imports = copy.imports.map((i) =>
        this.astTransformer.printer.printNode(
          ts.EmitHint.Unspecified,
          this.astTransformer.createCallExpression(
            i,
            NG_FOR_ROOT_IDENTIFIER_NAME,
            undefined, // type args
            forRootArgs
          ),
          this.astTransformer.sourceFile
        )
      );
    }
  }

  //#endregion
}
