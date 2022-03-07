import { RequestedImport, TypeScriptFileUpdate } from "@igniteui/cli-core";
import * as ts from "typescript";

/**
 * Apply various updates to typescript files using AST
 */
export class TypeScriptFileUpdateWC extends TypeScriptFileUpdate {
	protected readonly notFoundWildCard: string = ".*";
	protected readonly routesIdentifier: string = "Route[]";

	protected createRouteImport(imp: RequestedImport): ts.ImportDeclaration {
		const importDeclaration = ts.factory.createImportDeclaration(
			undefined,
			undefined,
			undefined,
			ts.factory.createStringLiteral(imp.from));
		return importDeclaration;
	}

	protected createComponentForRouteEntry(className: string) {
		// called by createRouteEntry()
		return ts.factory.createPropertyAssignment("component", ts.factory.createStringLiteral(className));
	}

	protected createDataForRouteEntry(linkText: string) {
		// called by createRouteEntry()
		return ts.factory.createPropertyAssignment("name", ts.factory.createStringLiteral(linkText));
	}
}
