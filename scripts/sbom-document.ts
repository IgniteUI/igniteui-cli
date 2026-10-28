export interface BomProperty {
	name: string;
	value: string;
}

/** The parts of a CycloneDX component this repository reads or rewrites. */
export interface BomComponent {
	"name": string;
	"group"?: string;
	"version"?: string;
	"bom-ref"?: string;
	"purl"?: string;
	"properties"?: BomProperty[];
	"components"?: BomComponent[];
	[key: string]: unknown;
}

export interface BomDependency {
	ref: string;
	dependsOn?: string[];
	provides?: string[];
}

export interface Bom {
	metadata: { component?: BomComponent; [key: string]: unknown };
	components: BomComponent[];
	dependencies: BomDependency[];
	[key: string]: unknown;
}

export interface Supplier {
	name: string;
	url: string[];
}

export interface PackedArtifact {
	name: string;
	path: string;
	sha256: string;
	sha512: string;
}

/** Every component in the document, nested components included. */
export function componentsIn(components: BomComponent[]): BomComponent[] {
	return components.flatMap(component => [component, ...componentsIn(component.components ?? [])]);
}

/** CycloneDX splits a scoped npm name into group and name; this joins them back. */
export function packageNameOf(component: BomComponent): string {
	return component.group ? `${component.group}/${component.name}` : component.name;
}

export function npmPurl(packageName: string, version: string): string {
	return `pkg:npm/${packageName.replace(/^@/, "%40")}@${version}`;
}

function replacePrefix(value: string | undefined, prefix: string): string | undefined {
	return value?.startsWith(prefix) ? value.slice(prefix.length) : value;
}

/**
 * Replace the generated workspace root with the published package and normalize all graph refs.
 */
export function promoteMainComponent(
	bom: Bom,
	options: { artifact: PackedArtifact, packageName: string, supplier: Supplier, version: string }
): Bom {
	const { artifact, packageName, supplier, version } = options;
	const index = bom.components.findIndex(component => packageNameOf(component) === packageName);

	if (index === -1) {
		throw new Error(`${packageName} is missing from the generated SBOM.`);
	}

	const [main] = bom.components.splice(index, 1);
	const workspaceRef = bom.metadata.component["bom-ref"];
	const workspacePrefix = `${workspaceRef}|`;
	const normalizeRef = (value: string) => replacePrefix(value, workspacePrefix);

	for (const component of [main, ...componentsIn(bom.components)]) {
		component["bom-ref"] = normalizeRef(component["bom-ref"]);
	}

	bom.metadata.component = {
		...main,
		type: "library",
		purl: npmPurl(packageName, version),
		supplier,
		publisher: supplier.name,
		hashes: [
			{ alg: "SHA-256", content: artifact.sha256 },
			{ alg: "SHA-512", content: artifact.sha512 }
		],
		properties: [
			...(main.properties ?? []),
			{ name: "ig:artifact:fileName", value: artifact.name }
		]
	};
	bom.metadata.supplier = supplier;
	bom.dependencies = bom.dependencies
		.filter(entry => entry.ref !== workspaceRef)
		.map(entry => ({
			...entry,
			ref: normalizeRef(entry.ref),
			...(entry.dependsOn && { dependsOn: entry.dependsOn.map(normalizeRef) }),
			...(entry.provides && { provides: entry.provides.map(normalizeRef) })
		}));

	return bom;
}

/**
 * Validate the identity, references and reachability of a delivered CycloneDX dependency graph.
 * @returns Total dependency component count, including nested components.
 */
export function assertDeliveredShape(bom: Bom, expected: { packageName: string, version: string }): number {
	const { packageName, version } = expected;
	const failures: string[] = [];
	const main = bom.metadata?.component;
	const components = componentsIn(bom.components ?? []);
	const componentRefs = components.map(component => component["bom-ref"]);
	const knownRefs = new Set([main?.["bom-ref"], ...componentRefs]);
	const dependencyGraph = new Map(
		(bom.dependencies ?? []).map(entry => [entry.ref, entry.dependsOn ?? []] as [string, string[]])
	);

	if (main?.purl !== npmPurl(packageName, version)) {
		failures.push(`metadata.component.purl is "${main?.purl}"`);
	}
	if (components.length === 0) {
		failures.push("no dependency components were resolved");
	}
	if (components.some(component => packageNameOf(component) === packageName)) {
		failures.push(`${packageName} is still listed as its own dependency`);
	}

	const duplicateRefs = componentRefs.filter((ref, index) => componentRefs.indexOf(ref) !== index);
	for (const ref of new Set(duplicateRefs)) {
		failures.push(`component bom-ref "${ref}" is duplicated`);
	}

	for (const entry of bom.dependencies ?? []) {
		if (!knownRefs.has(entry.ref)) {
			failures.push(`dependency entry references unknown component "${entry.ref}"`);
		}
		for (const ref of [...(entry.dependsOn ?? []), ...(entry.provides ?? [])]) {
			if (!knownRefs.has(ref)) {
				failures.push(`dependency entry references unknown component "${ref}"`);
			}
		}
	}

	if (!dependencyGraph.has(main?.["bom-ref"])) {
		failures.push("the main component is not the root of the dependency graph");
	} else {
		const reachable = new Set<string>();
		const pending = [main["bom-ref"]];

		while (pending.length > 0) {
			const ref = pending.pop();
			if (reachable.has(ref)) {
				continue;
			}
			reachable.add(ref);
			pending.push(...(dependencyGraph.get(ref) ?? []));
		}

		for (const ref of componentRefs) {
			if (!reachable.has(ref)) {
				failures.push(`component "${ref}" is unreachable from the main component`);
			}
		}
	}

	if (failures.length > 0) {
		throw new Error(`SBOM validation failed:\n  - ${failures.join("\n  - ")}`);
	}

	return components.length;
}
