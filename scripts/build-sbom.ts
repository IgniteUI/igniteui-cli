import { execFileSync, spawnSync } from "child_process";
import { createHash } from "crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { createRequire } from "module";
import * as path from "path";
import { parseArgs } from "util";
import {
	assertDeliveredShape, Bom, npmPurl, PackedArtifact, promoteMainComponent, Supplier
} from "./sbom-document";
import { AuditResult, formatSupplyChainNotes, NpmTreeDiagnostics, PackageEvidence } from "./sbom-notes";

const SPEC_VERSION = "1.6";
const SUPPLIER: Supplier = {
	name: "Infragistics",
	url: ["https://www.infragistics.com"]
};

const repoRoot = path.resolve(__dirname, "..");
// Resolved by path: the package's exports map deliberately hides both the CLI and its manifest.
const cycloneDxDir = path.join(repoRoot, "node_modules", "@cyclonedx", "cyclonedx-npm");

interface WorkspacePackage {
	dir: string;
	name: string;
	version: string;
	/** Other publishable workspace packages this one depends on. */
	siblings: string[];
}

function log(message: string) {
	// eslint-disable-next-line no-console
	console.log(`[sbom] ${message}`);
}

function readJson(file: string) {
	return JSON.parse(readFileSync(file, "utf8"));
}

/**
 * Locate npm's JS entry point. Node refuses to spawn "npm.cmd" without a shell on Windows,
 * and the same path lets the CycloneDX generator reuse this exact npm via npm_execpath.
 */
function resolveNpmCli(): string {
	const nodeDir = path.dirname(process.execPath);
	const candidates = [
		process.env.npm_execpath,
		path.join(nodeDir, "node_modules", "npm", "bin", "npm-cli.js"),
		path.join(nodeDir, "..", "lib", "node_modules", "npm", "bin", "npm-cli.js")
	];
	const cli = candidates.find(candidate => candidate?.endsWith(".js") && existsSync(candidate));

	if (!cli) {
		throw new Error("Could not locate npm-cli.js next to the running Node.js installation.");
	}

	return cli;
}

const npmCli = resolveNpmCli();

/** Run a command without a shell, so no argument can be interpreted as shell syntax. */
function run(command: string, args: string[], cwd: string, stdout: "pipe" | "inherit" = "pipe"): string {
	return execFileSync(command, args, {
		cwd,
		encoding: "utf8",
		maxBuffer: 256 * 1024 * 1024,
		stdio: ["ignore", stdout, "inherit"],
		env: { ...process.env, npm_execpath: npmCli }
	}) ?? "";
}

function npm(args: string[], cwd: string, stdout: "pipe" | "inherit" = "pipe"): string {
	return run(process.execPath, [npmCli, ...args], cwd, stdout);
}

function sbomFileOf(artifact: PackedArtifact): string {
	return artifact.name.replace(/\.tgz$/, ".cdx.json");
}

function digest(file: string, algorithm: string): string {
	return createHash(algorithm).update(readFileSync(file)).digest("hex");
}

function ensureDir(dir: string): string {
	mkdirSync(dir, { recursive: true });
	return dir;
}

/** The CycloneDX CLI from node_modules, so generation never fetches a generator from the network. */
function resolveCycloneDxCli(): string {
	const cli = path.join(cycloneDxDir, "bin", "cyclonedx-npm-cli.js");

	if (!existsSync(cli)) {
		throw new Error(`@cyclonedx/cyclonedx-npm CLI not found at ${cli}. Run "yarn install" first.`);
	}

	return cli;
}

function cycloneDxToolVersion(): string {
	return readJson(path.join(cycloneDxDir, "package.json")).version;
}

/**
 * The packages lerna publishes, ordered so each one follows the workspace packages it depends on.
 * Read from lerna.json rather than listed here, so a new package cannot silently ship without an SBOM.
 */
