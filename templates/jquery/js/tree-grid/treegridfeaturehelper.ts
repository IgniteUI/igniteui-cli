
class TreeGridFeatureHelper {


	static generateFeatures(gridFeatures): string {
		var result = "";
		for (var i = 0; i < gridFeatures.length; i++) {
			result += this.generateFeature(gridFeatures[i]);
			if ((i + 1) < gridFeatures.length) {
				result += ",";
			}
		}
		return result;
	}
	static generateFeature(feature): string {
		var featureTemplate = "";
		switch (feature) {
			case "Sorting":
				featureTemplate = this.generateSortingFeature();
				break;
			case "Paging":
				featureTemplate = this.generatePagingFeature();
				break;
			case "Filtering":
				featureTemplate = this.generateFilteringFeature();
				break;
			case "RowSelectors":
				featureTemplate = this.generateRowSelectorsFeature();
				break;
			case "Hiding":
				featureTemplate = this.generateHidingFeature();
				break;
			case "Updating":
				featureTemplate = this.generateUpdatingFeature();
				break;
			case "ColumnMoving":
				featureTemplate = this.generateColumnMovingFeature();
				break;
			case "Resizing":
				featureTemplate = this.generateResizingFeature();
				break;
				case "Summaries":
				featureTemplate = this.generateSummariesFeature();
				break;
			}
			

		return featureTemplate;
	}
	static generateHidingFeature(): any {
		return "{ name: \"Hiding\" , inherit: true }";
	}
	static generateSortingFeature(): string {
		return "{ name: \"Sorting\", inherit: true  }";
	}
	static generateFilteringFeature(): string {
		return "{ name: \"Filtering\" , inherit: true }";
	}
	static generatePagingFeature(): string {
		return "{ name: \"Paging\", type: \"local\", pageSize: 5 ,mode: 'allLevels', inherit: true }";
	}
	static generateRowSelectorsFeature(): string {
		return "{ name: \"Selection\" , inherit: true }, { name: \"RowSelectors\", multipleSelection: true, rowSelectorColumnWidth: 80, enableRowNumbering: true, rowSelectorNumberingMode: \"hierarchical\", inherit: true }";
	}
	static generateUpdatingFeature(): string {
		var builder = "{name: \"Updating\", columnSettings: [{columnKey: \"progress\",editorType: \"currency\",editorOptions: {buttonType: \"spin\"}},"
			builder += "{columnKey: \"start\",editorType: \"datepicker\"},{columnKey: \"finish\",editorType: \"datepicker\"}]}";
		return builder;
	}
	static generateColumnMovingFeature(): string {
		return "{ name: \"ColumnMoving\" , inherit: true }";
	}
	static generateResizingFeature(): string {
		return "{ name: \"Resizing\" , inherit: true }";
	}
	static generateSummariesFeature(): string {
		return "{ name: \"Summaries\" , inherit: true }";
	}
}
export {TreeGridFeatureHelper}