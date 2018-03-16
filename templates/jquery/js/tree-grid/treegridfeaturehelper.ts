
class TreeGridFeatureHelper {

	public static generateFeatures(gridFeatures): string {
		let result = "";
		if (gridFeatures !== undefined) {
			for (let i = 0; i < gridFeatures.length; i++) {
				result += this.generateFeature(gridFeatures[i]);
				if ((i + 1) < gridFeatures.length) {
					result += ",";
				}
			}
		}
		return result;
	}
	public static generateFeature(feature): string {
		let featureTemplate = "";
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
	public static generateHidingFeature(): any {
		return "{ name: \"Hiding\" , inherit: true }";
	}
	public static generateSortingFeature(): string {
		return "{ name: \"Sorting\", inherit: true  }";
	}
	public static generateFilteringFeature(): string {
		return "{ name: \"Filtering\" , inherit: true }";
	}
	public static generatePagingFeature(): string {
		return "{ name: \"Paging\", type: \"local\", pageSize: 5 ,mode: 'allLevels', inherit: true }";
	}
	public static generateRowSelectorsFeature(): string {
		return "{ name: \"Selection\" , inherit: true }, { name: \"RowSelectors\", multipleSelection: true," +
		" rowSelectorColumnWidth: 80, enableRowNumbering: true, rowSelectorNumberingMode: \"hierarchical\", inherit: true }";
	}
	public static generateUpdatingFeature(): string {
		let builder = "{name: \"Updating\", columnSettings: [{columnKey: \"progress\",editorType: \"currency\"," +
		"editorOptions: {buttonType: \"spin\"}},";
		builder += "{columnKey: \"start\",editorType: \"datepicker\"},{columnKey: \"finish\",editorType: \"datepicker\"}]}";
		return builder;
	}
	public static generateColumnMovingFeature(): string {
		return "{ name: \"ColumnMoving\" , inherit: true }";
	}
	public static generateResizingFeature(): string {
		return "{ name: \"Resizing\" , inherit: true }";
	}
	public static generateSummariesFeature(): string {
		return "{ name: \"Summaries\" , inherit: true }";
	}
}
export {TreeGridFeatureHelper};
