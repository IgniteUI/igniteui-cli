import { execFileSync } from "child_process";
import { cpSync, existsSync, rmSync } from "fs";
import { join, relative, resolve } from "path";

const root = resolve(__dirname, "..");
const branch = process.argv[2] || "master";

if (!/^[\w.\-/]+$/.test(branch) || branch.startsWith("-")) {
	// eslint-disable-next-line no-console
	console.error(`[update-skills] Invalid branch name: '${branch}'`);
	process.exit(1);
}

const mappings = [
	{
		name: "angular",
		repo: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/angular/igniteui-angular"),
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/angular/igniteui-angular/skills"),
		dest: join(root, "packages/igx-templates/igx-ts/projects/_base/files/__dot__claude/skills")
	},
	{
		name: "react",
		repo: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/react/igniteui-react"),
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/react/igniteui-react/skills"),
		dest: join(root, "packages/cli/templates/react/igr-ts/projects/_base/files/__dot__claude/skills")
	},
	{
		name: "webcomponents",
		repo: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/webcomponents/igniteui-webcomponents"),
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/webcomponents/igniteui-webcomponents/skills"),
		dest: join(root, "packages/cli/templates/webcomponents/igc-ts/projects/_base/files/__dot__claude/skills")
	}
];

for (const { name, repo, src, dest } of mappings) {
	if (!existsSync(join(repo, ".git"))) {
		// Submodule directory exists but hasn't been initialized yet — initialize it now
		// eslint-disable-next-line no-console
		console.log(`[update-skills] Initializing submodule for ${name}...`);
		const submodulePath = relative(root, repo).replace(/\\/g, "/");
		execFileSync("git", ["submodule", "update", "--init", submodulePath], { cwd: root, stdio: "inherit" });
	}
	if (!existsSync(repo)) {
		// eslint-disable-next-line no-console
		console.warn(`[update-skills] Skipping ${name}: repo not found at ${repo}`);
		continue;
	}
	// eslint-disable-next-line no-console
	console.log(`[update-skills] Updating ${name} to branch '${branch}'...`);
	execFileSync("git", ["fetch", "origin", branch], { cwd: repo, stdio: "inherit" });
	execFileSync("git", ["checkout", "-B", branch, `origin/${branch}`], { cwd: repo, stdio: "inherit" });

	if (!existsSync(src)) {
		// eslint-disable-next-line no-console
		console.warn(`[update-skills] Skipping ${name}: skills not found at ${src}`);
		continue;
	}
	if (existsSync(dest)) {
		rmSync(dest, { recursive: true, force: true });
	}
	cpSync(src, dest, { recursive: true });
	// eslint-disable-next-line no-console
	console.log(`[update-skills] Updated ${name} skills`);
}
