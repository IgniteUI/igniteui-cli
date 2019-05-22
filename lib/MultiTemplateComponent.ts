import { Component, Template } from "@igniteui-cli/core";

export abstract class MultiTemplateComponent<T extends Template> implements Component {
	public name: string;
	public group: string;
	public description: string;
	public groupPriority = 0;

	get templates(): T[] {
		// TODO: prop-full
		const templates: T[] = [];

		this.templatesMap.forEach((value, key, map) => {
			templates.push(this.getTemplate(key));
		});

		return templates;
	}

	constructor(private testType, private templatesMap: Map<string, { name: string, widget: string }>) {
	}

	private create(c: new () => T): T {
		return new c();
	}

	/**
	 * Create a Template for a specific editor
	 * @param template Template id/type to use from mapping, e.g. "text-editor"
	 */
	private makeTemplate(template: string): T {
		let mapItem: {
			name: string;
			widget: string;
		};

		let result;

		if (this.templatesMap.has(template)) {
			mapItem = this.templatesMap.get(template);

			result = this.create(this.testType);

			result.id = template;
			result.name = mapItem.name;
			result.description = mapItem.widget + " template";
			//result["widget"] = mapItem.widget;
			result["mapItem"] = mapItem;

		}
		return result as T;
	}

	private getTemplate(id: string): T {
		return this.makeTemplate(id);
	}
}
