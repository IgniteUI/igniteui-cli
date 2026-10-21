// Regenerates the Angular-owned files of the igx-ts project templates from a fresh `ng new`,
// followed by `ng add angular-eslint` and `ng add igniteui-angular`.
//
//   node scripts/generate-angular-base.mjs [--angular <range>] [--igniteui <range>] [--check]
//
//   --angular   @angular/cli range for `ng new`; defaults to the `@angular/cli` pin in `_base/files/package.json`
//   --igniteui  igniteui-angular range for `ng add`; defaults to the `igniteui-angular` pin in `_base/files/package.json`
//   --check     writes nothing; lists what a run would change and exits with 1 if anything would
//
// COPIED files are taken as they are; angular.json and package.json are patched with our deviations,
// and side-nav-auth's package.json is the `_base` one plus the packages only that project uses.
// The other generated files have hand-maintained counterparts. Their upstream content is fingerprinted
// in UPSTREAM_HASHES, so a run lists the ones `ng new` or `ng add` changed since the last run.

import { execSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const PROJECTS = path.join(ROOT, "packages/igx-templates/igx-ts/projects");
const BASE = path.join(PROJECTS, "_base/files");
const SIDE_NAV_AUTH = path.join(PROJECTS, "side-nav-auth/files");
const UPSTREAM_HASHES = path.join(ROOT, "scripts/generate-angular-base.upstream.json");
const NAME = "igx-base-placeholder";
const DASH_NAME = "<%=dashName%>";
const USAGE = "node scripts/generate-angular-base.mjs [--angular <range>] [--igniteui <range>] [--check]";

const COPIED = [
	".editorconfig",
	".gitignore",
	".prettierrc",
	".vscode/extensions.json",
	".vscode/launch.json",
	".vscode/tasks.json",
	"public/favicon.ico",
	"src/main.ts",
	"tsconfig.json",
	"tsconfig.app.json",
	"tsconfig.spec.json"
];
const PATCHED = ["angular.json", "package.json"];
const IGNORED = [
	"node_modules", ".angular", "package-lock.json",
	// AI config from @igniteui/angular-schematics; `ig ai-config` owns it in our projects
	".agents", ".claude", ".mcp.json", "AGENTS.md"
];

// Packages we add on top of `ng new` and `ng add`, at their version in the current `_base` package.json
const EXTRAS = {
	dependencies: ["@angular/animations"], // provideAnimations in the app configs
	devDependencies: ["igniteui-cli", "playwright"] // playwright: the browser for @vitest/browser-playwright
};
const DEPENDENCY_KEYS = ["dependencies", "devDependencies"];

function patchAngularJson(json) {
	const architect = json.projects[DASH_NAME].architect;
	const build = architect.build;
	// `public/` from `ng new` is served at the root; overlays keep their files in src/assets
	build.options.assets.push("src/assets");
	build.configurations.production.budgets = [
		{ type: "initial", maximumWarning: "5mb", maximumError: "40mb" },
		{ type: "anyComponentStyle", maximumWarning: "8kB", maximumError: "2mb" }
	];
	build.configurations.development.fileReplacements = [{
		replace: "src/environments/environment.ts",
		with: "src/environments/environment.development.ts"
	}];
	architect.test.options = { ...architect.test.options, runnerConfig: true };
	architect["extract-i18n"] = {
		builder: "@angular/build:extract-i18n",
		options: { buildTarget: `${DASH_NAME}:build` }
	};

	// the default theme is appended to the styles array by the template engine
	const styles = `"src/styles.scss"`;
	const text = toJson(json);
	if (text.split(styles).length !== 2) {
		throw new Error(`Expected exactly one ${styles} entry in angular.json`);
	}
	return text.replace(styles, `${styles}<%=DefaultTheme%>`);
}

function patchPackageJson(pkg, { current, igniteuiVersion, installedVersion, semver }) {
	const { dependencies: deps, devDependencies: devDeps } = pkg;
	delete pkg.packageManager; // records the npm version of the machine that ran `ng new`
	Object.assign(pkg.scripts, { start: "ng serve -o", test: "ng test --browsers=chromium", lint: "ng lint" });
	delete devDeps.jsdom; // tests run in a real browser through @vitest/browser-playwright
	// `ig new` projects use igniteui-cli instead; the schematics flow swaps it back (app-projects)
	delete devDeps["@igniteui/angular-schematics"];

	// a package already in `_base` keeps its pin while that admits the version installed in the generated
	// project, so a run moves only the pins the new project needs moved and never loosens the others
	for (const key of DEPENDENCY_KEYS) {
		for (const name of Object.keys(pkg[key])) {
			const pin = current[key][name];
			if (pin && semver.satisfies(installedVersion(name), pin)) {
				pkg[key][name] = pin;
			}
		}
	}
	deps["igniteui-angular"] = igniteuiVersion;

	for (const [key, names] of Object.entries(EXTRAS)) {
		for (const name of names) {
			if (!current[key][name]) {
				throw new Error(`${name} is missing from the current _base package.json`);
			}
			pkg[key][name] = current[key][name];
		}
	}

	// all @angular/* packages share the @angular/core version, on a ~ range
	const angularVersion = deps["@angular/core"].replace(/^\^/, "~");
	for (const key of DEPENDENCY_KEYS) {
		for (const name of Object.keys(pkg[key]).filter(n => n.startsWith("@angular/"))) {
			pkg[key][name] = angularVersion;
		}
	}
	// `ng add angular-eslint` writes its exact version; it follows Angular minors
	const eslint = semver.minVersion(devDeps["angular-eslint"]);
	devDeps["angular-eslint"] = `~${eslint.major}.${eslint.minor}.0`;
	// the browser provider must match vitest exactly
	devDeps["@vitest/browser-playwright"] = devDeps.vitest;
	return sortDependencies(pkg);
}

// side-nav-auth carries its own copy of the manifest: the generated `_base` one plus the packages only it uses
function sideNavAuthPackageJson(base, currentBase, currentOwn) {
	const pkg = structuredClone(base);
	for (const key of DEPENDENCY_KEYS) {
		for (const [name, range] of Object.entries(currentOwn[key])) {
			if (!(name in currentBase[key])) {
				pkg[key][name] = name.startsWith("@angular/") ? base.dependencies["@angular/core"] : range;
			}
		}
	}
	return sortDependencies(pkg);
}

function sortDependencies(pkg) {
	for (const key of DEPENDENCY_KEYS) {
		pkg[key] = Object.fromEntries(Object.entries(pkg[key]).sort(([a], [b]) => a.localeCompare(b)));
	}
	return pkg;
}

function toJson(value) {
	return JSON.stringify(value, null, 2) + "\n";
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, "utf8"));
}

