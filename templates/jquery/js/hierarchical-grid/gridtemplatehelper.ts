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
			case "Selection":
            featureTemplate = this.generateSelectionFeature();
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
			case "Hiding":
			featureTemplate = this.generateHidingFeature();
			break;
			case "Summaries":
            featureTemplate = this.generateSummariesFeature();
			break;
        }
        return featureTemplate;
    }
    static generateSortingFeature(): string {
        return "{ name: \"Sorting\", inherit: true }";
    }
    static generateFilteringFeature(): string {
        return "{ name: \"Filtering\", inherit: true }";
    }
    static generatePagingFeature(): string {
      
        return "{ name: \"Paging\", type: \"local\", pageSize: 5, inherit: true }";
	}
	static generateSelectionFeature(): string {
		
		return "{ name: \"Selection\" }, { name: \"RowSelectors\", multipleSelection: true, rowSelectorColumnWidth: 80, enableRowNumbering: true, inherit: true }";
	}
	static generateUpdatingFeature(): string {
        return "{ name: \"Updating\", inherit: true }";
	}
	static generateColumnMovingFeature(): string {
		return "{ name: \"ColumnMoving\", inherit: true }";
	}
	static generateResizingFeature(): string {
		return "{ name: \"Resizing\", inherit: true }";
	}
	static generateHidingFeature(): string {
		return "{ name: \"Hiding\", inherit: true }";
	}
	static generateSummariesFeature(): string {
		return "{ name: \"Summaries\", inherit: true }";
	}
}
export {GridHelper}