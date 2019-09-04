import * as path from 'path';
import { GridHelper } from '../../../../../lib/project-utility/GridHelper';
import { AngularTemplate } from '../../../../../lib/templates/AngularTemplate';
import { Util } from '../../../../../lib/Util';

class HierarchicalGridCustomTemplate extends AngularTemplate {
    private gridHelper: GridHelper;
    private extraConfigurations: ControlExtraConfiguration[];
    private userExtraConfiguration: {} = {};

    constructor() {
        super(__dirname);
        this.id = 'hierarchical-grid-custom';
        this.name = 'Custom Hierarchical Grid';
        this.widget = 'igHierarchicalGrid';
        this.controlGroup = 'Data Grids';
        this.description = 'igHierarchicalGrid default template for Angular';
        this.dependencies = ['igHierarchicalGrid'];
        this.projectType = 'ig-ts';
        this.extraConfigurations = [];
        this.hasExtraConfiguration = true;
        this.listInComponentTemplates = true;

        this.gridHelper = new GridHelper();
        this.gridHelper.hierarchical = true;
        const featureConfiguration: ControlExtraConfiguration = {
            choices: [
                'Sorting', 'Selection', 'Updating', 'Filtering', 'ColumnMoving',
                'Resizing', 'Hiding', 'Paging', 'Summaries'
            ],
            default: '',
            key: 'features',
            message: 'Select features for the igHierarchicalGrid',
            type: Enumerations.ControlExtraConfigType.MultiChoice
        };
        this.extraConfigurations.push(featureConfiguration);
    }

    public setExtraConfiguration(extraConfigKeys: {}) {
        this.userExtraConfiguration = extraConfigKeys;
    }

    public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
        const features = this.gridHelper.generateFeatures(this.userExtraConfiguration['features'], 3);
        const config = { '$(gridFeatures)': features };
        return super.generateFiles(projectPath, name, { extraConfig : config });
    }
    public getExtraConfiguration(): ControlExtraConfiguration[] {
        return this.extraConfigurations;
    }
}

module.exports = new HierarchicalGridCustomTemplate();
