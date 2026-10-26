import { Bom, BomComponent, componentsIn, packageNameOf } from "./sbom-document";

const CLEARLYDEFINED_DEFINITIONS = "https://api.clearlydefined.io/definitions?expand=-files";
// ClearlyDefined's way of saying it found no usable license.
const UNRESOLVED_LICENSE = /\b(?:NOASSERTION|NONE|OTHER)\b/;

export interface ClearlyDefinedDefinition {
	licensed?: { declared?: string };
}

export type DefinitionFetcher = (coordinates: string[], timeoutMs: number) =>
	Promise<Record<string, ClearlyDefinedDefinition>>;

export interface LicenseLookupOptions {
	maxAttempts?: number;
	retryDelayMs?: number;
	timeoutMs?: number;
	batchSize?: number;
	fetchDefinitions?: DefinitionFetcher;
	sleep?: (ms: number) => Promise<void>;
	log?: (message: string) => void;
}

/** The ClearlyDefined coordinate of an npm component, or null for anything else. */
export function clearlyDefinedCoordinate(component: BomComponent): string | null {
	if (!component.purl?.startsWith("pkg:npm/") || !component.version) {
		return null;
	}
	return `npm/npmjs/${component.group || "-"}/${component.name}/${component.version}`;
}

/** The main component and every dependency that declares no license. */
export function unlicensedComponents(bom: Bom): BomComponent[] {
	const main = bom.metadata.component ? [bom.metadata.component] : [];
	return [...main, ...componentsIn(bom.components)]
		.filter(component => !component.licenses?.length);
}

export function describeComponent(component: BomComponent): string {
	return `${packageNameOf(component)}@${component.version}`;
}

async function fetchClearlyDefined(coordinates: string[], timeoutMs: number):
	Promise<Record<string, ClearlyDefinedDefinition>> {
	const response = await fetch(CLEARLYDEFINED_DEFINITIONS, {
		method: "POST",
		headers: { "Accept": "application/json", "Content-Type": "application/json" },
		body: JSON.stringify(coordinates),
		signal: AbortSignal.timeout(timeoutMs)
	});

	if (!response.ok) {
		throw new Error(`ClearlyDefined returned HTTP ${response.status}`);
	}

	return response.json();
}

/**
 * Look up licenses that the packages themselves do not declare.
 *
 * ClearlyDefined harvests definitions on demand, so a coordinate it has not seen before can stall until
 * the gateway times out, while the same request succeeds once the definition is cached. Only coordinates
 * whose lookup failed are retried; an answer without a license is final for this run. Licenses already
 * resolved are kept across attempts, so a degraded retry never loses them. Never throws: an unreachable
 * service leaves the components without a license and the caller reports the gap.
 * @returns Resolved SPDX expressions keyed by ClearlyDefined coordinate.
 */
export async function resolveLicenses(coordinates: string[], options: LicenseLookupOptions = {}):
	Promise<Map<string, string>> {
	const {
		maxAttempts = 3,
		retryDelayMs = 15000,
		timeoutMs = 60000,
		batchSize = 100,
		fetchDefinitions = fetchClearlyDefined,
		sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms)),
		log = () => { }
	} = options;
	const resolved = new Map<string, string>();
	let pending = [...new Set(coordinates)];

	for (let attempt = 1; attempt <= maxAttempts && pending.length > 0; attempt++) {
		log(`Looking up ${pending.length} licenses on ClearlyDefined (attempt ${attempt} of ${maxAttempts})...`);
		const unanswered: string[] = [];

		for (let start = 0; start < pending.length; start += batchSize) {
			const batch = pending.slice(start, start + batchSize);
			let definitions: Record<string, ClearlyDefinedDefinition>;

			try {
				definitions = await fetchDefinitions(batch, timeoutMs);
			} catch (error) {
				log(`ClearlyDefined lookup failed: ${error instanceof Error ? error.message : error}`);
				unanswered.push(...batch);
				continue;
			}

			for (const coordinate of batch) {
				const definition = definitions?.[coordinate];
				if (!definition) {
					unanswered.push(coordinate);
					continue;
				}
				const declared = definition.licensed?.declared?.trim();
				if (declared && !UNRESOLVED_LICENSE.test(declared)) {
					resolved.set(coordinate, declared);
				}
			}
		}

		pending = unanswered;
		if (pending.length > 0 && attempt < maxAttempts) {
			log(`Retrying ${pending.length} unanswered lookups in ${retryDelayMs / 1000} seconds...`);
			await sleep(retryDelayMs);
		}
	}

	return resolved;
}

/**
 * Record resolved licenses on the components that had none.
 * @returns How many components received a license.
 */
export function applyLicenses(bom: Bom, licenses: Map<string, string>): number {
	let applied = 0;

	for (const component of unlicensedComponents(bom)) {
		const expression = licenses.get(clearlyDefinedCoordinate(component));
		if (!expression) {
			continue;
		}
		// "concluded": established by analysis, not declared in the package's own manifest.
		component.licenses = [{ expression, acknowledgement: "concluded" }];
		component.properties = [
			...(component.properties ?? []),
			{ name: "ig:license:source", value: "ClearlyDefined" }
		];
		applied++;
	}

	return applied;
}
