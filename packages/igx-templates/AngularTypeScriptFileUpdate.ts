import * as ts from 'typescript';
import {
  RouteTarget,
  KeyValuePair,
  FormatSettings,
  PropertyAssignment,
  TemplateDependency,
  TypeScriptFileUpdate,
  RoutesVariableAsParentCondition,
  ANCHOR_ELEMENT,
  NG_SA_DECORATOR_NAME,
  NG_MODULE_DECORATOR_NAME,
  NG_FOR_ROOT_IDENTIFIER_NAME,
  RouteEntry,
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
    protected filePath: string,
    private standalone: boolean = false,
    protected formatSettings?: FormatSettings
  ) {
    super(filePath, formatSettings);
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
      RoutesVariableAsParentCondition(this.astTransformer),
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

    const copy = {
      import: this.asArray(dep.import || [], variables || {}),
      provide: this.asArray(dep.provide || [], variables || {}),
      schemas: this.asArray(dep.schema || [], variables || {}),
    };

    if (dep.from) {
      // add an import declaration for the dependency
      const uniqueIdentifiers = new Set<string>([
        ...copy.import,
        ...copy.provide,
        ...copy.schemas,
      ]);
      const identifiers = [...uniqueIdentifiers].map((name) => ({ name }));
      this.astTransformer.requestNewImportDeclaration({
        identifiers,
        moduleName: this.applyConfigTransformation(dep.from, variables!),
      });
    }

    if (copy.import.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_SA_DECORATOR_NAME,
        copy.import,
        AngularDecoratorMetaTarget.Imports,
        multiline
      );
    }
    if (copy.provide.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_SA_DECORATOR_NAME,
        copy.provide,
        AngularDecoratorMetaTarget.Providers,
        multiline
      );
    }
    if (copy.schemas.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_SA_DECORATOR_NAME,
        copy.schemas,
        AngularDecoratorMetaTarget.Schemas,
        multiline
      );
    }
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

    const copy = {
      import: this.asArray(dep.import || [], variables || {}),
      declare: this.asArray(dep.declare || [], variables || {}),
      provide: this.asArray(dep.provide || [], variables || {}),
      export: this.asArray(dep.export || [], variables || {}),
      schemas: this.asArray(dep.schema || [], variables || {}),
    };

    if (dep.from) {
      // add an import declaration for the dependency
      const uniqueIdentifiers = new Set<string>([
        ...copy.import,
        ...copy.declare,
        ...copy.provide,
        ...copy.export,
        ...copy.schemas,
      ]);
      const identifiers = [...uniqueIdentifiers].map((name) => ({ name }));
      this.astTransformer.requestNewImportDeclaration({
        identifiers,
        moduleName: this.applyConfigTransformation(dep.from, variables!),
      });
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
    if (copy.schemas.length > 0) {
      this.mutateNgDecoratorMeta(
        NG_MODULE_DECORATOR_NAME,
        copy.schemas,
        AngularDecoratorMetaTarget.Schemas,
        multiline
      );
    }
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
  ): void {
    const identifiers = meta.map(ts.factory.createIdentifier);
    const targetMetaProp = this.findNgDecoratorProperty(name, target);

    const value =
      targetMetaProp && !ts.isArrayLiteralExpression(targetMetaProp.initializer)
        ? [targetMetaProp.initializer, ...identifiers]
        : identifiers;
    this.astTransformer.requestNewMemberInObjectLiteral(
      (node) => this.checkNgDecorator(name, node),
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
    const ngDecoratorExists = (node: ts.Node): boolean =>
      !!this.astTransformer.findNodeAncestor(node, (node) => {
        const nodeExpressionToken =
          ts.isDecorator(node) && node.expression.getFirstToken();
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

  //#endregion
}
