import { IgniteUIForAngularTemplate } from "@igniteui/angular-templates";
export declare abstract class TemplateOptions {
    templateInst: IgniteUIForAngularTemplate;
    name: string;
    projectName?: string;
}
export declare abstract class ComponentOptions {
    templateInst?: IgniteUIForAngularTemplate;
    template?: string;
    name: string;
    skipRoute?: boolean;
    module?: string;
    skipInstall?: boolean;
    projectName: string;
}
