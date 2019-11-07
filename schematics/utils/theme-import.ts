import { SchematicsException } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { getWorkspace } from "@schematics/angular/utility/config";
import { WorkspaceProject, WorkspaceSchema, ProjectType } from "@schematics/angular/utility/workspace-models";
import * as path from "path";

const cssImport = "node_modules/igniteui-angular/styles/igniteui-angular.css";
const sassImports =
	`
@import "~igniteui-angular/lib/core/styles/themes/index";
// Uncomment the following lines if you want to add a custom palette:
// $primary: #731963 !default;
// $secondary: #ce5712 !default;
// $app-palette: igx-palette($primary, $secondary);

/* autoprefixer grid: on */

@include igx-core();
@include igx-theme($default-palette);
`;

export function importDefaultTheme(tree: Tree): Tree {
	const sourceRoot = getDefaultProject(tree).sourceRoot;
	if (tree.exists(path.join(sourceRoot, "styles.sass"))) {
		importDefaultThemeSass(tree, "sass");
		return tree;
	} else if (tree.exists(path.join(sourceRoot, "styles.scss"))) {
		importDefaultThemeSass(tree, "scss");
		return tree;
	}

	importIgDefaultTheme(tree);
	return tree;
}

export function addFontsToIndexHtml(tree: Tree) {
	const titillium = '<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">';
	const materialIcons = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
	const targetFile = getDefaultProjectBuildOptions(tree)["index"];
	if (tree.exists(targetFile)) {
		let content = tree.read(targetFile).toString();
		if (!content.includes(titillium)) {
			content = content.replace("</head>", `  ${titillium}\n</head>`);
		}
		if (!content.includes(materialIcons)) {
			content = content.replace("</head>", `  ${materialIcons}\n</head>`);
		}

		tree.overwrite(targetFile, content);
	}

	return tree;
}

function importDefaultThemeSass(tree: Tree, ext: string): Tree {
	const sourceRoot = getDefaultProject(tree).sourceRoot;
	const targetFile = `/${sourceRoot}/styles.${ext}`;
	let content = tree.read(targetFile).toString();

	if (!content.includes(sassImports)) {
		content += sassImports;
	}

	tree.overwrite(targetFile, content);
	return tree;
}

function importIgDefaultTheme(tree: Tree): Tree {
	const targetFile = "/angular.json";
	const workspace = getWorkspace(tree);
	const importedStylesToBuild = importDefaultThemeToAngularWorkspace(workspace, "build");
	const importedStylesToTest = importDefaultThemeToAngularWorkspace(workspace, "test");

	if (importedStylesToBuild || importedStylesToTest) {
		tree.overwrite(targetFile, JSON.stringify(workspace, null, 2) + "\n");
	}

	return tree;
}

function getTargetedProjectOptions(project: WorkspaceProject<ProjectType>, target: string) {
	if (project.targets &&
		project.targets[target] &&
		project.targets[target].options) {
		return project.targets[target].options;
	}

	if (project.architect &&
		project.architect[target] &&
		project.architect[target].options) {
		return project.architect[target].options;
	}

	throw new SchematicsException(`Cannot determine the project's configuration for: ${target}`);
}

export function getDefaultProject(tree: Tree): WorkspaceProject<ProjectType> {
	const workspace = getWorkspace(tree);
	return workspace.projects[workspace.defaultProject];
}

export function getDefaultProjectBuildOptions(tree: Tree) {
	return getTargetedProjectOptions(getDefaultProject(tree), "build");
}

function importDefaultThemeToAngularWorkspace(workspace: WorkspaceSchema, key: string) {
	const projectName = workspace.defaultProject;
	if (projectName) {
		if (!workspace.projects[projectName].architect) {
			workspace.projects[projectName].architect = {};
		}
		if (!workspace.projects[projectName].architect[key]) {
			workspace.projects[projectName].architect[key] = {};
		}
		if (!workspace.projects[projectName].architect[key].options) {
			workspace.projects[projectName].architect[key].options = {};
		}
		if (!workspace.projects[projectName].architect[key].options.styles) {
			workspace.projects[projectName].architect[key].options.styles = [];
		}
		if (!workspace.projects[projectName].architect[key].options.styles.includes(cssImport)) {
			workspace.projects[projectName].architect[key].options.styles.push(cssImport);
			return true;
		}

		return false;
	}
}
