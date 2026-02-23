import { SchematicContext, Tree } from "@angular-devkit/schematics";
import { BasePromptSession, BaseTemplateManager, Framework, IUserInputOptions, ProjectLibrary, ProjectTemplate, PromptTaskContext, Task } from "@igniteui/cli-core";
export declare class SchematicsPromptSession extends BasePromptSession {
    tree: Tree;
    context: SchematicContext;
    projectName: string;
    userAnswers: Map<string, any>;
    constructor(templateManager: BaseTemplateManager);
    setContext(context: SchematicContext, tree: Tree, projectName: string): void;
    getUserInput(options: IUserInputOptions, withBackChoice?: boolean): Promise<string>;
    getProjectLibrary(framework: Framework): Promise<ProjectLibrary>;
    getProjectLibraryByType(framework: Framework, type: string): Promise<ProjectLibrary>;
    getProjectTemplate(projectLibrary: ProjectLibrary): Promise<ProjectTemplate>;
    getTheme(projectLibrary: ProjectLibrary): Promise<string>;
    nameIsValid(name: string, checkFolder?: boolean): boolean;
    protected completeAndRun(_port?: number): void;
    protected upgradePackages(): Promise<void>;
    protected templateSelectedTask(type?: "component" | "view"): Task<PromptTaskContext>;
}
