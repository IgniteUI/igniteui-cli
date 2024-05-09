import * as ts from 'typescript';
import {
  Identifier,
  RouteTarget,
  KeyValuePair,
  FormatSettings,
  PropertyAssignment,
  TemplateDependency,
  TypeScriptFileUpdate,
  RoutesVariableAsParentCondition,
  FindPropertyAssignmentWithStringLiteralValue,
  ANCHOR_ELEMENT,
  NG_SA_DECORATOR_NAME,
  NG_MODULE_DECORATOR_NAME,
  NG_FOR_ROOT_IDENTIFIER_NAME,
} from '@igniteui/cli-core';
import {
  AngularRouteLike,
  AngularDecoratorMetaTarget,
  AngularRouteEntry,
  AngularRouteTarget,
} from './types';

export class AngularTypeScriptFileUpdate extends TypeScriptFileUpdate {
  constructor(
    protected targetPath: string,
    private standalone: boolean = false,
    formatSettings?: FormatSettings
  ) {
    super(targetPath, formatSettings);
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
  public addRoute(
    route: AngularRouteLike,
    multiline: boolean = false,
    prepend: boolean = true,
    anchorElement: PropertyAssignment = ANCHOR_ELEMENT
  ): ts.SourceFile {
    if (
      route.lazyload &&
      route.path &&
      route.identifierName &&
      route.modulePath
    ) {
      return this.addLazyLoadedRouteEntry(
        route,
        RoutesVariableAsParentCondition(this.astTransformer),
        multiline,
        prepend,
        anchorElement
      );
    }

    return this.addRedirectOrSimpleRouteEntry(
      route,
      RoutesVariableAsParentCondition(this.astTransformer),
      multiline,
      prepend,
      anchorElement
    );
  }

  /**
   * Adds a child route to a parent route.
   * @param parentPath The path of the parent route.
   * @param route The child route to add.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to prepend the new added routes.
   * @param anchorElement The anchor element to insert to.
   * @remarks The `parentPath` is used to determine where the child route should be added.
   */
  public addChildRoute(
    parentPath: string,
    route: AngularRouteLike,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment = ANCHOR_ELEMENT
  ): ts.SourceFile {
    if (
      route.lazyload &&
      route.path &&
      route.identifierName &&
      route.modulePath
    ) {
      return this.addLazyLoadedRouteEntry(
        route,
        FindPropertyAssignmentWithStringLiteralValue(parentPath),
        multiline,
        true, // prepend
        ANCHOR_ELEMENT
      );
    }

    return super.addChildRoute(
      parentPath,
      route,
      multiline,
      prepend,
      anchorElement
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
      const uniqueIdentifiers = new Set<string>([
        ...copy.import,
        ...copy.provide,
      ]);
      const identifiers = [...uniqueIdentifiers]
        .filter(
          (name) => !this.astTransformer.importDeclarationCollides({ name })
        )
        .map((name) => ({ name }));
      this.astTransformer.addImportDeclaration({
        identifiers,
        moduleName: this.applyConfigTransformation(dep.from, variables!),
      });
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
      const identifiers = [...uniqueIdentifiers]
        .filter(
          (name) => !this.astTransformer.importDeclarationCollides({ name })
        )
        .map((name) => ({ name }));
      this.astTransformer.addImportDeclaration({
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

    return this.astTransformer.sourceFile;
  }

  //#endregion

  //#region Protected Overrides

  /**
   * Adds a new not lazy-loaded route entry to the routes array. With a component identifier and path.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  protected addRouteEntry(
    route: AngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
    if (route.modulePath) {
      // add an import for the given identifier
      const routeIdentifier: Identifier = { name: route.identifierName };
      if (!this.astTransformer.importDeclarationCollides(routeIdentifier)) {
        // if there is an identifierName, there must be a modulePath as well
        this.astTransformer.addImportDeclaration({
          identifiers: routeIdentifier,
          moduleName: route.modulePath,
        });
      }
    }

    const structure: AngularRouteEntry[] = [
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
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  protected addRedirectRouteEntry(
    route: AngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
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
      // store to avoid second type check due to different context in the filter
      const elementsAsNodeArray = targetMetaProp.initializer.elements;
      const elementsToAdd = identifiers.filter(
        (i) => !elementsAsNodeArray.some((el) => el.getText() === i.text)
      );

      return this.astTransformer.addMembersToArrayLiteral(
        (node) =>
          ts.isPropertyAssignment(node.parent) &&
          node.parent.name.getText() === target &&
          this.checkNgDecorator(name, node),
        elementsToAdd
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
   * Checks if a node has an ancestor with a specific decorator.
   * @param name The name of the decorator.
   * @param node The node to start checking from.
   */
  private checkNgDecorator(name: string, node: ts.Node): boolean {
    return !!this.astTransformer.findNodeAncestor(
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
        node.name.getText() === propName &&
        !!this.astTransformer.findNodeAncestor(
          node,
          (node) =>
            ts.isDecorator(node) &&
            node.expression.getFirstToken()?.getText() === decoratorName
        )
    );
  }

  /**
   * Adds a new lazy-loaded route entry to the routes array.
   * @param route The route to add.
   * @param visitCondition The condition used to find the appropriate route node.
   * @param multiline Whether to format the new entry as multiline.
   * @param prepend Whether to insert the new entry before the anchor element.
   *  If no anchor is provided, the new entry will be added to the start or end of the array.
   * @param anchorElement The anchor element to insert to.
   */
  private addLazyLoadedRouteEntry(
    route: AngularRouteLike,
    visitCondition: (node: ts.Node) => boolean,
    multiline: boolean = false,
    prepend: boolean = false,
    anchorElement: PropertyAssignment
  ): ts.SourceFile {
    const lazyLoadedModule = this.createDynamicImport(
      route.modulePath,
      route.identifierName,
      route.root
    );
    const propAssignmentName = route.root
      ? AngularRouteTarget.LoadChildren
      : AngularRouteTarget.LoadComponent;

    const structure: AngularRouteEntry[] = [
      {
        name: RouteTarget.Path,
        value: ts.factory.createStringLiteral(route.path),
      },
      { name: propAssignmentName, value: lazyLoadedModule },
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

  //#endregion
}
