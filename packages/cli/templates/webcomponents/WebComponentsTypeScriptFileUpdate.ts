import * as ts from 'typescript';
import {
	FormatSettings,
	PropertyAssignment,
	RouteEntry,
	RouteLike,
	RouteTarget,
	variableAsParentCondition,
	TypeScriptFileUpdate,
	Util,
	WC_ANCHOR_ELEMENT,
	ROUTES_VARIABLE_NAME,
} from '@igniteui/cli-core';

export class WebComponentsTypeScriptFileUpdate extends TypeScriptFileUpdate {
	constructor(public filePath: string, formatSettings?: FormatSettings) {
		super(filePath, formatSettings);
	}

	//#region Overridden Public API

	public override addRoute(
		route: RouteLike,
		multiline: boolean = false,
		prepend: boolean = true,
		anchorElement: PropertyAssignment = WC_ANCHOR_ELEMENT
	): void {
		const routeName = Util.lowerDashed(route.name || route.path);
		this.requestSideEffectsImportForModule(`./${routeName}/${routeName}`);
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

	//#endregion

	//#region Overrides

	protected override buildRouteStructure(
		route: RouteLike,
		_multiline: boolean
	): RouteEntry[] {
		// default route
		let structure: RouteEntry[] = [
			{
				name: RouteTarget.Path,
				value: ts.factory.createStringLiteral(
					route.path,
					this.formatSettings.singleQuotes
				),
			},
			{
				name: RouteTarget.Component,
				value: ts.factory.createStringLiteral(
					route.aliasName || route.identifierName,
					this.formatSettings.singleQuotes
				),
			},
			{
				name: RouteTarget.Name,
				value: ts.factory.createStringLiteral(
					route.name,
					this.formatSettings.singleQuotes
				),
			},
		];

		// redirecting route
		if (route.redirectTo) {
			structure = [
				{
					name: RouteTarget.Path,
					value: ts.factory.createStringLiteral(
						route.path || '',
						this.formatSettings.singleQuotes
					),
				},
				{
					// vaadin/router uses the component's tag name when navigating
					name: RouteTarget.Component,
					value: ts.factory.createStringLiteral(
						route.redirectTo,
						this.formatSettings.singleQuotes
					),
				},
				{
					name: RouteTarget.Name,
					value: ts.factory.createStringLiteral(
						route.name,
						this.formatSettings.singleQuotes
					),
				},
			];
		}

		return structure;
	}

	//#endregion
}
