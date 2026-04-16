import { execSync } from "child_process";
import { cpSync, existsSync, rmSync } from "fs";
import { join, resolve } from "path";

const root = resolve(__dirname, "..");
const branch = process.argv[2] || "master";

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
	if (!existsSync(repo)) {
		// eslint-disable-next-line no-console
		console.warn(`[update-skills] Skipping ${name}: repo not found at ${repo}`);
		continue;
	}
	// eslint-disable-next-line no-console
	console.log(`[update-skills] Updating ${name} from branch '${branch}'...`);
	// eslint-disable-next-line no-console
	console.warn(
		`[update-skills] Note: updating ${name} will move the nested repository HEAD and may mark the parent repository as modified if it is checked out as a submodule.`
	);
	// Abort any in-progress merge left from a previous failed pull
	try {
		execSync("git merge --abort", { cwd: repo, stdio: "pipe" });
	} catch {
		// No merge in progress — ignore
	}
	execSync(`git fetch origin ${branch}`, { cwd: repo, stdio: "inherit" });
	execSync("git checkout --detach FETCH_HEAD", { cwd: repo, stdio: "inherit" });

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
