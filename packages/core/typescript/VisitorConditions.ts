import * as ts from 'typescript';
import { TypeScriptASTTransformer } from './TypeScriptASTTransformer';
import { ROUTES_VARIABLE_NAME } from '../util';

/**
 * Starting from the current node, look up the AST to find the variable declaration of the routes variable.
 * @param astTransformer Instance of the transformer that will look up the variable in the AST.
 * @param routesVariableName Name of the routes variable to look for.
 */
export const RoutesVariableAsParentCondition = (
  astTransformer: TypeScriptASTTransformer,
  routesVariableName: string = ROUTES_VARIABLE_NAME
) => {
  return (node: ts.Node): boolean =>
    !!astTransformer.findNodeAncestor(
      node,
      (node) =>
        ts.isVariableDeclaration(node) &&
        node.name.getText() === routesVariableName
    );
};

/**
 * Checks if the node is a property assignment with a specific name and string literal value.
 * @param name The name of the property assignment.
 * @param literal The string literal value to check for.
 */
export const PropertyAssignmentWithStringLiteralValueCondition = (
  name: string,
  literal: string
) => {
  return (node: ts.Node | ts.ObjectLiteralElementLike) =>
    ts.isPropertyAssignment(node) &&
    ts.isIdentifier(node.name) &&
    node.name.text === name &&
    ts.isStringLiteral(node.initializer) &&
    node.initializer.text === literal;
};
