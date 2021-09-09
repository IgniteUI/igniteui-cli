import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class GridEditingTemplate extends AngularTemplate {
  private gridHelper: GridHelper;
  private extraConfigurations: ControlExtraConfiguration[];
  private userExtraConfiguration: {} = {};

  constructor() {
    super(__dirname);
    this.id = "grid-editing";
    this.name = "Grid Editing";
    this.widget = "igGrid";
    this.controlGroup = "Data Grids";
    this.description = "igGrid editing template for Angular";
    this.dependencies = ["igGrid"];
    this.projectType = "ig-ts";
    this.extraConfigurations = [];
    this.hasExtraConfiguration = true;
    this.listInComponentTemplates = true;

    this.gridHelper = new GridHelper();
    const featureConfiguration: ControlExtraConfiguration = {
      choices: ["Sorting", "Filtering"],
      default: "",
      key: "features",
      message: "Select features for the igGrid",
      type: ControlExtraConfigType.MultiChoice
    };
    this.extraConfigurations.push(featureConfiguration);
  }

  public setExtraConfiguration(extraConfigKeys: {}) {
    this.userExtraConfiguration = extraConfigKeys;
  }

  public generateConfig(name: string, ...options: any[]): { [key: string]: any } {
    this.gridHelper.addFeature("Updating");
    const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
    const config = { gridFeatures: features };
    return super.generateConfig(name, { extraConfig: config });
  }
  public getExtraConfiguration(): ControlExtraConfiguration[] {
    return this.extraConfigurations;
  }
}

module.exports = new GridEditingTemplate();