function publishablePackages(): WorkspacePackage[] {
	const patterns: string[] = readJson(path.join(repoRoot, "lerna.json")).packages;
	const dirs = patterns.flatMap(pattern => {
		if (!pattern.endsWith("/*")) {
			return [pattern];
		}
		const parent = pattern.slice(0, -2);
		return readdirSync(path.join(repoRoot, parent), { withFileTypes: true })
			.filter(entry => entry.isDirectory())
			.map(entry => `${parent}/${entry.name}`);
	});
	const manifests = dirs
		.filter(dir => existsSync(path.join(repoRoot, dir, "package.json")))
		.map(dir => ({ dir, manifest: readJson(path.join(repoRoot, dir, "package.json")) }))
		.filter(({ manifest }) => !manifest.private);
	const names = new Set(manifests.map(({ manifest }) => manifest.name as string));
	const packages = new Map<string, WorkspacePackage>(manifests.map(({ dir, manifest }) => [manifest.name, {
		dir,
		name: manifest.name,
		version: manifest.version,
		siblings: Object.keys({ ...manifest.dependencies, ...manifest.peerDependencies }).filter(name => names.has(name))
	}]));

	const ordered: WorkspacePackage[] = [];
	const visit = (pkg: WorkspacePackage, trail: string[]) => {
		if (ordered.includes(pkg)) {
			return;
		}
		if (trail.includes(pkg.name)) {
			throw new Error(`Workspace dependency cycle: ${[...trail, pkg.name].join(" -> ")}`);
		}
		pkg.siblings.forEach(name => visit(packages.get(name), [...trail, pkg.name]));
		ordered.push(pkg);
	};
	[...packages.values()].sort((a, b) => a.name.localeCompare(b.name)).forEach(pkg => visit(pkg, []));

	return ordered;
}

/** Pack a built package so the SBOM subject is the exact artifact that gets published. */
function packArtifact(pkg: WorkspacePackage, outDir: string): PackedArtifact {
	// Leading "./" is required: without it npm treats "packages/..." as a GitHub shorthand spec.
	const output = npm(["pack", `./${pkg.dir}`, "--pack-destination", outDir, "--json"], repoRoot);
	const name = JSON.parse(output)[0].filename;
	const tarball = path.join(outDir, name);

	log(`packed ${name}`);

	return {
		name,
		path: tarball,
		sha256: digest(tarball, "sha256"),
		sha512: digest(tarball, "sha512")
	};
}

/**
 * Install the packed tarball in isolation, producing the dependency closure a consumer resolves.
 * Workspace siblings are released together and may not be on npm yet, so they resolve from the
 * tarballs packed by this same build instead of the registry.
 */
function installDeliveredClosure(pkg: WorkspacePackage, artifacts: Map<string, PackedArtifact>, workspaceDir: string): string {
	rmSync(workspaceDir, { recursive: true, force: true });
	ensureDir(workspaceDir);

	const tarballSpec = (name: string) =>
		`file:${path.relative(workspaceDir, artifacts.get(name).path).replace(/\\/g, "/")}`;
	// npm rejects an override for a direct dependency, so the package itself is left out.
	const overrides = [...artifacts.keys()]
		.filter(name => name !== pkg.name)
		.reduce((result, name) => ({ ...result, [name]: tarballSpec(name) }), {});

	writeFileSync(
		path.join(workspaceDir, "package.json"),
		`${JSON.stringify({
			name: "igniteui-cli-sbom-workspace",
			version: "0.0.0",
			private: true,
			dependencies: { [pkg.name]: tarballSpec(pkg.name) },
			overrides
		}, null, 2)}\n`
	);

	// The lockfile this writes is the evidence npm audit reads back from this same tree.
	npm(["install", "--omit=dev", "--ignore-scripts", "--no-audit", "--no-fund"], workspaceDir, "inherit");

	log(`installed the delivered dependency closure of ${pkg.name}`);
	return workspaceDir;
}

function generateCycloneDx(cwd: string, extraArgs: string[]): Bom {
	// Not --output-reproducible: that flag drops serialNumber, which actions/attest requires
	// (alongside bomFormat and specVersion) to recognize the document as CycloneDX.
	const document = run(
		process.execPath,
		[resolveCycloneDxCli(), "--spec-version", SPEC_VERSION, "--output-format", "JSON", "--output-file", "-", "--validate", ...extraArgs],
		cwd
	);

	return JSON.parse(document);
}

function writeBom(file: string, bom: Bom) {
	writeFileSync(file, `${JSON.stringify(bom, null, 2)}\n`);
	log(`wrote ${path.relative(repoRoot, file)}`);
}

