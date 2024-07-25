import * as ts from 'typescript';
import { TypeScriptASTTransformer } from './TypeScriptASTTransformer';

/**
 * Starting from the current node, look up the AST to find the variable declaration that holds the current node.
 * @param astTransformer Instance of the transformer that will look up the variable in the AST.
 * @param variableName Name of the variable to look for.
 */
export const variableAsParentCondition = (
  astTransformer: TypeScriptASTTransformer,
  variableName: string
) => {
  return (node: ts.Node): boolean =>
    !!astTransformer.findNodeAncestor(
      node,
      (node) =>
        ts.isVariableDeclaration(node) &&
        node.name.getText() === variableName
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