// dotfiles are stored as `__dot__name`, except those already kept under their own name
function templatePath(root, file) {
	const literal = path.join(root, file);
	return fs.existsSync(literal)
		? literal
		: path.join(root, ...file.split("/").map(part => part.replace(/^\./, "__dot__")));
}

// writes the outputs that differ from the template files (none with `check`) and returns their paths;
// text keeps the line endings of the file it replaces, so only real changes show in the diff
function writeOutputs(outputs, check) {
	const changed = [];
	for (const [target, content] of outputs) {
		const existing = fs.existsSync(target) ? fs.readFileSync(target) : null;
		const crlf = typeof content === "string" && existing?.includes("\r\n");
		const data = Buffer.from(crlf ? content.replace(/\n/g, "\r\n") : content);
		if (existing?.equals(data)) {
			continue;
		}
		changed.push(path.relative(ROOT, target));
		if (!check) {
			fs.mkdirSync(path.dirname(target), { recursive: true });
			fs.writeFileSync(target, data);
		}
	}
	return changed;
}

function listFiles(dir, prefix = "") {
	return fs.readdirSync(dir, { withFileTypes: true })
		.filter(entry => !IGNORED.includes(entry.name))
		.flatMap(entry => entry.isDirectory()
			? listFiles(path.join(dir, entry.name), `${prefix}${entry.name}/`)
			: [`${prefix}${entry.name}`]);
}

// lists the upstream changes, with a kept copy of each new upstream version to compare against ours
function reportUpstreamChanges(files, hashes, read) {
	const kept = fs.mkdtempSync(path.join(os.tmpdir(), "igx-base-upstream-"));
	console.log("\nChanged upstream since the last run; review our hand-maintained counterparts:");
	for (const file of files) {
		if (!(file in hashes)) {
			console.log(`  ${file}: no longer generated`);
			continue;
		}
		const copy = path.join(kept, file);
		fs.mkdirSync(path.dirname(copy), { recursive: true });
		fs.writeFileSync(copy, read(file));
		const ours = templatePath(BASE, file);
		console.log(`  ${file}: upstream ${copy}, ours ${fs.existsSync(ours) ? path.relative(ROOT, ours) : "(none in _base)"}`);
	}
}

