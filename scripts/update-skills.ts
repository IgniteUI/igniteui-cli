import { cpSync, existsSync, rmSync } from "fs";
import { join, resolve } from "path";

const root = resolve(__dirname, "..");

const mappings = [
	{
		name: "angular",
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/angular/igniteui-angular/skills"),
		dest: join(root, "packages/igx-templates/igx-ts/projects/_base/files/__dot__claude/skills")
	},
	{
		name: "react",
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/react/igniteui-react/skills"),
		dest: join(root, "packages/cli/templates/react/igr-ts/projects/_base/files/__dot__claude/skills")
	},
	{
		name: "webcomponents",
		src: join(root, "packages/igniteui-mcp/igniteui-doc-mcp/webcomponents/igniteui-webcomponents/skills"),
		dest: join(root, "packages/cli/templates/webcomponents/igc-ts/projects/_base/files/__dot__claude/skills")
	}
];

for (const { name, src, dest } of mappings) {
	if (!existsSync(src)) {
		console.warn(`[update-skills] Skipping ${name}: source not found at ${src}`);
		continue;
	}
	if (existsSync(dest)) {
		rmSync(dest, { recursive: true, force: true });
	}
	cpSync(src, dest, { recursive: true });
	console.log(`[update-skills] Updated ${name} skills`);
}
