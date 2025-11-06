import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as cli from "../../packages/cli/lib/cli";

const execLocation = "packages/cli/bin/execute.js";

describe("MCP command", () => {
	beforeEach(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("should be listed in help", async () => {
		const consoleSpy = spyOn(console, "log");

		try {
			await cli.run(["--help"]);
		} catch (e) {
			fail(e);
		}

		expect(consoleSpy).toHaveBeenCalledTimes(1);
		const helpText: string = consoleSpy.calls.mostRecent().args[0] + "";
		expect(helpText).toContain("mcp");
		expect(helpText).toContain("Start the Ignite UI CLI MCP (Model Context Protocol)");
	});

	it("should show help for the mcp command", async () => {
		const child = Util.spawnSync("node", [execLocation, "mcp", "-h"], {
			encoding: "utf-8"
		});

		const expectedHelpText: string = `
		Options:
		-v, --version   Show current Ignite UI CLI version                   [boolean]
		-h, --help      Show help                                            [boolean]
		--read-only     Only register read-only tools       [boolean] [default: false]
		`;

		const replacedHelpText: string = expectedHelpText.replace(/\s/g, "");
		const actualText: string = (child.stdout.toString()).replace(/\s/g, "");

		expect(actualText).toContain(replacedHelpText);
	});

	it("should run without error", async () => {
		// The MCP command checks if running in a TTY
		// When run interactively (TTY), it shows a message
		// When run non-interactively (not TTY), it starts the MCP server
		// Since we can't easily test the server startup, we just verify no errors
		const child = Util.spawnSync("timeout", ["1", "node", execLocation, "mcp"], {
			encoding: "utf-8"
		});

		// Command will timeout when trying to start server (which is expected)
		// or show the interactive message if TTY is detected
		// Either way, we should not get an error status code before timeout
		expect(child.status).not.toBe(1);
	});
});
