import * as ts from 'typescript';

export class TypeScriptExpressionCollector {
  /**
   * Collects unique expressions from a list of expressions.
   * @param expressions List of expressions to collect unique expressions from.
   */
  public collectUniqueExpressions(
    expressions: ts.Expression[]
  ): ts.Expression[] {
    const uniqueExpressions: ts.Expression[] = [];
    for (const expr of expressions) {
      let isUnique = true;
      for (const uniqueExpr of uniqueExpressions) {
        if (this.compareExpressions(expr, uniqueExpr)) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueExpressions.push(expr);
      }
    }

    return uniqueExpressions;
  }

  /**
   * Compares two `ts.Expression` objects for equality.
   */
  private compareExpressions(
    expr1: ts.Expression,
    expr2: ts.Expression
  ): boolean {
    if (
      ts.isObjectLiteralExpression(expr1) &&
      ts.isObjectLiteralExpression(expr2)
    ) {
      return this.compareObjectLiterals(expr1, expr2);
    } else if (
      ts.isArrayLiteralExpression(expr1) &&
      ts.isArrayLiteralExpression(expr2)
    ) {
      return this.compareArrayLiterals(expr1, expr2);
    } else if (ts.isLiteralExpression(expr1) && ts.isLiteralExpression(expr2)) {
      return expr1.text === expr2.text;
    } else if (ts.isIdentifier(expr1) && ts.isIdentifier(expr2)) {
      return expr1.text === expr2.text;
    }
    return false;
  }

  /**
   * Compares two `ts.ObjectLiteralExpression` objects for equality.
   */
  private compareObjectLiterals(
    obj1: ts.ObjectLiteralExpression,
    obj2: ts.ObjectLiteralExpression
  ): boolean {
    if (obj1.properties.length !== obj2.properties.length) {
      return false;
    }

    const namesComparer = (
      a: ts.ObjectLiteralElementLike,
      b: ts.ObjectLiteralElementLike
    ) =>
      ts.isIdentifier(a.name) &&
      ts.isIdentifier(b.name) &&
      a.name.text.localeCompare(b.name.text);
    const sortedProps1 = obj1.properties.slice().sort(namesComparer);
    const sortedProps2 = obj2.properties.slice().sort(namesComparer);

    for (let i = 0; i < sortedProps1.length; i++) {
      const prop1 = sortedProps1[i];
      const prop2 = sortedProps2[i];

      // compare prop names
      if (
        ts.isIdentifier(prop1.name) &&
        ts.isIdentifier(prop2.name) &&
        prop1.name.text !== prop2.name.text
      ) {
        return false;
      }

      // compare prop values, only consider literal expressions and identifiers for the moment (alt: use lodash?)
      if (
        ts.isPropertyAssignment(prop1) &&
        ts.isPropertyAssignment(prop2) &&
        (!ts.isLiteralExpression(prop1.initializer) ||
          !ts.isLiteralExpression(prop2.initializer))
      ) {
        return false;
      }

      if (
        ts.isPropertyAssignment(prop1) &&
        ts.isPropertyAssignment(prop2) &&
        ts.isIdentifier(prop1.initializer) &&
        ts.isIdentifier(prop2.initializer) &&
        prop1.initializer.text !== prop2.initializer.text
      ) {
        return false;
      }
    }

    return true;
  }

  /**
   * Compares two `ts.ArrayLiteralExpression` objects for equality.
   */
  private compareArrayLiterals(
    arr1: ts.ArrayLiteralExpression,
    arr2: ts.ArrayLiteralExpression
  ): boolean {
    if (arr1.elements.length !== arr2.elements.length) {
      return false;
    }

    for (let i = 0; i < arr1.elements.length; i++) {
      const elem1 = arr1.elements[i];
      const elem2 = arr2.elements[i];
      if (
        ts.isObjectLiteralExpression(elem1) &&
        ts.isObjectLiteralExpression(elem2)
      ) {
        return this.compareObjectLiterals(elem1, elem2);
      } else if (
        ts.isLiteralExpression(elem1) &&
        ts.isLiteralExpression(elem2)
      ) {
        if (elem1.text !== elem2.text) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }
}
