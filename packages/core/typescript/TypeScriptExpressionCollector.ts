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
      return expr1.kind === expr2.kind && expr1.text === expr2.text;
    } else if (ts.isIdentifier(expr1) && ts.isIdentifier(expr2)) {
      return expr1.text === expr2.text;
    } else if (this.isKeywordLiteral(expr1) && this.isKeywordLiteral(expr2)) {
      return expr1.kind === expr2.kind;
    }
    return false;
  }

  /**
   * Checks if an expression is a `true`, `false` or `null` keyword.
   */
  private isKeywordLiteral(expr: ts.Expression): boolean {
    return expr.kind === ts.SyntaxKind.TrueKeyword ||
      expr.kind === ts.SyntaxKind.FalseKeyword ||
      expr.kind === ts.SyntaxKind.NullKeyword;
  }

  /**
   * Gets the text of a property name that is an identifier, string or numeric literal.
   */
  private getPropertyName(prop: ts.ObjectLiteralElementLike): string | undefined {
    const name = prop.name;
    if (name && (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name))) {
      return name.text;
    }
    return undefined;
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
    ) => (this.getPropertyName(a) ?? "").localeCompare(this.getPropertyName(b) ?? "");
    // spread order is significant (later members override earlier ones), so only sort without spreads
    const hasSpread = [...obj1.properties, ...obj2.properties].some(p => ts.isSpreadAssignment(p));
    const sortedProps1 = hasSpread ? obj1.properties.slice() : obj1.properties.slice().sort(namesComparer);
    const sortedProps2 = hasSpread ? obj2.properties.slice() : obj2.properties.slice().sort(namesComparer);

    for (let i = 0; i < sortedProps1.length; i++) {
      const prop1 = sortedProps1[i];
      const prop2 = sortedProps2[i];

      // compare prop names
      const name = this.getPropertyName(prop1);
      if (name !== this.getPropertyName(prop2)) {
        return false;
      }
      // unsupported names (e.g. computed `[key]`) are never equal, spreads are compared by expression
      if (name === undefined && !(ts.isSpreadAssignment(prop1) && ts.isSpreadAssignment(prop2))) {
        return false;
      }

      if (!this.compareObjectMembers(prop1, prop2)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Compares the values of two object literal members with matching names.
   * Unsupported members (methods, accessors) are never equal, same as unsupported expressions.
   */
  private compareObjectMembers(
    prop1: ts.ObjectLiteralElementLike,
    prop2: ts.ObjectLiteralElementLike
  ): boolean {
    if (ts.isPropertyAssignment(prop1) && ts.isPropertyAssignment(prop2)) {
      return this.compareExpressions(prop1.initializer, prop2.initializer);
    }
    if (ts.isShorthandPropertyAssignment(prop1) && ts.isShorthandPropertyAssignment(prop2)) {
      // the value is the identifier itself, so matching names are enough
      return true;
    }
    if (ts.isSpreadAssignment(prop1) && ts.isSpreadAssignment(prop2)) {
      return this.compareExpressions(prop1.expression, prop2.expression);
    }
    return false;
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
      if (!this.compareExpressions(arr1.elements[i], arr2.elements[i])) {
        return false;
      }
    }

    return true;
  }
}
