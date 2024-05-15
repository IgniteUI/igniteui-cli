import * as ts from 'typescript';
import {
	FormatSettings,
	PropertyAssignment,
	RouteEntry,
	RouteLike,
	RouteTarget,
	RoutesVariableAsParentCondition,
	TypeScriptFileUpdate,
	Util,
	WC_ANCHOR_ELEMENT,
} from '@igniteui/cli-core';

export class WebComponentsTypeScriptFileUpdate extends TypeScriptFileUpdate {
	constructor(public filePath: string, formatSettings?: FormatSettings) {
		super(filePath, formatSettings);
	}

	//#region Overridden Public API

	public addRoute(
		route: RouteLike,
		multiline: boolean = false,
		prepend: boolean = true,
		anchorElement: PropertyAssignment = WC_ANCHOR_ELEMENT
	): ts.SourceFile {
		return this.addRedirectOrSimpleRouteEntry(
			route,
			RoutesVariableAsParentCondition(this.astTransformer),
			multiline,
			prepend,
			anchorElement
		);
	}

	public addChildRoute(
		parentPath: string,
		route: RouteLike,
		asIdentifier: boolean = true,
		multiline?: boolean,
		prepend?: boolean,
		anchorElement?: PropertyAssignment
	): ts.SourceFile {
		return super.addChildRoute(
			parentPath,
			route,
			asIdentifier,
			multiline,
			prepend,
			anchorElement
		);
	}

	//#endregion

	//#region Overrides

	protected addRouteEntry(
		route: RouteLike,
		visitCondition: (node: ts.Node) => boolean,
		multiline: boolean = false,
		prepend: boolean = false,
		anchorElement: PropertyAssignment
	): ts.SourceFile {
		const routeName = Util.lowerDashed(route.name || route.path);
		this.requestSideEffectsImportForModule(`./${routeName}/${routeName}`);
		if (
			route.children &&
			!Array.isArray(route.children) &&
			(route.children.identifierName || route.children.aliasName)
		) {
			this.requestImportForRouteIdentifier(route.children);
		}

		const structure: RouteEntry[] = [
			{
				name: RouteTarget.Path,
				value: ts.factory.createStringLiteral(route.path),
			},
			{
				name: RouteTarget.Component,
				value: ts.factory.createStringLiteral(
					route.aliasName || route.identifierName
				),
			},
			{
				name: RouteTarget.Name,
				value: ts.factory.createStringLiteral(route.name),
			},
		];
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

	protected addRedirectRouteEntry(
		route: RouteLike,
		visitCondition: (node: ts.Node) => boolean,
		multiline: boolean = false,
		prepend: boolean = false,
		anchorElement: PropertyAssignment
	): ts.SourceFile {
		const routeName = Util.lowerDashed(route.name || route.path);
		this.requestSideEffectsImportForModule(`./${routeName}/${routeName}`);
		const childRoute = route.children as RouteLike;
		if (childRoute) {
			this.requestImportForRouteIdentifier(childRoute);
		}

		const structure: RouteEntry[] = [
			{
				name: RouteTarget.Path,
				value: ts.factory.createStringLiteral(route.path || ''),
			},
			{
				// vaadin/router uses the component's tag name when navigating
				name: RouteTarget.Component,
				value: ts.factory.createStringLiteral(route.redirectTo),
			},
			{
				name: RouteTarget.Name,
				value: ts.factory.createStringLiteral(route.name),
			},
		];
		if (childRoute) {
			structure.push({
				// the identifier name in this case will be the alias of the routes variable
				name: RouteTarget.Children,
				value: ts.factory.createIdentifier(
					childRoute.aliasName || childRoute.identifierName
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

	protected addChildRouteEntry(
		route: RouteLike,
		asIdentifier: boolean = true,
		multiline: boolean = false,
		prepend: boolean = false
	): ts.SourceFile {
		return super.addChildRouteEntry(
			route,
			asIdentifier || true, // for WC the `children` member should always be added in the form { children: identifier }
			multiline,
			prepend
		);
	}

	//#endregion
}
