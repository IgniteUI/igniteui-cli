
export enum FeatureOutputType {
	/** JS/JSON array output. */
	JS,
	/** XML-like output for AngularJS. */
	AngularJS
}

export class GridHelper {
	/** Request features to add inherit option for hierarchical grid */
	public hierarchical: boolean = false;
	/** Output type to render */
	public outputType: FeatureOutputType = FeatureOutputType.JS;
	/** Indent space used for formatting output */
	public space = "\t";

	private features;
	private featureProps = {
		Paging: { type: "local", pageSize: 5 },
		RowSelectors: {
			enableRowNumbering: true,
			multipleSelection: true, rowSelectorColumnWidth: 80
		}
	};

	/**
	 * Creates a new grid feature helper
	 */
	constructor() {
		this.features = [];
	}

	public generateFeatures(gridFeatures: string[], pad: number = 0): string {
		let result: string;
		if (gridFeatures) {
			for (const name of gridFeatures) {
				this.addFeature(name);
			}
		}

		switch (this.outputType) {
			case FeatureOutputType.AngularJS:
				result = this.generateXML(pad);
				break;
			case FeatureOutputType.JS:
			default:
				result = JSON.stringify(this.features, null, this.space)
					.replace(/([\r\n]+)/g, `$&${ this.space.repeat(pad) }`);
		}
		this.features = [];
		return result;
	}

	public addFeature(name, overrideOptions = null) {
		const feature = this.getFeature(name);

		if (overrideOptions) {
			Object.assign(feature, overrideOptions);
		}

		// can add additional properties and handling per case:
		switch (name) {
			case "Selection":
				this.features.push(feature);
				this.features.push(this.getFeature("RowSelectors"));
				break;
			default:
				this.features.push(feature);
				break;
		}
	}

	/**
	 * Returns and object like `{name: "feature"}` with any other default properties
	 * @param name Feature name
	 */
	private getFeature(name: string): object {
		const feature = { name };
		if (this.featureProps[name]) {
			Object.assign(feature, this.featureProps[name]);
		}
		if (this.hierarchical) {
			feature["inherit"] = true;
		}
		return feature;
	}

	private generateXML(pad: number): string {
		let result = "<features>";
		for (const feature of this.features) {
			result += `\r\n${ this.space.repeat(pad + 1) }<feature`;
			result += Object.keys(feature).reduce((str, key) => {
				str += ` ${key}="${ feature[key] }"`; return str;
			}, "");
			result += ">";
		}
		result += `\r\n${ this.space.repeat(pad) }</feature>`;
		return result;
	}
}
