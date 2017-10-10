export abstract class MultiTemplateComponent<T extends Template> implements Component {
	name: string;
	group : string;

	get templates(): T[] {
		var templates: T[] = [];

		this.templatesMap.forEach((value, key, map) => {
			templates.push(this.getTemplate(key));
		});	

		return templates;
	}	
	/**
	 *
	 */
	constructor(private testType, private templatesMap : Map<string, {name:string, widget: string}>) {
		
	}

	create<T extends Template>(c: new () => T): T {
		return new c();
	}

	/**
	 * Create a Template for a specific editor
	 * @param template Template id/type to use from mapping, e.g. "text-editor"
	 */
	private makeTemplate(template: string) : T {
		var mapItem: {
			name: string;
			widget: string;
		};
		

		if (this.templatesMap.has(template)) {
			mapItem = this.templatesMap.get(template);
			
			var result = this.create(this.testType);

			result.id = template;
			result.name = mapItem.name;
			result.description = mapItem.widget + " template",
			//result["widget"] = mapItem.widget;
			result["mapItem"] = mapItem;

		}
		return <T>result;
	}

	//protected abstract generateFiles (mapItem:{name: string; widget: string;}, projectPath: string, name: string, ...options: any[]): Promise<boolean>;
	//protected abstract registerInProject (folderPath: string, projectConfig:any): boolean;

	getTemplate(id: string): T {
		return this.makeTemplate(id);
	}

	
}	