/** Capture npm's dependency-tree diagnostics without failing supplementary inventory generation. */
function captureNpmTreeDiagnostics(): NpmTreeDiagnostics {
	const result = spawnSync(process.execPath, [npmCli, "ls", "--json", "--all"], {
		cwd: repoRoot,
		encoding: "utf8",
		maxBuffer: 256 * 1024 * 1024,
		env: { ...process.env, npm_execpath: npmCli }
	});
	const problems: string[] = [];

	try {
		const pending = [JSON.parse(result.stdout || "{}")];
		while (pending.length) {
			const entry = pending.pop();
			if (!entry || typeof entry !== "object") {
				continue;
			}
			if (Array.isArray(entry.problems)) {
				problems.push(...entry.problems);
			}
			pending.push(...Object.values(entry));
		}
	} catch (error) {
		problems.push(`Could not parse npm ls JSON: ${error.message}`);
	}

	return {
		status: result.status ?? 1,
		problems,
		stderr: [result.error?.message, result.stderr].filter(Boolean).join("\n")
	};
}

/** Audit a delivered closure. A nonzero exit only means findings, so it never fails the release. */
function captureDeliveredAudit(workspaceDir: string): AuditResult {
	const result = spawnSync(process.execPath, [npmCli, "audit", "--omit=dev", "--json"], {
		cwd: workspaceDir,
		encoding: "utf8",
		maxBuffer: 256 * 1024 * 1024,
		env: { ...process.env, npm_execpath: npmCli }
	});

	try {
		const report = JSON.parse(result.stdout || "{}");

		if (!report.metadata?.vulnerabilities) {
			throw new Error(report.error?.summary ?? (result.stderr.trim() || "npm audit produced no report"));
		}

		return {
			available: true,
			counts: report.metadata.vulnerabilities,
			packages: Object.values<any>(report.vulnerabilities ?? {}).map(entry => ({
				name: entry.name,
				severity: entry.severity,
				direct: entry.isDirect === true,
				fixAvailable: entry.fixAvailable !== false
			}))
		};
	} catch (error) {
		return { available: false, reason: error.message };
	}
}

/** Validate a written document against the official CycloneDX schema. */
async function assertValidCycloneDx(file: string) {
	const requireFromGenerator = createRequire(path.join(cycloneDxDir, "package.json"));
	const { Validation } = requireFromGenerator("@cyclonedx/cyclonedx-library");
	const error = await new Validation.JsonValidator(SPEC_VERSION).validate(readFileSync(file, "utf8"));

	if (error !== null) {
		throw new Error(`${path.basename(file)} is not valid CycloneDX ${SPEC_VERSION}: ${JSON.stringify(error.details ?? error)}`);
	}

	log(`validated ${path.basename(file)} against CycloneDX ${SPEC_VERSION}`);
}

function renderNote(values: Record<string, string>): string {
	const template = readFileSync(path.join(repoRoot, "scripts", "templates", "sbom-readme.md"), "utf8");

	return template.replace(/{{(\w+)}}/g, (match, key) => {
		if (!(key in values)) {
			throw new Error(`No value supplied for template placeholder ${match}.`);
		}
		return values[key];
	});
}

const { values: args } = parseArgs({
	options: {
		"out": { type: "string", default: "artifacts" },
		"release": { type: "string" },
		"build-env": { type: "boolean", default: false },
		"keep": { type: "boolean", default: false }
	}
});

const outDir = ensureDir(path.resolve(repoRoot, args.out));
const release = args.release || readJson(path.join(repoRoot, "packages", "cli", "package.json")).version;
const releaseBaseName = `igniteui-cli-release-${release}`;
const fileNames = {
	buildEnvCycloneDxFile: `${releaseBaseName}.build-env.cdx.json`,
	supplyChainNotesFile: `${releaseBaseName}.supply-chain.md`,
	readmeFile: `${releaseBaseName}.sbom.README.md`
};

/** The repository tree, dev dependencies included: an inventory of the toolchain, not the product. */
async function buildEnvironmentSbom() {
	// Tolerates npm-ls complaints about the yarn-installed dev tree; the delivered documents never do.
	const bom = generateCycloneDx(repoRoot, ["--mc-type", "application", "--ignore-npm-errors"]);
	bom.metadata.supplier = SUPPLIER;

	const file = path.join(outDir, fileNames.buildEnvCycloneDxFile);
	writeBom(file, bom);
	await assertValidCycloneDx(file);
}

