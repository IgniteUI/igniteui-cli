import { ControlExtraConfigType, ControlExtraConfiguration } from "@igniteui/cli-core";
import { GridHelper } from "../../../../../lib/project-utility/GridHelper";
import { AngularTemplate } from "../../../../../lib/templates/AngularTemplate";

class GridTemplate extends AngularTemplate {
  private gridHelper: GridHelper;
  private extraConfigurations: ControlExtraConfiguration[];
  private userExtraConfiguration: {} = {};

  constructor() {
    super(__dirname);
    this.id = "grid";
    this.widget = "igGrid";
    this.name = "Grid";
    this.controlGroup = "Data Grids";
    this.description = "igGrid default template";
    this.dependencies = ["igGrid"];
    this.projectType = "ig-ts";
    this.extraConfigurations = [];
    this.hasExtraConfiguration = true;
    this.listInComponentTemplates = true;

    this.gridHelper = new GridHelper();
    const featureConfiguration: ControlExtraConfiguration = {
      choices: ["Sorting", "Paging", "Filtering"],
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
    const features = this.gridHelper.generateFeatures(this.userExtraConfiguration["features"], 3);
    const config = { gridFeatures: features };
    return super.generateConfig(name, { extraConfig: config });
  }
  public getExtraConfiguration(): ControlExtraConfiguration[] {
    return this.extraConfigurations;
  }
}

module.exports = new GridTemplate();
