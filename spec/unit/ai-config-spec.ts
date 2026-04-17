import * as path from "path";
import { App, FS_TOKEN, GoogleAnalytics, IFileSystem, Util } from "@igniteui/cli-core";
import { configureMCP } from "../../packages/cli/lib/commands/ai-config";
import * as aiConfig  from "../../packages/cli/lib/commands/ai-config";

const IGNITEUI_SERVER_KEY = "igniteui-cli";
const IGNITEUI_THEMING_SERVER_KEY = "igniteui-theming";
const igniteuiServer = { command: "npx", args: ["-y", "igniteui-cli@next", "mcp"] };
const igniteuiThemingServer = { command: "npx", args: ["-y", "igniteui-theming", "igniteui-theming-mcp"] };

function createMockFs(existingContent?: string): IFileSystem {
	return {
		fileExists: jasmine.createSpy("fileExists"),
		readFile: existingContent
			? jasmine.createSpy("readFile").and.returnValue(existingContent)
			: jasmine.createSpy("readFile").and.throwError("ENOENT"),
		writeFile: jasmine.createSpy("writeFile"),
		directoryExists: jasmine.createSpy("directoryExists"),
		glob: jasmine.createSpy("glob").and.returnValue([])
	};
}

describe("Unit - ai-config command", () => {
	const configPath = path.join(process.cwd(), ".vscode", "mcp.json");

	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	beforeEach(() => {
		spyOn(Util, "log");
		spyOn(Util, "greenCheck").and.returnValue("✓");
	});

	function writtenConfig(mockFs: IFileSystem): Record<string, unknown> {
		const content = (mockFs.writeFile as jasmine.Spy).calls.mostRecent().args[1] as string;
		return JSON.parse(content);
	}

	describe("configureMCP", () => {
		it("creates .vscode/mcp.json with both servers when file does not exist", () => {
			const mockFs = createMockFs();

			configureMCP(mockFs);

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds both servers when file exists but servers object is empty", () => {
			const mockFs = createMockFs(JSON.stringify({ servers: {} }));

			configureMCP(mockFs);

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds missing igniteui-theming server when only igniteui-cli is present", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: { [IGNITEUI_SERVER_KEY]: igniteuiServer }
			}));

			configureMCP(mockFs);

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("adds missing igniteui-cli server when only igniteui-theming is present", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: { [IGNITEUI_THEMING_SERVER_KEY]: igniteuiThemingServer }
			}));

			configureMCP(mockFs);

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});

		it("is a no-op and logs when both servers are already configured", () => {
			const mockFs = createMockFs(JSON.stringify({
				servers: {
					[IGNITEUI_SERVER_KEY]: igniteuiServer,
					[IGNITEUI_THEMING_SERVER_KEY]: igniteuiThemingServer
				}
			}));

			configureMCP(mockFs);

			expect(mockFs.writeFile).not.toHaveBeenCalled();
			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("already configured"));
		});

		it("preserves existing third-party servers when adding igniteui servers", () => {
			const thirdPartyServer = { command: "node", args: ["server.js"] };
			const mockFs = createMockFs(JSON.stringify({
				servers: { "other-server": thirdPartyServer }
			}));

			configureMCP(mockFs);

			expect(mockFs.writeFile).toHaveBeenCalled();
			const config = writtenConfig(mockFs);
			expect((config.servers as any)["other-server"]).toEqual(thirdPartyServer);
			expect((config.servers as any)[IGNITEUI_SERVER_KEY]).toEqual(igniteuiServer);
			expect((config.servers as any)[IGNITEUI_THEMING_SERVER_KEY]).toEqual(igniteuiThemingServer);
		});
	});

	describe("handler", () => {
		it("posts analytics and calls configure", async () => {
			App.container.set(FS_TOKEN, createMockFs());
			const fs = require("fs");
			spyOn(fs, "readFileSync").and.throwError(new Error("ENOENT"));
			spyOn(fs, "existsSync").and.returnValue(false);
			spyOn(fs, "mkdirSync");
			spyOn(fs, "writeFileSync");

			await aiConfig.default.handler({ _: ["ai-config"], $0: "ig" });

			expect(Util.log).toHaveBeenCalledWith(jasmine.stringContaining("MCP servers configured"));
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ t: "screenview", cd: "MCP" }));
			expect(GoogleAnalytics.post).toHaveBeenCalledWith(jasmine.objectContaining({ t: "event", ec: "$ig ai-config" }));
		});
	});
});
