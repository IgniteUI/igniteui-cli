import { IgniteUIForAngularTemplate } from "../../../../../lib/templates/IgniteUIForAngularTemplate";

class IgxAutocompleteTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Autocomplete"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "autocomplete";
		this.projectType = "igx-ts";
		this.name = "Enhanced Autocomplete";
		this.description = "IgxAutocomplete with enhanced groups";
		this.dependencies = [{
			import: ["IgxAutocompleteModule", "IgxDropDownModule", "IgxInputGroupModule", "IgxToastModule"],
			from: "igniteui-angular"
		}, {
			declare: ["<%=ClassName%>PipeStartsWith"],
			from: "./src/app/<%=path%>/<%=filePrefix%>.component.ts"
		}, {
			declare: ["<%=ClassName%>RegionContains"],
			from: "./src/app/<%=path%>/<%=filePrefix%>.component.ts"
		}];
	}
}
module.exports = new IgxAutocompleteTemplate();
