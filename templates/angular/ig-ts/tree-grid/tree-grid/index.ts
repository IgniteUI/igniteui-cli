import * as path from 'path';
import { GridHelper } from '../../../../../lib/project-utility/GridHelper';
import { AngularTemplate } from '../../../../../lib/templates/AngularTemplate';
import { Util } from '../../../../../lib/Util';

class TreeGridTemplate extends AngularTemplate {
    private gridHelper: GridHelper;
    private extraConfigurations: ControlExtraConfiguration[];
    private userExtraConfiguration: {} = {};

    constructor() {
        super(__dirname);
        this.id = 'tree-grid';
        this.name = 'Tree Grid';
        this.widget = 'igTreeGrid';
        this.controlGroup = 'Data Grids';
        this.description = 'igTreeGrid default template for Angular';
        this.dependencies = ['igTreeGrid'];
        this.projectType = 'ig-ts';
        this.listInComponentTemplates = true;
        this.hasExtraConfiguration = true;
        this.extraConfigurations = [];

        this.gridHelper = new GridHelper();
        this.gridHelper.tree = true;
        const featureConfiguration: ControlExtraConfiguration = {
            choices: ['Sorting', 'Selection', 'Filtering'],
            default: '',
            key: 'features',
            message: 'Select features for the igTreeGrid',
            type: Enumerations.ControlExtraConfigType.MultiChoice
        };
        this.extraConfigurations.push(featureConfiguration);
    }

    public setExtraConfiguration(extraConfigKeys: {}) {
        this.userExtraConfiguration = extraConfigKeys;
    }

    public generateFiles(projectPath: string, name: string, ...options: any[]): Promise<boolean> {
        const features = this.gridHelper.generateFeatures(this.userExtraConfiguration['features'], 3);
        const config = { '$(treeGridFeatures)': features };
        return super.generateFiles(projectPath, name, { extraConfig : config });
    }
    public getExtraConfiguration(): ControlExtraConfiguration[] {
        return this.extraConfigurations;
    }
}

module.exports = new TreeGridTemplate();
