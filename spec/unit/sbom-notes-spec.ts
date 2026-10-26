import { AuditResult, formatSupplyChainNotes, mergeSupplyChainNotes, PackageEvidence } from "../../scripts/sbom-notes";

const CLEAN_TREE = { status: 0, problems: [] as string[], stderr: "" };
const NO_VULNERABILITIES: AuditResult = {
	available: true,
	counts: { critical: 0, high: 0, moderate: 0, low: 0, info: 0, total: 0 },
	packages: []
};
const NOISY_TREE = {
	status: 1,
	problems: ["invalid: chokidar@5.0.0 /home/runner/work/igniteui-cli/node_modules/chokidar"],
	stderr: [
		"npm error code ELSPROBLEMS",
		"npm error invalid: chokidar@5.0.0 /home/runner/work/igniteui-cli/node_modules/chokidar",
		"npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-08-27T16_04_30-debug-0.log"
	].join("\n")
};

function evidence(overrides: Partial<PackageEvidence> = {}): PackageEvidence {
	return { name: "igniteui-cli", version: "1.2.3", componentCount: 4, audit: NO_VULNERABILITIES, unlicensed: [], ...overrides };
}

describe("Unit - SBOM supply-chain notes", () => {
	it("reports a clean delivered closure for every package", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence(), evidence({ name: "@igniteui/cli-core" })],
			npmTree: CLEAN_TREE
		});

		expect(notes).toMatch(/### `igniteui-cli` 1\.2\.3/);
		expect(notes).toMatch(/### `@igniteui\/cli-core` 1\.2\.3/);
		expect(notes.match(/no known vulnerabilities/gi)?.length).toBe(2);
		expect(notes).toMatch(/All 5 components carry a license/);
		expect(notes).not.toMatch(/critical/i);
	});

	it("lists the components left without a license", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence({ unlicensed: ["@igniteui/mcp-server@1.2.3"] })],
			npmTree: CLEAN_TREE
		});

		expect(notes).toMatch(/1 of 5 components have no license/);
		expect(notes).toMatch(/`@igniteui\/mcp-server@1\.2\.3`/);
	});

	it("summarizes vulnerabilities by severity and names the affected packages", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence({
				audit: {
					available: true,
					counts: { critical: 1, high: 0, moderate: 2, low: 0, info: 0, total: 3 },
					packages: [
						{ name: "tar-fs", severity: "critical", direct: false, fixAvailable: true },
						{ name: "postcss", severity: "moderate", direct: true, fixAvailable: false }
					]
				}
			})],
			npmTree: CLEAN_TREE
		});

		expect(notes).toMatch(/critical \| 1/i);
		expect(notes).toMatch(/moderate \| 2/i);
		expect(notes).toMatch(/tar-fs/);
		expect(notes).toMatch(/postcss/);
	});

	it("states when the vulnerability scan could not run", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence({
				audit: {
					available: false,
					reason: "registry https://npm.internal.example.test unreachable at C:\\Users\\runner\\audit.json ```details"
				}
			})],
			npmTree: CLEAN_TREE
		});

		expect(notes).toMatch(/could not be completed/i);
		expect(notes).toMatch(/registry .* unreachable/);
		expect(notes).not.toMatch(/npm\.internal|Users|audit\.json|```details/);
	});

	it("escapes Markdown table delimiters in vulnerability details", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence({
				audit: {
					available: true,
					counts: { critical: 0, high: 1, moderate: 0, low: 0, info: 0, total: 1 },
					packages: [{ name: "package|name", severity: "high|unexpected", direct: false, fixAvailable: true }]
				}
			})],
			npmTree: CLEAN_TREE
		});

		expect(notes).toMatch(/package\\\|name/);
		expect(notes).toMatch(/high\\\|unexpected/);
	});

	it("collapses best-effort build diagnostics and removes paths, prefixes and duplicates", () => {
		const notes = formatSupplyChainNotes({ packages: [evidence()], npmTree: NOISY_TREE });

		expect(notes).toMatch(/<details>/);
		expect(notes).toMatch(/best-effort/i);
		expect(notes).toMatch(/`npm ls` exited with status 1/);
		expect(notes).toMatch(/invalid: chokidar@5\.0\.0/);
		expect(notes).toMatch(/code ELSPROBLEMS/);

		expect(notes).not.toMatch(/home\/runner/);
		expect(notes).not.toMatch(/npm error/);
		expect(notes).not.toMatch(/complete log of this run/);
		expect(notes.match(/invalid: chokidar@5\.0\.0/g)?.length).toBe(1);
	});

	it("does not HTML-escape diagnostics rendered inside a code fence", () => {
		const notes = formatSupplyChainNotes({
			packages: [evidence()],
			npmTree: { status: 1, problems: ["invalid: pkg@<1.0.0>"], stderr: "" }
		});

		expect(notes).toMatch(/invalid: pkg@<1\.0\.0>/);
		expect(notes).not.toMatch(/&lt;|&gt;/);
	});

	it("replaces its own release-notes section without changing authored notes", () => {
		const notes = formatSupplyChainNotes({ packages: [evidence()], npmTree: CLEAN_TREE });
		const authored = "# Release 1.2.3\n\nCustomer-facing changes.";
		const first = mergeSupplyChainNotes(authored, notes);
		const second = mergeSupplyChainNotes(first, notes);

		expect(first).toMatch(/^# Release 1\.2\.3\n\nCustomer-facing changes\./);
		expect(first).toBe(second);
		expect(first.match(/## Supply chain/g)?.length).toBe(1);
	});
});
