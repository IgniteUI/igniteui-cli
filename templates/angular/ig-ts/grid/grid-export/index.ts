import * as path from 'path';
import { GridHelper } from '../../../../../lib/project-utility/GridHelper';
import { AngularTemplate } from '../../../../../lib/templates/AngularTemplate';
import { Util } from '../../../../../lib/Util';

class GridExportTemplate extends AngularTemplate {
    private gridHelper: GridHelper;
    private extraConfigurations: ControlExtraConfiguration[];
    private userExtraConfiguration: {} = {};

    constructor() {
        super(__dirname);
        this.id = 'grid-export';
        this.name = 'Export Grid';
        this.controlGroup = 'Data Grids';
        this.widget = 'igGrid';
        this.description = 'igGrid export template for Angular';
        this.dependencies = ['igGrid', 'igExcel', 'igGridExcelExporter'];
        this.projectType = 'ig-ts';
        this.extraConfigurations = [];
        this.hasExtraConfiguration = true;
        this.listInComponentTemplates = true;

        this.gridHelper = new GridHelper();
        const featureConfiguration: ControlExtraConfiguration = {
            choices: ['Summaries', 'Hiding'],
            default: '',
            key: 'features',
            message: 'Select features for the igGrid',
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

module.exports = new GridExportTemplate();
