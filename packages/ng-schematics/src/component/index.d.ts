import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { ComponentOptions, TemplateOptions } from "./schema";
export declare function singleComponent(templateOptions: TemplateOptions, skipRoute: boolean): (_tree: Tree, _context: SchematicContext) => Promise<Rule>;
export declare function component(options: ComponentOptions): Rule;