function parseArgs(argv) {
	const args = { check: false };
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		const value = argv[i + 1];
		if (arg === "--check") {
			args.check = true;
		} else if ((arg === "--angular" || arg === "--igniteui") && value && !value.startsWith("-")) {
			args[arg.slice(2)] = value;
			i++;
		} else {
			throw new Error(`Unknown argument or missing value: ${arg}\n${USAGE}`);
		}
	}
	return args;
}

const args = parseArgs(process.argv.slice(2));
const currentPackage = readJson(templatePath(BASE, "package.json"));
const angularVersion = args.angular || currentPackage.devDependencies["@angular/cli"];
const igniteuiVersion = args.igniteui || currentPackage.dependencies["igniteui-angular"];
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "igx-base-"));

try {
	const generated = path.join(tmp, NAME);
	const read = file => fs.readFileSync(path.join(generated, file), "utf8").replace(/\r\n/g, "\n").split(NAME).join(DASH_NAME);
	const ng = (command, cwd) => execSync(`npx -y "@angular/cli@${angularVersion}" ${command} --defaults --interactive=false`,
		{ cwd, stdio: "inherit" });

	console.log(`Running ng new with @angular/cli@${angularVersion} in ${tmp}`);
	// zone.js stays until the templates are verified zoneless
	ng(`new ${NAME} --style=scss --routing --ssr=false --zoneless=false --ai-config=none --skip-install --skip-git`, tmp);
	const ngNewPackage = JSON.parse(read("package.json"));
	// angular-eslint majors follow Angular's; its ng-add writes the newest release of that major
	const angularMajor = ngNewPackage.dependencies["@angular/core"].match(/\d+/)[0];
	for (const pkg of [`angular-eslint@${angularMajor}`, `igniteui-angular@${igniteuiVersion}`]) {
		console.log(`Running ng add ${pkg}`);
		ng(`add "${pkg}" --skip-confirmation`, generated);
	}

	const basePackage = patchPackageJson(JSON.parse(read("package.json")), {
		current: currentPackage,
		igniteuiVersion,
		installedVersion: name => readJson(path.join(generated, "node_modules", name, "package.json")).version,
		semver: createRequire(path.join(generated, "package.json"))("semver") // comes with the Angular CLI
	});
	const sideNavAuthPackage = sideNavAuthPackageJson(basePackage, currentPackage,
		readJson(templatePath(SIDE_NAV_AUTH, "package.json")));
	const changed = writeOutputs(new Map([
		...COPIED.map(file => [
			templatePath(BASE, file),
			file.endsWith(".ico") ? fs.readFileSync(path.join(generated, file)) : read(file)
		]),
		[templatePath(BASE, "angular.json"), patchAngularJson(JSON.parse(read("angular.json")))],
		[templatePath(BASE, "package.json"), toJson(basePackage)],
		[templatePath(SIDE_NAV_AUTH, "package.json"), toJson(sideNavAuthPackage)]
	]), args.check);

	// the other generated files are kept by hand: fingerprint them to spot upstream changes
	const hashes = Object.fromEntries(listFiles(generated)
		.filter(file => !COPIED.includes(file) && !PATCHED.includes(file))
		.sort()
		.map(file => [file, crypto.createHash("sha256").update(read(file)).digest("hex")]));
	const previous = fs.existsSync(UPSTREAM_HASHES) ? readJson(UPSTREAM_HASHES) : null;
	const upstreamChanged = previous
		? [...new Set([...Object.keys(previous), ...Object.keys(hashes)])].filter(file => previous[file] !== hashes[file])
		: [];

	console.log(changed.length
		? `\n${args.check ? "Would change" : "Updated"}:\n${changed.map(file => `  ${file}`).join("\n")}`
		: "\nGenerated files are up to date.");
	if (!previous) {
		console.log(`\nNo ${path.relative(ROOT, UPSTREAM_HASHES)} yet; this run records the upstream baseline.`);
	} else if (upstreamChanged.length) {
		reportUpstreamChanges(upstreamChanged, hashes, read);
	}

	if (args.check) {
		process.exitCode = !previous || changed.length || upstreamChanged.length ? 1 : 0;
	} else {
		fs.writeFileSync(UPSTREAM_HASHES, toJson(hashes));
	}
} finally {
	fs.rmSync(tmp, { recursive: true, force: true });
}
