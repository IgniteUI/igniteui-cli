import { workspaces } from "@angular-devkit/core";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
export declare function importDefaultTheme(tree: Tree): Promise<void>;
export declare function addFontsToIndexHtml(tree: Tree): Promise<void>;
export declare function getProjects(tree: Tree): Promise<workspaces.ProjectDefinitionCollection>;
