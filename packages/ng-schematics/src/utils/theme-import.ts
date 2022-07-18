import { JsonArray, workspaces } from "@angular-devkit/core";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { NPM_PACKAGE, resolveIgxPackage } from "@igniteui/angular-templates";
import { createWorkspaceHost } from "@igniteui/cli-core";
import * as path from "path";

export async function importDefaultTheme(tree: Tree): Promise<void> {
	const projects = await getProjects(tree);
	for (const project of projects.values()) {
		const sourceRoot = project?.sourceRoot;
		if (!sourceRoot) { continue; }
		const pathWithoutExt = path.join(sourceRoot, "styles");
		if (tree.exists(`${pathWithoutExt}.sass`)) {
			importDefaultThemeSass(tree, `${pathWithoutExt}.sass`);
			continue;
		} else if (tree.exists(`${pathWithoutExt}.scss`)) {
			importDefaultThemeSass(tree, `${pathWithoutExt}.scss`);
			continue;
		}

		await importIgDefaultTheme(tree);
		continue;
	}
}

export async function addFontsToIndexHtml(tree: Tree) {
	const titillium = '<link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">';
	const materialIcons = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
	const projects = await getProjects(tree);
	projects.forEach(project => {
		const targetFile = project.targets.get("build")?.options?.index as string;

		if (targetFile && tree.exists(targetFile)) {
			let content = tree.read(targetFile)!.toString();
			if (!content.includes(titillium)) {
				content = content.replace("</head>", `  ${titillium}\n</head>`);
			}
			if (!content.includes(materialIcons)) {
				content = content.replace("</head>", `  ${materialIcons}\n</head>`);
			}

			tree.overwrite(targetFile, content);
		}
	});
}

function importDefaultThemeSass(tree: Tree, filePath: string) {
	const igxPackage = resolveIgxPackage(NPM_PACKAGE);
	const sassImports =
		`
@use "~${igxPackage}/theming" as *;
// Uncomment the following lines if you want to add a custom palette:
// $primary: #731963 !default;
// $secondary: #ce5712 !default;
// $app-palette: palette($primary, $secondary);

/* autoprefixer grid: on */

@include core();
@include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
@include theme($default-palette);
`;

	let content = tree.read(filePath)!.toString();

	if (!content.includes(sassImports)) {
		content = sassImports + content;
	}

	tree.overwrite(filePath, content);
}

async function importIgDefaultTheme(tree: Tree): Promise<void> {
	const host = createWorkspaceHost(tree);
	const { workspace } = await workspaces.readWorkspace("/", host);

	importDefaultThemeToAngularWorkspace(workspace, "build");
	importDefaultThemeToAngularWorkspace(workspace, "test");

	// workspace tracks changes internally:
	await workspaces.writeWorkspace(workspace, host);
}

export async function getProjects(tree: Tree): Promise<workspaces.ProjectDefinitionCollection> {
	const { workspace } = await workspaces.readWorkspace("/", createWorkspaceHost(tree));
	return workspace.projects;
}

function importDefaultThemeToAngularWorkspace(workspace: workspaces.WorkspaceDefinition, key: string) {
	const igxPackage = resolveIgxPackage(NPM_PACKAGE);
	const cssImport = `node_modules/${igxPackage}/styles/igniteui-angular.css`;
	const project = workspace.extensions.defaultProject ?
		workspace.projects.get(workspace.extensions.defaultProject as string) :
		workspace.projects.values().next().value as workspaces.ProjectDefinition;

	const target = project?.targets.get(key);
	if (!target) {
		// TODO: Log target not found
		return;
	}

	target.options = target.options || {};
	target.options.styles = target.options.styles || [];
	const styles = target.options.styles as JsonArray;
	if (!styles.includes(cssImport)) {
		styles.push(cssImport);
	}
}
