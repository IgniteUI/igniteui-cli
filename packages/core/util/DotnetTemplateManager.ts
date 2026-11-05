import { ScaffoldOptions } from "../types/ProjectTemplate";
import { Util } from "./Util";

const TEMPLATE_PACKAGE = "IgniteUI.Blazor.Templates";
const TEMPLATE_SHORT_NAME = "igb-blazor";
const MIN_SDK_MAJOR = 8;
const MIN_EMPTY_TEMPLATE_VERSION = "1.0.0";

/**
 * Thin wrapper around the `dotnet` CLI used to scaffold Blazor projects from the
 * published `IgniteUI.Blazor.Templates` NuGet template package.
 */
export class DotnetTemplateManager {

	/** Returns the major version of the installed .NET SDK, or null if dotnet is unavailable. */
	public static getSdkMajorVersion(): number | null {
		const result = Util.spawnSync("dotnet", ["--version"], { encoding: "utf8" });
		if (result.error || result.status !== 0 || !result.stdout) {
			return null;
		}
		const major = parseInt(result.stdout.toString().trim().split(".")[0], 10);
		return isNaN(major) ? null : major;
	}

	/** Checks whether the IgniteUI.Blazor.Templates package is already installed. */
	public static isTemplateInstalled(): boolean {
		const result = Util.spawnSync("dotnet", ["new", "list", TEMPLATE_SHORT_NAME], { encoding: "utf8" });
		return result.status === 0 && !!result.stdout && result.stdout.toString().includes(TEMPLATE_SHORT_NAME);
	}

	/** Installs the latest IgniteUI.Blazor.Templates package. Returns false on failure. */
	public static installTemplate(): boolean {
		Util.log(`Installing ${TEMPLATE_PACKAGE}…`);
		const result = Util.spawnSync("dotnet", ["new", "install", TEMPLATE_PACKAGE], { stdio: "inherit" });
		if (result.error || result.status !== 0) {
			Util.error(`Failed to install the ${TEMPLATE_PACKAGE} package. ` +
				"Check your network/NuGet feed and try again.", "red");
			return false;
		}
		return true;
	}

	/**
	 * Returns the installed and latest versions when a newer IgniteUI.Blazor.Templates is available,
	 * or null when it is up to date or the check could not run (e.g. offline).
	 */
	public static checkForUpdate(): { current: string | null; latest: string } | null {
		const result = Util.spawnSync("dotnet", ["new", "update", "--check-only"], { encoding: "utf8" });
		if (result.error || result.status !== 0 || !result.stdout) {
			return null;
		}
		const output = result.stdout.toString();
		const pkg = TEMPLATE_PACKAGE.replace(/\./g, "\\.");
		const row = output.match(new RegExp(`^\\s*${pkg}\\s+(\\S+)\\s+(\\S+)\\s*$`, "mi"));
		if (row) {
			return { current: row[1], latest: row[2] };
		}
		const hint = output.match(new RegExp(`dotnet new install ${pkg}(?:@|::)(\\S+)`, "i"));
		return hint ? { current: null, latest: hint[1] } : null;
	}

	/** Updates the installed template package when outdated. A failed update keeps the installed version. */
	public static updateTemplateIfOutdated(): void {
		const update = this.checkForUpdate();
		if (!update) {
			return;
		}
		const from = update.current ? `${update.current} → ` : "";
		Util.log(`A newer ${TEMPLATE_PACKAGE} is available (${from}${update.latest}). Updating…`);
		const result = Util.spawnSync("dotnet", ["new", "install", TEMPLATE_PACKAGE], { stdio: "inherit" });
		if (result.error || result.status !== 0) {
			Util.warn(`Could not update ${TEMPLATE_PACKAGE}; continuing with the installed version` +
				(update.current ? ` (${update.current})` : "") + ".", "yellow");
			return;
		}
		Util.log(Util.greenCheck() + ` ${TEMPLATE_PACKAGE} updated to ${update.latest}`);
	}

	/**
	 * Scaffolds a Blazor project via `dotnet new igb-blazor`. Ensures the SDK and an up-to-date
	 * template package are available first. Returns false on any failure (no throwing).
	 */
	public static scaffold(options: ScaffoldOptions): boolean {
		const sdkMajor = this.getSdkMajorVersion();
		if (sdkMajor === null) {
			Util.error("The .NET SDK is required to create a Blazor project but was not found. " +
				"Install it from https://dotnet.microsoft.com/download and try again.", "red");
			return false;
		}
		if (sdkMajor < MIN_SDK_MAJOR) {
			Util.error(`The Blazor Web App template requires .NET ${MIN_SDK_MAJOR}+ but found .NET ${sdkMajor}. ` +
				"Install a newer SDK from https://dotnet.microsoft.com/download and try again.", "red");
			return false;
		}

		if (this.isTemplateInstalled()) {
			this.updateTemplateIfOutdated();
		} else if (!this.installTemplate()) {
			return false;
		}

		const extra = options.extraConfig ?? {};
		const hosting = extra.Hosting ?? "Server";
		const variant = extra.Variant ?? "light";
		const args = [
			"new", TEMPLATE_SHORT_NAME,
			"-n", options.name,
			"-o", options.name,
			"--Hosting", hosting,
			"--Theme", options.theme,
			"--Variant", variant
		];
		if (extra.Empty) {
			args.push("--Empty");
		}
		if (options.skipInstall) {
			args.push("--SkipRestore");
		}

		const result = Util.spawnSync("dotnet", args, { stdio: "inherit" });
		if (result.error || result.status !== 0) {
			Util.error("Project creation failed (see dotnet output above).", "red");
			if (extra.Empty) {
				Util.error(`The empty project needs ${TEMPLATE_PACKAGE} ${MIN_EMPTY_TEMPLATE_VERSION} or newer. ` +
					`Update it with: dotnet new install ${TEMPLATE_PACKAGE}`, "red");
			}
			return false;
		}

		Util.log(Util.greenCheck() + " Project Created");
		return true;
	}
}
