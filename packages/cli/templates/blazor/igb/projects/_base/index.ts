import {
	ControlExtraConfiguration, ControlExtraConfigType, defaultDelimiters,
	DotnetTemplateManager, ProjectTemplate, ScaffoldOptions
} from "@igniteui/cli-core";

/** Shared base for Blazor projects scaffolded via `dotnet new igb-blazor`. */
export abstract class IgbProjectBase implements ProjectTemplate {
	public abstract id: string;
	public abstract name: string;
	public abstract description: string;
	public framework: string = "blazor";
	public projectType: string = "igb";
	public dependencies: string[] = [];
	public hasExtraConfiguration: boolean = true;
	public isHidden: boolean = false;
	public delimiters = defaultDelimiters;
	public templatePaths: string[] = [];

	/** Scaffolds with the template's `--Empty` option: one empty page, no sample pages or layout. */
	protected abstract readonly empty: boolean;

	private extraConfiguration: { [key: string]: any } = {};

	public getExtraConfiguration(): ControlExtraConfiguration[] {
		return [
			{
				choices: ["Server", "Wasm", "Auto"],
				default: "Server",
				key: "Hosting",
				message: "Choose the hosting model:",
				type: ControlExtraConfigType.Choice
			},
			{
				choices: ["light", "dark"],
				default: "light",
				key: "Variant",
				message: "Choose the theme variant:",
				type: ControlExtraConfigType.Choice
			}
		];
	}

	public setExtraConfiguration(extraConfigKeys: {} | any[]) {
		if (Array.isArray(extraConfigKeys)) {
			// the wizard supplies answers positionally, matching getExtraConfiguration() order
			const keys = this.getExtraConfiguration().map(c => c.key);
			extraConfigKeys.forEach((value, i) => {
				if (keys[i] !== undefined) {
					this.extraConfiguration[keys[i]] = value;
				}
			});
		} else {
			this.extraConfiguration = { ...this.extraConfiguration, ...extraConfigKeys };
		}
	}

	public scaffold(options: ScaffoldOptions): Promise<boolean> {
		const extraConfig = { ...this.extraConfiguration, ...options.extraConfig };
		if (this.empty) {
			extraConfig.Empty = true;
		}
		return Promise.resolve(DotnetTemplateManager.scaffold({ ...options, extraConfig }));
	}

	// Unused — the host calls scaffold() instead of the generateConfig pipeline when scaffold exists.
	public installModules(): void {
		throw new Error("Method not implemented.");
	}
	public upgradeIgniteUIPackages(_projectPath: string, _packagePath: string): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	public generateConfig(_name: string, _theme: string, ..._options: any[]): { [key: string]: any; } {
		throw new Error("Method not implemented.");
	}
}
