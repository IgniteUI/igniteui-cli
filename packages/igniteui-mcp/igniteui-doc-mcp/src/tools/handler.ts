import { readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { z } from "zod";
import { detectPlatformFromDeps, PLATFORM_INFO } from "./detect.js";
import type { DetectPlatformOutput, DetectionResult, Platform } from "./types.js";

const packageJsonSchema = z.object({
    dependencies:    z.record(z.string()).optional(),
    devDependencies: z.record(z.string()).optional(),
});

const inputSchema = z.object({
    packageJsonPath: z.string().optional()
        .describe("Path to package.json, relative to cwd. Defaults to ./package.json"),
});

// ---- Response text builders ------------------------------------------------

function renderAmbiguous(result: DetectionResult): string {
    const lines = [
        "## Platform Detection Result",
        "",
        "**Status:** Ambiguous  multiple Ignite UI platforms detected.",
        "This may be a monorepo or a project in transition.",
        "",
        "### Detected Platforms",
        "",
    ];
    for (const alt of result.alternatives!) {
        const info = PLATFORM_INFO[alt.platform];
        lines.push(
            `**${info.name}** (confidence: ${alt.confidence})`,
            `Signals: ${alt.signals.map(formatSignal).join(", ")}`,
            "",
        );
    }
    lines.push(
        "### Action Required",
        "",
        "Specify the platform explicitly in subsequent tool calls:",
        ...result.alternatives!.map(a => `- \`platform: '${a.platform}'\` for ${PLATFORM_INFO[a.platform].name}`),
    );
    return lines.join("\n");
}

function renderGeneric(result: DetectionResult): string {
    const info = PLATFORM_INFO.generic;
    const lines = [
        "## Platform Detection Result",
        "",
        `**Detected Platform:** ${info.name}`,
        `**Confidence:** ${result.confidence}`,
        "",
        info.description,
    ];
    if (result.signals.length > 0) {
        lines.push("", `**Signals:** ${result.signals.map(formatSignal).join(", ")}`);
    }
    return lines.join("\n");
}

function renderPlatform(result: DetectionResult, licensed: boolean): string {
    const platform = result.platform as Platform;
    const info = PLATFORM_INFO[platform];
    const lines = [
        "## Platform Detection Result",
        "",
        `**Detected Platform:** ${info.name}`,
        `**Confidence:** ${result.confidence}`,
    ];
    if (result.detectedPackage) {
        lines.push(`**Detected Package:** \`${result.detectedPackage}\``);
        if (platform === "angular") {
            lines.push(`**Package Type:** ${licensed ? "Licensed (@infragistics)" : "Open Source (npm)"}`);
        }
    }
    if (result.signals.length > 0) {
        lines.push(`**Signals:** ${result.signals.map(formatSignal).join(", ")}`);
    }
    lines.push("", `### Usage`, "", info.description);
    if (result.reason && result.confidence === "low") {
        lines.push("", `>  ${result.reason}`);
    }
    return lines.join("\n");
}

function renderError(result: DetectionResult): string {
    return [
        "## Platform Detection Result",
        "",
        "**Platform:** Not detected",
        `**Reason:** ${result.reason}`,
        "",
        "Specify the platform explicitly: `angular` | `webcomponents` | `react` | `blazor` | `generic`",
    ].join("\n");
}

function formatSignal(s: { type: string; package?: string; file?: string; framework?: string }): string {
    if (s.type === "ignite_package" || s.type === "framework_package") return `pkg:${s.package}`;
    if (s.type === "config_file") return `config:${s.file}`;
    if (s.type === "cli_config") return `cli_config:${s.file}(framework=${s.framework})`;
    return "unknown";
}

// ---- Main handler ----------------------------------------------------------

export async function handleDetectPlatform(params: z.infer<typeof inputSchema>) {
    const packageJsonPath = params.packageJsonPath ?? "./package.json";
    let resolvedPath = resolve(process.cwd(), packageJsonPath);

    // If the user passed a directory path, append package.json automatically
    try {
        const s = await stat(resolvedPath);
        if (s.isDirectory()) {
            resolvedPath = join(resolvedPath, "package.json");
        }
    } catch {
        // path doesn't exist yet  proceed and let the readFile call produce the error
    }

    const projectRoot = dirname(resolvedPath);

    let result: DetectionResult;
    let deps: Record<string, string> = {};
    let devDeps: Record<string, string> = {};

    try {
        const raw = await readFile(resolvedPath, "utf-8");
        const parsed = packageJsonSchema.safeParse(JSON.parse(raw));
        if (!parsed.success) {
            result = { platform: null, confidence: "none", signals: [], reason: `Invalid package.json: ${parsed.error.message}` };
        } else {
            deps    = parsed.data.dependencies    ?? {};
            devDeps = parsed.data.devDependencies ?? {};
            result  = detectPlatformFromDeps(deps, devDeps, projectRoot);
        }
    } catch (err) {
        const isNotFound = err instanceof Error && "code" in err && (err as NodeJS.ErrnoException).code === "ENOENT";
        if (isNotFound) {
            // No package.json (e.g. Blazor / .NET projects)  still attempt detection
            // via ignite-ui-cli.json and config files in the project root
            result = detectPlatformFromDeps({}, {}, projectRoot);
            if (result.platform === null && !result.ambiguous) {
                result = { ...result, reason: `No package.json found. ${result.reason ?? ""}`.trim() };
            }
        } else {
            result = { platform: null, confidence: "none", signals: [], reason: `Could not read package.json: ${err instanceof Error ? err.message : err}` };
        }
    }

    const licensed = result.detectedPackage?.startsWith("@infragistics/") ?? false;

    const text =
        result.ambiguous             ? renderAmbiguous(result) :
        result.platform === "generic" ? renderGeneric(result) :
        result.platform              ? renderPlatform(result, licensed) :
                                       renderError(result);

    const output: DetectPlatformOutput = {
        platform:   result.platform,
        confidence: result.confidence,
        reason:     result.reason,
        signals:    result.signals,
    };

    if (result.ambiguous && result.alternatives) {
        output.ambiguous    = true;
        output.alternatives = result.alternatives;
    }
    if (result.detectedPackage) {
        output.detectedPackage = result.detectedPackage;
        output.licensed        = licensed;
    }
    if (result.platform && result.platform !== "generic") {
        const info = PLATFORM_INFO[result.platform];
        output.platformInfo = { name: info.name, packageName: info.packageName, description: info.description };
    }

    return {
        content: [{ type: "text" as const, text }],
        structuredData: output,
    };
}