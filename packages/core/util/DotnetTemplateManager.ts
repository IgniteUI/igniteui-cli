import { ScaffoldOptions } from "../types/ProjectTemplate";
import { Util } from "./Util";

const TEMPLATE_PACKAGE = "IgniteUI.Blazor.Templates";
const TEMPLATE_SHORT_NAME = "igb-blazor";
const MIN_SDK_MAJOR = 8;

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
	 * Scaffolds a Blazor project via `dotnet new igb-blazor`. Ensures the SDK and template
	 * package are available first. Returns false on any failure (no throwing).
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

		if (!this.isTemplateInstalled() && !this.installTemplate()) {
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
		if (options.skipInstall) {
			args.push("--SkipRestore");
		}

		const result = Util.spawnSync("dotnet", args, { stdio: "inherit" });
		if (result.error || result.status !== 0) {
			Util.error("Project creation failed (see dotnet output above).", "red");
			return false;
		}

		Util.log(Util.greenCheck() + " Project Created");
		return true;
	}
}
