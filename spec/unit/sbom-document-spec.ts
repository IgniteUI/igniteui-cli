import { assertDeliveredShape, Bom, promoteMainComponent } from "../../scripts/sbom-document";

const WORKSPACE_REF = "igniteui-cli-sbom-workspace@0.0.0";
const SUPPLIER = { name: "Infragistics", url: ["https://www.infragistics.com"] };

function generatedBom(main: { name: string, group?: string, version: string }): Bom {
	const fullName = main.group ? `${main.group}/${main.name}` : main.name;
	const mainRef = `${WORKSPACE_REF}|${fullName}@${main.version}`;
	const dependencyRef = `${WORKSPACE_REF}|dependency@2.0.0`;
	const nestedRef = `${dependencyRef}|nested@3.0.0`;

	return {
		metadata: {
			component: { "name": "igniteui-cli-sbom-workspace", "bom-ref": WORKSPACE_REF }
		},
		components: [
			{ ...main, "bom-ref": mainRef },
			{
				"name": "dependency",
				"version": "2.0.0",
				"bom-ref": dependencyRef,
				"components": [{ "name": "nested", "version": "3.0.0", "bom-ref": nestedRef }]
			}
		],
		dependencies: [
			{ ref: WORKSPACE_REF, dependsOn: [mainRef] },
			{ ref: mainRef, dependsOn: [dependencyRef] },
			{ ref: dependencyRef, dependsOn: [nestedRef] },
			{ ref: nestedRef, dependsOn: [] }
		]
	};
}

function promote(bom: Bom, packageName: string, version: string): Bom {
	return promoteMainComponent(bom, {
		artifact: { name: "package.tgz", path: "package.tgz", sha256: "a".repeat(64), sha512: "b".repeat(128) },
		packageName,
		supplier: SUPPLIER,
		version
	});
}

describe("Unit - SBOM document", () => {
	it("re-roots every component and dependency reference on the published package", () => {
		const bom = promote(generatedBom({ name: "igniteui-cli", version: "1.2.3" }), "igniteui-cli", "1.2.3");

		expect(assertDeliveredShape(bom, { packageName: "igniteui-cli", version: "1.2.3" })).toBe(2);
		expect(bom.metadata.component["bom-ref"]).toBe("igniteui-cli@1.2.3");
		expect(JSON.stringify(bom)).not.toMatch(/igniteui-cli-sbom-workspace/);
		expect(bom.dependencies.map(entry => entry.ref)).toEqual(
			["igniteui-cli@1.2.3", "dependency@2.0.0", "dependency@2.0.0|nested@3.0.0"]
		);
	});

	it("finds a scoped package, which CycloneDX splits into group and name", () => {
		const bom = promote(
			generatedBom({ name: "cli-core", group: "@igniteui", version: "1.2.3" }), "@igniteui/cli-core", "1.2.3");

		expect(assertDeliveredShape(bom, { packageName: "@igniteui/cli-core", version: "1.2.3" })).toBe(2);
		expect(bom.metadata.component.purl).toBe("pkg:npm/%40igniteui/cli-core@1.2.3");
		expect(bom.metadata.component["bom-ref"]).toBe("@igniteui/cli-core@1.2.3");
	});

	it("rejects a document that does not contain the package", () => {
		expect(() => promote(generatedBom({ name: "other", version: "1.2.3" }), "igniteui-cli", "1.2.3"))
			.toThrowError(/igniteui-cli is missing/);
	});

	it("rejects dependency references that do not identify a component", () => {
		const bom = promote(generatedBom({ name: "igniteui-cli", version: "1.2.3" }), "igniteui-cli", "1.2.3");
		bom.dependencies[0].dependsOn.push("missing@1.0.0");

		expect(() => assertDeliveredShape(bom, { packageName: "igniteui-cli", version: "1.2.3" }))
			.toThrowError(/unknown component "missing@1\.0\.0"/);
	});

	it("rejects components that are unreachable from the published package", () => {
		const bom = promote(generatedBom({ name: "igniteui-cli", version: "1.2.3" }), "igniteui-cli", "1.2.3");
		bom.components.push({ "name": "orphan", "version": "4.0.0", "bom-ref": "orphan@4.0.0" });
		bom.dependencies.push({ ref: "orphan@4.0.0", dependsOn: [] });

		expect(() => assertDeliveredShape(bom, { packageName: "igniteui-cli", version: "1.2.3" }))
			.toThrowError(/component "orphan@4\.0\.0" is unreachable/);
	});
});
