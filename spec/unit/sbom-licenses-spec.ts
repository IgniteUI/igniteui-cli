import { Bom } from "../../scripts/sbom-document";
import {
	applyLicenses, clearlyDefinedCoordinate, ClearlyDefinedDefinition, resolveLicenses, unlicensedComponents
} from "../../scripts/sbom-licenses";

const LICENSED = "npm/npmjs/-/licensed/1.0.0";
const SCOPED = "npm/npmjs/@igniteui/mcp-server/1.0.0";

function bom(): Bom {
	return {
		metadata: {
			component: { "name": "mcp-server", "group": "@igniteui", "version": "1.0.0", "purl": "pkg:npm/%40igniteui/mcp-server@1.0.0" }
		},
		components: [
			{ "name": "declared", "version": "1.0.0", "purl": "pkg:npm/declared@1.0.0", "licenses": [{ license: { id: "MIT" } }] },
			{
				"name": "licensed", "version": "1.0.0", "purl": "pkg:npm/licensed@1.0.0",
				"components": [{ "name": "nested", "version": "2.0.0", "purl": "pkg:npm/nested@2.0.0" }]
			}
		],
		dependencies: []
	};
}

function answer(declared: Record<string, string>): Record<string, ClearlyDefinedDefinition> {
	const definitions: Record<string, ClearlyDefinedDefinition> = {};
	for (const coordinate of Object.keys(declared)) {
		definitions[coordinate] = { licensed: { declared: declared[coordinate] } };
	}
	return definitions;
}

const noDelay = { sleep: () => Promise.resolve() };

describe("Unit - SBOM licenses", () => {
	it("builds ClearlyDefined coordinates for scoped and unscoped npm packages only", () => {
		expect(clearlyDefinedCoordinate({ name: "licensed", version: "1.0.0", purl: "pkg:npm/licensed@1.0.0" }))
			.toBe(LICENSED);
		expect(clearlyDefinedCoordinate(bom().metadata.component)).toBe(SCOPED);
		expect(clearlyDefinedCoordinate({ name: "x", version: "1.0.0", purl: "pkg:nuget/x@1.0.0" })).toBeNull();
	});

	it("finds the main component and nested dependencies without a license", () => {
		expect(unlicensedComponents(bom()).map(clearlyDefinedCoordinate))
			.toEqual([SCOPED, LICENSED, "npm/npmjs/-/nested/2.0.0"]);
	});

	it("records resolved licenses as concluded and marks their source", () => {
		const document = bom();

		expect(applyLicenses(document, new Map([[LICENSED, "Apache-2.0"]]))).toBe(1);
		expect(document.components[1].licenses).toEqual([{ expression: "Apache-2.0", acknowledgement: "concluded" }]);
		expect(document.components[1].properties).toEqual([{ name: "ig:license:source", value: "ClearlyDefined" }]);
		expect(document.components[0].licenses).toEqual([{ license: { id: "MIT" } }]);
		expect(unlicensedComponents(document).length).toBe(2);
	});

	it("ignores answers in which ClearlyDefined found no usable license", async () => {
		const licenses = await resolveLicenses([LICENSED, SCOPED, "npm/npmjs/-/other/1.0.0"], {
			...noDelay,
			fetchDefinitions: async () => answer({ [LICENSED]: "MIT", [SCOPED]: "NOASSERTION", "npm/npmjs/-/other/1.0.0": "OTHER" })
		});

		expect([...licenses]).toEqual([[LICENSED, "MIT"]]);
	});

	it("retries only failed lookups and keeps what earlier attempts resolved", async () => {
		const requests: string[][] = [];
		const licenses = await resolveLicenses([LICENSED, SCOPED], {
			...noDelay,
			batchSize: 1,
			fetchDefinitions: async coordinates => {
				requests.push(coordinates);
				if (coordinates[0] === SCOPED && requests.length < 3) {
					throw new Error("gateway timeout");
				}
				return answer({ [LICENSED]: "MIT", [SCOPED]: "Apache-2.0" });
			}
		});

		expect(requests).toEqual([[LICENSED], [SCOPED], [SCOPED]]);
		expect([...licenses]).toEqual([[LICENSED, "MIT"], [SCOPED, "Apache-2.0"]]);
	});

	it("does not retry an answer that carries no license", async () => {
		let calls = 0;
		const licenses = await resolveLicenses([SCOPED], {
			...noDelay,
			fetchDefinitions: async () => {
				calls++;
				return { [SCOPED]: { licensed: {} } };
			}
		});

		expect(calls).toBe(1);
		expect(licenses.size).toBe(0);
	});

	it("gives up without throwing when ClearlyDefined stays unreachable", async () => {
		let calls = 0;
		const licenses = await resolveLicenses([LICENSED, SCOPED], {
			...noDelay,
			maxAttempts: 3,
			fetchDefinitions: async () => {
				calls++;
				throw new Error("ClearlyDefined returned HTTP 503");
			}
		});

		expect(calls).toBe(3);
		expect(licenses.size).toBe(0);
	});
});