async function deliveredSboms() {
	const packages = publishablePackages();
	log(`publishable packages: ${packages.map(pkg => `${pkg.name}@${pkg.version}`).join(", ")}`);

	const artifacts = new Map(packages.map(pkg => [pkg.name, packArtifact(pkg, outDir)] as [string, PackedArtifact]));
	const evidence: PackageEvidence[] = [];

	for (const pkg of packages) {
		const artifact = artifacts.get(pkg.name);
		const workspaceDir = installDeliveredClosure(
			pkg, artifacts, path.join(outDir, ".delivered", artifact.name.replace(/\.tgz$/, "")));
		const bom = promoteMainComponent(
			generateCycloneDx(workspaceDir, ["--mc-type", "library", "--omit", "dev"]),
			{ artifact, packageName: pkg.name, supplier: SUPPLIER, version: pkg.version }
		);
		const componentCount = assertDeliveredShape(bom, { packageName: pkg.name, version: pkg.version });
		log(`${pkg.name} SBOM covers ${componentCount} components`);

		const sbomFile = path.join(outDir, sbomFileOf(artifact));
		writeBom(sbomFile, bom);
		await assertValidCycloneDx(sbomFile);

		writeFileSync(`${artifact.path}.sha256`, `${artifact.sha256}  ${artifact.name}\n`);
		writeFileSync(`${artifact.path}.sha512`, `${artifact.sha512}  ${artifact.name}\n`);

		evidence.push({ name: pkg.name, version: pkg.version, audit: captureDeliveredAudit(workspaceDir) });
	}

	if (!args.keep) {
		rmSync(path.join(outDir, ".delivered"), { recursive: true, force: true });
	}

	const supplyChainNotes = formatSupplyChainNotes({ packages: evidence, npmTree: captureNpmTreeDiagnostics() });
	writeFileSync(path.join(outDir, fileNames.supplyChainNotesFile), supplyChainNotes);

	const delivered = packages.map(pkg => ({ pkg, artifact: artifacts.get(pkg.name) }));

	// Read by the release workflow to attest and publish each package in dependency order.
	writeFileSync(path.join(outDir, "packages.json"), `${JSON.stringify(delivered.map(({ pkg, artifact }) => ({
		name: pkg.name,
		version: pkg.version,
		id: artifact.name.replace(/\.tgz$/, ""),
		tarball: artifact.name,
		sbom: sbomFileOf(artifact)
	})), null, 2)}\n`);

	const repository = process.env.GITHUB_REPOSITORY ?? "IgniteUI/igniteui-cli";
	writeFileSync(path.join(outDir, fileNames.readmeFile), renderNote({
		...fileNames,
		release,
		generatedAt: new Date().toISOString().slice(0, 10),
		documentRows: delivered.map(({ pkg, artifact }) =>
			`| \`${sbomFileOf(artifact)}\` | CycloneDX ${SPEC_VERSION} JSON | Delivered - every component resolved by \`npm install ${pkg.name}\` |`
		).join("\n"),
		packageRows: delivered.map(({ pkg, artifact }) =>
			`| \`${pkg.name}\` | \`${pkg.version}\` | \`${npmPurl(pkg.name, pkg.version)}\` | \`${artifact.name}\` | \`${artifact.sha256}\` |`
		).join("\n"),
		hashCommands: delivered.flatMap(({ artifact }) =>
			[`shasum -a 256 ${artifact.name}`, `shasum -a 512 ${artifact.name}`]
		).join("\n"),
		powerShellHashCommands: delivered.flatMap(({ artifact }) =>
			[`Get-FileHash -Algorithm SHA256 ${artifact.name}`, `Get-FileHash -Algorithm SHA512 ${artifact.name}`]
		).join("\n"),
		validateCommands: [...delivered.map(({ artifact }) => sbomFileOf(artifact)), fileNames.buildEnvCycloneDxFile]
			.map(file => `cyclonedx-cli validate --input-file ${file} --input-format json --input-version v1_6 --fail-on-errors`)
			.join("\n"),
		attestationCommands: delivered.flatMap(({ artifact }) => [
			`gh attestation verify ${artifact.name} --repo ${repository}`,
			`gh attestation verify ${artifact.name} --repo ${repository} --predicate-type https://cyclonedx.org/bom`
		]).join("\n"),
		cycloneDxToolVersion: cycloneDxToolVersion(),
		nodeVersion: process.version,
		repository,
		workflow: process.env.GITHUB_WORKFLOW ?? "a local build",
		supplyChainNotes: supplyChainNotes.trim()
	}));
}

(args["build-env"] ? buildEnvironmentSbom() : deliveredSboms()).catch(error => {
	// eslint-disable-next-line no-console
	console.error("[sbom] SBOM generation failed", error);
	process.exitCode = 1;
});
