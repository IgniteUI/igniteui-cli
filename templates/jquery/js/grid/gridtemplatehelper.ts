class GridHelper {
    private static gridFeaturePlaceHolder: string = "$(Gridfeatures)";
    private static themePlaceHolder: string = "$(themeNamePlaceHolder)";
    static generateFeatures(gridFeatures) : string
    {
        var result = "";
        for(var i = 0; i < gridFeatures.length; i++ ) {
            result += this.generateFeature(gridFeatures[i]);
            if ((i + 1) < gridFeatures.length) {
                result += ",";
            }
        }
        return result;
    }
    static generateTemplate(currentTemplate, features) {
        var featureString = this.generateFeatures(features)
        currentTemplate =  currentTemplate.replace(this.gridFeaturePlaceHolder, featureString);
        return currentTemplate;
    }
    static generateFeature(feature): string {
        var featureTemplate = "";
        switch(feature) {
            case "Sorting":
            featureTemplate = this.generateSortingFeature();
            break;
            case "Paging":
            featureTemplate = this.generatePagingFeature();
            break;
            case "Filtering":
            featureTemplate = this.generateFilteringFeature();
			break;
			case "Updating":
            featureTemplate = this.generateUpdatingFeature();
			break;
			case "Selection":
            featureTemplate = this.generateSelectionFeature();
			break;
			case "ColumnMoving":
            featureTemplate = this.generateColumnMovingFeature();
			break;
			case "GroupBy":
            featureTemplate = this.generateGroupByFeature();
			break;
			case "Summaries":
            featureTemplate = this.generateSummariesFeature();
			break;
			case "Resizing":
            featureTemplate = this.generateResizingFeature();
			break;
			case "Hiding":
			featureTemplate = this.generateHidingFeature();
			break;
        }
        return featureTemplate;
    }
    static generateSortingFeature(): string {
        return "{ name: \"Sorting\" }";
    }
    static generateFilteringFeature(): string {
        return "{ name: \"Filtering\" }";
    }
    static generatePagingFeature(): string {
      
        return "{ name: \"Paging\", type: \"local\", pageSize: 5 }";
	}
	static generateUpdatingFeature(): string {
        return "{ name: \"Updating\" }";
	}
	static generateSelectionFeature(): string {
		return "{ name: \"Selection\" }, { name: \"RowSelectors\", multipleSelection: true, rowSelectorColumnWidth: 80, enableRowNumbering: true }";
	}
	static generateColumnMovingFeature(): string {
		return "{ name: \"ColumnMoving\" }";
	}
	static generateGroupByFeature(): string {
		return "{ name: \"GroupBy\" }";
	}
	static generateSummariesFeature(): string {
		return "{ name: \"Summaries\" }";
	}
	static generateResizingFeature(): string {
		return "{ name: \"Resizing\" }";
	}
	static generateHidingFeature(): string {
		return "{ name: \"Hiding\" }";
	}
}
export {GridHelper}