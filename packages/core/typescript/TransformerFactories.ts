import * as ts from 'typescript';
import {
  ArrayLiteralExpressionEditOptions,
  Identifier,
  ImportDeclarationMeta,
  ObjectLiteralExpressionEditOptions,
  PropertyAssignment,
} from '../types';
import { SIDE_EFFECTS_IMPORT_TEMPLATE_NAME } from '../util';
import { TypeScriptExpressionCollector } from './TypeScriptExpressionCollector';

/**
 * Transformer factories for updating TypeScript source files.
 * Each factory is responsible for a specific transformation.
 * Each factory is a function that returns a transformer function.
 * The transformer function is responsible for visiting and transforming nodes in the AST.
 * The transformer function is passed to the TypeScript compiler API for processing.
 * The TypeScript compiler API will call the transformer function for each node in the AST.
 * The transformer function will return the transformed node or the original node if no transformation is applied.
 * 	If the transformer function returns `undefined`, `null` the respective node is removed from the AST.
 */

//#region Factories

/**
 * Creates a {@link ts.TransformerFactory} that adds a new member to a {@link ts.ObjectLiteralExpression}.
 */
export const newMemberInObjectLiteralTransformerFactory = (
  newProperty: ts.PropertyAssignment,
  visitCondition: (node: ts.Node) => boolean,
  expressionCollector: TypeScriptExpressionCollector,
  options: ObjectLiteralExpressionEditOptions
): ts.TransformerFactory<ts.SourceFile> => {
  return <T extends ts.Node>(context: ts.TransformationContext) => {
    return (rootNode: T) => {
      const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (ts.isObjectLiteralExpression(node) && visitCondition(node)) {
          const existingProperty = node.properties.find(
            (property) =>
              ts.isPropertyAssignment(property) &&
              ts.isIdentifier(property.name) &&
              ts.isIdentifier(newProperty.name) &&
              property.name.text === newProperty.name.text
          );
          if (!existingProperty) {
            return context.factory.updateObjectLiteralExpression(node, [
              ...node.properties,
              newProperty,
            ]);
          }

          /**
           * TODO: Consider supporting also:
           * 1. ts.SpreadAssignment - { ...x }
           * 2. ts.SpreadElement - [ ...x ]
           * 3. ts.JsxSpreadAttribute - <Component { ...x } />
           */
          if (
            !ts.isPropertyAssignment(existingProperty) &&
            !ts.isShorthandPropertyAssignment(existingProperty)
          ) {
            // narrow down to ts.PropertyAssignment | ts.ShorthandPropertyAssignment
            return ts.visitEachChild(node, visitor, context);
          }

          const existingPropInitializer = ts.isPropertyAssignment(
            existingProperty
          )
            ? existingProperty.initializer
            : existingProperty.objectAssignmentInitializer;
          if (ts.isArrayLiteralExpression(existingPropInitializer)) {
            return updatePropertyAssignmentWithArrayLiteral(
              newProperty,
              existingProperty,
              context,
              node,
              expressionCollector,
              options?.multiline,
              options?.override
            );
          }

          return updatePropertyAssignmentWithIdentifier(
            newProperty,
            existingProperty,
            context,
            node
          );
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(rootNode, visitor, ts.isSourceFile);
    };
  };
};

/**
 * Creates a {@link ts.TransformerFactory} that adds a new element to a {@link ts.ArrayLiteralExpression}.
 */
export const newMemberInArrayLiteralTransformerFactory = (
  visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
  elements: ts.Expression[],
  anchorElement?: ts.StringLiteral | ts.NumericLiteral | PropertyAssignment,
  options?: ArrayLiteralExpressionEditOptions
): ts.TransformerFactory<ts.SourceFile> => {
  return <T extends ts.Node>(context: ts.TransformationContext) => {
    return (rootNode: T) => {
      const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
        let anchor: ts.Expression | undefined;
        if (ts.isArrayLiteralExpression(node) && visitCondition(node)) {
          if (anchorElement) {
            anchor = Array.from(node.elements).find((e) => {
              if (ts.isStringLiteral(e) || ts.isNumericLiteral(e)) {
                // make sure the entry is a string or numeric literal
                // and that its text matches the anchor element's text
                return (
                  e.text ===
                  (anchorElement as ts.StringLiteral | ts.NumericLiteral).text
                );
              } else if (
                isPropertyAssignment(anchorElement) &&
                ts.isObjectLiteralExpression(e)
              ) {
                // make sure the entry is a property assignment
                // and that its name and value match the anchor element's
                return e.properties.some(
                  (p) =>
                    ts.isPropertyAssignment(p) &&
                    ts.isIdentifier(p.name) &&
                    p.name.text === anchorElement.name &&
                    ((ts.isStringLiteral(p.initializer) &&
                      ts.isStringLiteral(anchorElement.value)) ||
                      (ts.isNumericLiteral(p.initializer) &&
                        ts.isNumericLiteral(anchorElement.value))) &&
                    p.initializer.text === anchorElement.value.text
                );
              }
              return false;
            });
          }

          /**
           * TODO:
           * Consider extracting some of the logic to the factory that handles array literals as property initializers and reusing that here.
           * The anchor element should be preserved while it should also allow for overriding of the elements, if needed.
           */
          if (anchor) {
            let structure!: ts.Expression[];
            if (options?.prepend) {
              structure = node.elements
                .slice(0, node.elements.indexOf(anchor))
                .concat(elements)
                .concat(node.elements.slice(node.elements.indexOf(anchor)));
            } else {
              structure = node.elements
                .slice(0, node.elements.indexOf(anchor) + 1)
                .concat(elements)
                .concat(node.elements.slice(node.elements.indexOf(anchor) + 1));
            }

            return context.factory.updateArrayLiteralExpression(
              node,
              structure
            );
          }

          if (options?.prepend) {
            return context.factory.updateArrayLiteralExpression(node, [
              ...elements,
              ...node.elements,
            ]);
          }
          return context.factory.updateArrayLiteralExpression(node, [
            ...node.elements,
            ...elements,
          ]);
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(rootNode, visitor, ts.isSourceFile);
    };
  };
};

/**
 * Creates a {@link ts.TransformerFactory} that sorts the elements in a {@link ts.ArrayLiteralExpression}.
 */
export const sortInArrayLiteralTransformerFactory = (
  visitCondition: (node: ts.ArrayLiteralExpression) => boolean,
  sortCondition: (a: ts.Expression, b: ts.Expression) => number
) => {
  return <T extends ts.Node>(context: ts.TransformationContext) => {
    return (rootNode: T) => {
      const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (ts.isArrayLiteralExpression(node) && visitCondition(node)) {
          const elements = [...node.elements].sort(sortCondition);
          return context.factory.updateArrayLiteralExpression(node, elements);
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(rootNode, visitor, ts.isSourceFile);
    };
  };
};

/**
 * Creates a {@link ts.TransformerFactory} that adds a new argument to a {@link ts.CallExpression}.
 */
export const newArgumentInMethodCallExpressionTransformerFactory = (
  visitCondition: (node: ts.CallExpression) => boolean,
  argument: ts.Expression,
  position: number = -1,
  override: boolean = false
) => {
  return <T extends ts.Node>(context: ts.TransformationContext) => {
    return (rootNode: T) => {
      const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (ts.isCallExpression(node) && visitCondition(node)) {
          // append the argument at a specific position in the argument list
          if (position >= 0) {
            const updatedArguments = [...node.arguments];
            if (override) {
              updatedArguments[position] = argument;
            } else {
              updatedArguments.splice(position, 0, argument);
            }
            return ts.factory.updateCallExpression(
              node,
              node.expression,
              node.typeArguments,
              updatedArguments
            );
          }
          // append the argument at the end of the argument list
          const updatedArguments = [...node.arguments, argument];
          return ts.factory.updateCallExpression(
            node,
            node.expression,
            node.typeArguments,
            updatedArguments
          );
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(rootNode, visitor, ts.isSourceFile);
    };
  };
};

/**
 * Creates a {@link ts.TransformerFactory} that adds a new {@link ts.ImportDeclaration}.
 */
export const newImportDeclarationTransformerFactory = (
  importDeclarationMeta: ImportDeclarationMeta,
  isDefault: boolean = false,
  isSideEffects: boolean = false,
  singleQuotes: boolean = false
): ts.TransformerFactory<ts.SourceFile> => {
  return <T extends ts.Node>(context: ts.TransformationContext) => {
    return (rootNode: T) => {
      const sourceFile = rootNode.getSourceFile();
      let newStatements = [...sourceFile.statements];
      let importDeclarationUpdated = false;

      let identifiers = Array.isArray(importDeclarationMeta.identifiers)
        ? importDeclarationMeta.identifiers
        : [importDeclarationMeta.identifiers];

      // loop over the identifiers and filter out all that would collide with an existing import
      importDeclarationMeta.identifiers = identifiers = identifiers.filter(
        (identifier) => {
          return !importDeclarationCollides(
            identifier,
            sourceFile,
            importDeclarationMeta.moduleName,
            isSideEffects
          );
        }
      );

      // loop over the statements to find and update the necessary import declaration
      for (let i = 0; i < newStatements.length; i++) {
        const statement = newStatements[i];
        if (
          ts.isImportDeclaration(statement) &&
          getModuleSpecifierName(statement.moduleSpecifier) ===
            importDeclarationMeta.moduleName
        ) {
          // if there are new identifiers to add to an existing import declaration, update it
          const namedBindings = statement.importClause?.namedBindings;
          if (
            namedBindings &&
            ts.isNamedImports(namedBindings) &&
            identifiers.length > 0
          ) {
            importDeclarationUpdated = true;
            const updatedImportSpecifiers: ts.ImportSpecifier[] = [
              ...namedBindings.elements,
              ...identifiers.map(createImportSpecifierWithOptionalAlias),
            ];
            const updatedNamedImports: ts.NamedImports =
              context.factory.updateNamedImports(
                namedBindings,
                updatedImportSpecifiers
              );
            const updatedImportClause: ts.ImportClause =
              context.factory.updateImportClause(
                statement.importClause,
                false,
                statement.importClause.name,
                updatedNamedImports
              );

            newStatements[i] = context.factory.updateImportDeclaration(
              statement,
              statement.modifiers,
              updatedImportClause,
              statement.moduleSpecifier,
              statement.attributes
            );
          }
          // exit the loop after modifying the existing import declaration
          break;
        }
      }

      // if no import declaration was updated and there are identifiers to add,
      // create a new import declaration with the identifiers
      if (!importDeclarationUpdated && identifiers.length > 0) {
        const newImportDeclaration = createImportDeclaration(
          importDeclarationMeta,
          isDefault,
          isSideEffects,
          singleQuotes
        );
        newStatements = [
          ...sourceFile.statements.filter(ts.isImportDeclaration),
          newImportDeclaration,
          ...sourceFile.statements.filter((s) => !ts.isImportDeclaration(s)),
        ];
      }

      return ts.factory.updateSourceFile(sourceFile, newStatements);
    };
  };
};

//#endregion

//#region Helpers

export function createImportDeclaration(
  importDeclarationMeta: ImportDeclarationMeta,
  isDefault: boolean = false,
  isSideEffects: boolean = false,
  singleQuotes: boolean = false
): ts.ImportDeclaration {
  if (isSideEffects) {
    // create a side effects declaration of the form `import "my-module"`
    return ts.factory.createImportDeclaration(
      undefined, // modifiers
      undefined, // import clause
      ts.factory.createStringLiteral(
        importDeclarationMeta.moduleName,
        singleQuotes
      ) // module specifier
    );
  }

  const identifiers = Array.isArray(importDeclarationMeta.identifiers)
    ? importDeclarationMeta.identifiers
    : [importDeclarationMeta.identifiers];
  let importClause: ts.ImportClause;
  // isTypeOnly on the import clause is set to false because we don't import types atm
  // might change it later if we need sth like - import type { X } from "module"
  // TODO: consider adding functionality for namespaced imports of the form - import * as X from "module"
  if (isDefault) {
    importClause = ts.factory.createImportClause(
      false, // is type only
      ts.factory.createIdentifier(identifiers[0].name) as ts.Identifier, // name - import X from "module"
      undefined // named bindings
    );
  } else {
    const namedImport = ts.factory.createNamedImports(
      identifiers.map(createImportSpecifierWithOptionalAlias)
    );
    importClause = ts.factory.createImportClause(
      false, // is type only
      undefined, // name
      namedImport // named bindings - import { X, Y... } from "module"
    );
  }

  const importDeclaration = ts.factory.createImportDeclaration(
    undefined, // modifiers
    importClause,
    ts.factory.createStringLiteral(
      importDeclarationMeta.moduleName,
      singleQuotes
    ) // module specifier
  );

  return importDeclaration;
}

export function importDeclarationCollides(
  identifier: Identifier,
  sourceFile: ts.SourceFile,
  moduleName?: string,
  isSideEffects: boolean = false
): boolean {
  // identifiers are gathered from all import declarations
  // and are kept as separate entries in the map
  const allImportedIdentifiers = gatherImportDeclarations([
    ...sourceFile.statements,
  ]);

  if (isSideEffects && moduleName) {
    return Array.from(allImportedIdentifiers.values()).some(
      (importMeta) => importMeta.moduleName === moduleName
    );
  }

  const collidesWithExisting = Array.from(allImportedIdentifiers.values()).some(
    (importMeta) => {
      let collides = false;
      if (Array.isArray(importMeta.identifiers)) {
        return collides;
      }

      if (identifier.name === importMeta.identifiers.name) {
        collides = true;
      }

      if (identifier.alias) {
        return (
          identifier.alias === importMeta.identifiers.name ||
          identifier.alias === importMeta.identifiers.alias
        );
      }

      return collides;
    }
  );

  return collidesWithExisting;
}

/**
 * Determines if a given object is an instance of {@link PropertyAssignment}.
 * @param obj The object to check.
 */
export function isPropertyAssignment(obj: object): obj is PropertyAssignment {
  return (
    obj &&
    'name' in obj &&
    'value' in obj &&
    (ts.isExpression(obj.value as any) ||
      ts.isNumericLiteral(obj.value as any) ||
      ts.isStringLiteral(obj.value as any))
  );
}

/**
 * Updates a property assignment with an identifier node, takes the form of `member: <some-value>`.
 * @param newProperty The new property assignment to update with.
 * @param existingProperty The existing property assignment to update.
 * @param context The transformation context.
 * @param node The object literal expression node.
 */
function updatePropertyAssignmentWithIdentifier(
  newProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
  existingProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
  context: ts.TransformationContext,
  node: ts.ObjectLiteralExpression
): ts.ObjectLiteralExpression {
  const newPropInitializer = ts.isPropertyAssignment(newProperty)
    ? newProperty.initializer
    : newProperty.objectAssignmentInitializer;

  return updateProperty(node, existingProperty, newPropInitializer, context);
}

/**
 * Updates a property assignment with an array literal node, takes the form of `member: [<some-value>, <some-other-value>, ...]`.
 * @param newProperty The new property assignment to update with.
 * @param existingProperty The existing property assignment to update.
 * @param context The transformation context.
 * @param node The object literal expression node.
 * @param multiline Whether the array literal should be multiline.
 * @param override Whether to override all elements if the property's initializer is an array.
 */
function updatePropertyAssignmentWithArrayLiteral(
  newProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
  existingProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
  context: ts.TransformationContext,
  node: ts.ObjectLiteralExpression,
  expressionCollector: TypeScriptExpressionCollector,
  multiline: boolean,
  override: boolean
): ts.ObjectLiteralExpression {
  const existingPropInitializer = ts.isPropertyAssignment(existingProperty)
    ? existingProperty.initializer
    : existingProperty.objectAssignmentInitializer;
  const newPropInitializer = ts.isPropertyAssignment(newProperty)
    ? newProperty.initializer
    : newProperty.objectAssignmentInitializer;

  // at this point we know the initializer is an array literal expression, so it's safe to cast it
  const initializerAsArray =
    existingPropInitializer as ts.ArrayLiteralExpression;
  const elements = [...initializerAsArray.elements];
  const newElements = ts.isArrayLiteralExpression(newPropInitializer)
    ? [...newPropInitializer.elements]
    : [newPropInitializer];
  const uniqueElements = override
    ? expressionCollector.collectUniqueExpressions(newElements)
    : expressionCollector.collectUniqueExpressions([
        ...elements,
        ...newElements,
      ]);

  const valueExpression = context.factory.createArrayLiteralExpression(
    uniqueElements,
    multiline
  );

  return updateProperty(node, existingProperty, valueExpression, context);
}

/**
 * Updates a {@link ts.PropertyAssignment} with a new {@link ts.Initializer}.
 * @param node The object literal expression node.
 * @param existingProperty The property to update.
 * @param newInitializer The new initializer to set.
 * @param context The transformation context.
 */
function updateProperty(
  node: ts.ObjectLiteralExpression,
  existingProperty: ts.PropertyAssignment | ts.ShorthandPropertyAssignment,
  newInitializer: ts.Expression,
  context: ts.TransformationContext
): ts.ObjectLiteralExpression {
  const updatedProperty = ts.isPropertyAssignment(existingProperty)
    ? context.factory.updatePropertyAssignment(
        existingProperty,
        existingProperty.name,
        newInitializer
      )
    : context.factory.updateShorthandPropertyAssignment(
        existingProperty,
        existingProperty.name,
        newInitializer
      );

  const structure = Array.from(node.properties);
  const targetIndex = structure.indexOf(existingProperty);
  if (targetIndex > -1) {
    // attempt to modify the property assignment and preserve the order
    structure[targetIndex] = updatedProperty;
    return context.factory.updateObjectLiteralExpression(node, structure);
  }
  // append the property assignment at the end
  return context.factory.updateObjectLiteralExpression(node, [
    ...node.properties.filter((p) => p !== existingProperty),
    updatedProperty,
  ]);
}

/**
 * Creates an import specifier with an optional alias of the form `{ x <as y> }`.
 * @param identifier The identifier to import.
 */
function createImportSpecifierWithOptionalAlias(
  identifier: Identifier
): ts.ImportSpecifier {
  // the last arg of `createImportSpecifier` is required - this is where the alias goes
  // the second arg is optional, this is where the name goes, hence the following
  const aliasOrName = identifier.alias || identifier.name;
  return ts.factory.createImportSpecifier(
    false, // is type only
    identifier.alias ? ts.factory.createIdentifier(identifier.name) : undefined,
    ts.factory.createIdentifier(aliasOrName)
  );
}

/**
 * Get a module specifier's node text representation.
 * @param moduleSpecifier the specifier to get the name of.
 * @remarks This method is used to get the name of a module specifier in an import declaration.
 *  It should always be a string literal.
 */
function getModuleSpecifierName(moduleSpecifier: ts.Expression): string {
  if (ts.isStringLiteral(moduleSpecifier)) {
    return moduleSpecifier.text;
  }

  // a module specifier should always be a string literal, so this should never be reached
  throw new Error('Invalid module specifier.');
}

/**
 * Gathers all import declarations and separates them by their unique identifiers.
 * Will assign a template identifier for side effects imports.
 * @param statements The statements to search for import declarations.
 *
 * @remarks Distinguishes between the following import types:
 *
 * `import { X, Y... } from "module"` - a named import with an import clause that has named bindings - `{ X, Y... }`
 *
 * `import X from "module"` - a default import, it has an import clause without named bindings, it only has a name - `X`
 *
 * `import "module"` - a side effects import, it has no import clause
 *
 * It considers only top-level imports as valid, any imports that are not at the top of the file will be ignored.
 */
function gatherImportDeclarations(
  statements: ts.Statement[]
): Map<string, ImportDeclarationMeta> {
  const allImportedIdentifiers = new Map<string, ImportDeclarationMeta>();
  let i = 0;
  for (const statement of statements) {
    if (!ts.isImportDeclaration(statement)) {
      // import declarations are at the top of the file,
      // so we can safely break when we reach a node that is not an import declaration
      break;
    }

    if (!statement.importClause) {
      // a side effects import declaration
      const sideEffectsName = `${SIDE_EFFECTS_IMPORT_TEMPLATE_NAME}_${++i}`;
      allImportedIdentifiers.set(sideEffectsName, {
        identifiers: { name: sideEffectsName },
        moduleName: getModuleSpecifierName(statement.moduleSpecifier),
      });
      continue;
    }

    const importClause = statement.importClause;
    if (!importClause.namedBindings) {
      // a default import declaration
      allImportedIdentifiers.set(importClause.name.text, {
        identifiers: { name: importClause.name.text },
        moduleName: getModuleSpecifierName(statement.moduleSpecifier),
      });
      continue;
    }

    const namedBindings = importClause.namedBindings;
    if (namedBindings && ts.isNamedImports(namedBindings)) {
      // a named import declaration with a list of named bindings
      for (const element of namedBindings.elements) {
        const identifierName = element.propertyName
          ? element.propertyName.text
          : element.name.text;
        const alias = element.propertyName ? element.name.text : undefined;
        allImportedIdentifiers.set(identifierName, {
          identifiers: {
            name: identifierName,
            alias,
          },
          moduleName: getModuleSpecifierName(statement.moduleSpecifier),
        });
      }
    }
  }

  return allImportedIdentifiers;
}

//#endregion
