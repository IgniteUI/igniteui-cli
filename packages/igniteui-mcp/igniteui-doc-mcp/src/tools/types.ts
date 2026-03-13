export const PLATFORMS = ["angular", "webcomponents", "react", "blazor", "generic"] as const;
export type Platform   = (typeof PLATFORMS)[number];
export type Confidence = "high" | "medium" | "low" | "none";

/** An Ignite UI npm package was found in dependencies */
export interface PackageSignal {
    type: "ignite_package";
    package: string;
    confidence: number;
}

/** A well-known config file (angular.json, vite.config.*, next.config.*, .csproj) was found */
export interface ConfigFileSignal {
    type: "config_file";
    file: string;
    confidence: number;
}

/** A generic framework package (e.g. @angular/core, react) was found — low-confidence fallback */
export interface FrameworkSignal {
    type: "framework_package";
    package: string;
    confidence: number;
}

/** ignite-ui-cli.json was found and its project.framework field was read */
export interface CliConfigSignal {
    type: "cli_config";
    file: "ignite-ui-cli.json";
    framework: string;
    confidence: number;
}

export type DetectionSignal = PackageSignal | ConfigFileSignal | FrameworkSignal | CliConfigSignal;

/** Raw result returned by detectPlatformFromDeps() */
export interface DetectionResult {
    platform: Platform | null;
    confidence: Confidence;
    signals: DetectionSignal[];
    reason?: string;
    ambiguous?: boolean;
    alternatives?: Array<{ platform: Platform; confidence: number; signals: DetectionSignal[] }>;
    detectedPackage?: string;
}

/** Structured data returned to the MCP caller */
export interface DetectPlatformOutput {
    platform: Platform | null;
    confidence: Confidence;
    reason?: string;
    signals: DetectionSignal[];
    ambiguous?: boolean;
    alternatives?: Array<{ platform: Platform; confidence: number; signals: DetectionSignal[] }>;
    detectedPackage?: string;
    licensed?: boolean;
    platformInfo?: { name: string; packageName: string; description: string };
}