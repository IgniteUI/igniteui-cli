import * as path from 'path';
import * as fs from 'fs-extra'
import { Util } from "../../../../../lib/Util";

class EmptyAngularProject implements ProjectTemplate {
	id: string = "angular";
    name = "empty";
    description = "The is the default empty project structure for angular";
    dependencies: string[] = [];
	framework: string = "angular";
	projectType: string = "angular";
	hasExtraConfiguration: boolean = false;

	installModules(): void {
		throw new Error("Method not implemented.");
	}
	upgradeIgniteUIPackage(projectPath:string, packagePath: string): void {
		throw new Error("Method not implemented.");
	}
    getExtraConfiguration(): ControlExtraConfiguration[] {
        throw new Error("Method not implemented.");
    }
    setExtraConfiguration(extraConfigKeys: any[]) {
        throw new Error("Method not implemented.");
    }
	generateFiles(outputPath: string, name: string, theme: string, ...options: any[]): Promise<boolean> {

		var config = {"__path__": name};
		var pathsConfig = {};
		return Util.processTemplates(path.join(__dirname, "./files"),path.join(outputPath, name),  config, pathsConfig);
	}
}
module.exports = new EmptyAngularProject();