import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import type {
Platform,
DetectionSignal,
DetectionResult,
ConfigFileSignal,
CliConfigSignal,
} from "./types.js";

// Map ignite-ui-cli.json framework values to Platform
const CLI_FRAMEWORK_MAP: Record<string, Platform> = {
angular:      "angular",
react:        "react",
webcomponents: "webcomponents",
};

/**
 * Check for ignite-ui-cli.json in the project root and extract the framework.
 * Returns null if the file is absent or does not contain a recognisable framework.
 */
function detectFromCliConfig(
projectRoot: string,
): { signal: CliConfigSignal; platform: Platform } | null {
const filePath = resolve(projectRoot, "ignite-ui-cli.json");
if (!existsSync(filePath)) return null;
try {
const raw = readFileSync(filePath, "utf-8");
const cfg = JSON.parse(raw) as { project?: { framework?: string } };
const fw = cfg?.project?.framework;
if (!fw) return null;
const platform = CLI_FRAMEWORK_MAP[fw];
if (!platform) return null;
const signal: CliConfigSignal = { type: "cli_config", file: "ignite-ui-cli.json", framework: fw, confidence: 100 };
return { signal, platform };
} catch {
return null;
}
}

// Ignite UI npm packages per platform  HIGH confidence (100)
const IGNITE_PACKAGES: Record<Platform, string[]> = {
angular:      ["igniteui-angular", "@infragistics/igniteui-angular"],
webcomponents: ["igniteui-webcomponents", "@infragistics/igniteui-webcomponents"],
react:        ["igniteui-react", "@infragistics/igniteui-react"],
blazor:       [], // Blazor uses NuGet  detected via .csproj
generic:      [], // Not detectable from packages
};

// Framework packages used as LOW-confidence fallback (40) when no Ignite UI package is found
const FRAMEWORK_PACKAGES: Partial<Record<string, Platform>> = {
"@angular/core": "angular",
"lit":           "webcomponents",
"react":         "react",
"react-dom":     "react",
};

// Platform display info used in tool response text
export const PLATFORM_INFO: Record<Platform, { name: string; packageName: string; description: string }> = {
angular: {
name: "Ignite UI for Angular",
packageName: "igniteui-angular",
description: "Available as OSS (igniteui-angular) or licensed (@infragistics/igniteui-angular).",
},
webcomponents: {
name: "Ignite UI for Web Components",
packageName: "igniteui-webcomponents",
description: "Use igniteui-webcomponents with the igniteui-theming package.",
},
react: {
name: "Ignite UI for React",
packageName: "igniteui-react",
description: "Use igniteui-react with the igniteui-theming package.",
},
blazor: {
name: "Ignite UI for Blazor",
packageName: "IgniteUI.Blazor",
description: "Use IgniteUI.Blazor (NuGet) with igniteui-theming for Sass compilation.",
},
generic: {
name: "Ignite UI Theming (Standalone)",
packageName: "igniteui-theming",
description: "Platform-agnostic. Component-specific theming tools are not available in generic mode.",
},
};

/**
 * Scan the project root for well-known config files that signal a platform.
 */
function detectFromConfigFiles(projectRoot: string): Array<ConfigFileSignal & { platform: Platform }> {
const signals: Array<ConfigFileSignal & { platform: Platform }> = [];
const root = resolve(projectRoot);

if (existsSync(resolve(root, "angular.json"))) {
signals.push({ type: "config_file", platform: "angular", file: "angular.json", confidence: 80 });
}

for (const name of ["vite.config.ts", "vite.config.js", "vite.config.mts", "vite.config.mjs"]) {
const p = resolve(root, name);
if (existsSync(p)) {
try {
const content = readFileSync(p, "utf-8");
if (content.includes("@vitejs/plugin-react") || content.includes("plugin-react")) {
signals.push({ type: "config_file", platform: "react", file: name, confidence: 80 });
}
} catch { /* ignore */ }
break;
}
}

for (const name of ["next.config.js", "next.config.mjs", "next.config.ts"]) {
if (existsSync(resolve(root, name))) {
signals.push({ type: "config_file", platform: "react", file: name, confidence: 80 });
break;
}
}

try {
// Collect .csproj files from the root and one level of subdirectories
const csprojFiles: string[] = [];
const rootEntries = readdirSync(root, { withFileTypes: true });
for (const entry of rootEntries) {
if (entry.isFile() && entry.name.endsWith(".csproj")) {
csprojFiles.push(resolve(root, entry.name));
} else if (entry.isDirectory()) {
try {
const subEntries = readdirSync(resolve(root, entry.name));
for (const sub of subEntries) {
if (sub.endsWith(".csproj")) {
csprojFiles.push(resolve(root, entry.name, sub));
}
}
} catch { /* ignore unreadable dirs */ }
}
}
for (const fullPath of csprojFiles.slice(0, 10)) {
const f = fullPath.replace(root + "/", "").replace(root + "\\", "");
const content = readFileSync(fullPath, "utf-8");
if (content.includes("IgniteUI.Blazor")) {
signals.push({ type: "config_file", platform: "blazor", file: f, confidence: 100 });
} else if (content.includes("Microsoft.NET.Sdk.BlazorWebAssembly") || content.includes("Microsoft.NET.Sdk.Razor")) {
signals.push({ type: "config_file", platform: "blazor", file: f, confidence: 40 });
}
}
} catch { /* ignore */ }

return signals;
}

/**
 * Detect the Ignite UI platform from package.json deps and project config files.
 *
 * Confidence scoring:
 *  100  Ignite UI package found in npm deps
 *  100  .csproj with IgniteUI.Blazor reference
 *   80  angular.json / vite.config (React plugin) / next.config.*
 *   40  Generic framework package (@angular/core, react, lit)  fallback only
 *
 * Returns `generic` when no Ignite UI product is detected.
 * Returns `ambiguous` when multiple platforms score  60.
 */
export function detectPlatformFromDeps(
deps: Record<string, string> = {},
devDeps: Record<string, string> = {},
projectRoot = ".",
): DetectionResult {
const all = { ...deps, ...devDeps };
const signals: DetectionSignal[] = [];
const scores = new Map<Platform, number>();

// Step 0  ignite-ui-cli.json (AUTHORITATIVE - 100% confidence, short-circuit)
const cliConfig = detectFromCliConfig(projectRoot);
if (cliConfig) {
const { signal, platform } = cliConfig;
const packageName = (Object.keys({ ...deps, ...devDeps }).find(
p => IGNITE_PACKAGES[platform]?.includes(p)
)) as string | undefined;
return {
platform,
confidence: "high",
signals: [signal],
detectedPackage: packageName,
reason: `Detected ${platform} from ignite-ui-cli.json (authoritative).`,
};
}

// Step 1  Ignite UI packages (HIGH)
for (const [platform, packages] of Object.entries(IGNITE_PACKAGES) as [Platform, string[]][]) {
for (const pkg of packages) {
if (pkg in all) {
signals.push({ type: "ignite_package", package: pkg, confidence: 100 });
scores.set(platform, 100);
}
}
}

// Step 2  Config files (MEDIUM-HIGH)
const configSignals = detectFromConfigFiles(projectRoot);
for (const s of configSignals) {
signals.push({ type: "config_file", file: s.file, confidence: s.confidence });
scores.set(s.platform, Math.max(scores.get(s.platform) ?? 0, s.confidence));
}

// Step 3  Framework packages (LOW fallback)
for (const [pkg, platform] of Object.entries(FRAMEWORK_PACKAGES) as [string, Platform][]) {
if (pkg in all && (scores.get(platform) ?? 0) < 60) {
signals.push({ type: "framework_package", package: pkg, confidence: 40 });
scores.set(platform, Math.max(scores.get(platform) ?? 0, 40));
}
}

if (scores.size === 0) {
return {
platform: "angular",
confidence: "low",
signals: [],
reason: "No Ignite UI packages, framework packages, or config files detected. Defaulting to Angular — specify the platform explicitly if this is incorrect.",
};
}

const hasIgniteProduct =
signals.some(s => s.type === "ignite_package") ||
signals.some(s => s.type === "config_file" && s.confidence === 100);

if (!hasIgniteProduct) {
return {
platform: "angular",
confidence: "low",
signals,
reason: "No Ignite UI product found — framework/config signals exist but no Ignite UI package was detected. Defaulting to Angular — specify the platform explicitly if this is incorrect.",
};
}

const sorted = [...scores.entries()].sort((a, b) => b[1] - a[1]);
const significant = sorted.filter(([, score]) => score >= 60);

if (significant.length > 1) {
const alternatives = significant.map(([platform, score]) => ({
platform,
confidence: score,
signals: signals.filter(s => {
if (s.type === "ignite_package") return IGNITE_PACKAGES[platform]?.includes(s.package);
if (s.type === "config_file")    return configSignals.some(cs => cs.platform === platform && cs.file === s.file);
if (s.type === "framework_package") return FRAMEWORK_PACKAGES[s.package] === platform;
return false;
}),
}));
return {
platform: null,
confidence: "none",
ambiguous: true,
alternatives,
signals,
reason: `Multiple platforms detected: ${alternatives.map(a => a.platform).join(", ")}. Please specify explicitly.`,
};
}

const [topPlatform, topScore] = sorted[0];
const confidence = topScore >= 80 ? "high" : topScore >= 60 ? "medium" : "low";
const detectedPackage = (signals.find(
s => s.type === "ignite_package" && IGNITE_PACKAGES[topPlatform]?.includes(s.package)
) as { package: string } | undefined)?.package;

return {
platform: topPlatform,
confidence,
signals,
detectedPackage,
reason: `Detected ${topPlatform} with ${confidence} confidence (score: ${topScore}).`,
};
}
