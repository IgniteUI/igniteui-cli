import { spawn } from "child_process";

const execLocation = "packages/cli/bin/execute.js";

interface McpRun {
	response: any;
	nonProtocolLines: string[];
	exitCode: number | null;
}

/** Starts `ig mcp`, sends `initialize`, and closes stdin once the server answers. */
function initializeMcpServer(args: string[]): Promise<McpRun> {
	return new Promise((resolve, reject) => {
		const child = spawn(process.execPath, [execLocation, "mcp", ...args], { stdio: ["pipe", "pipe", "pipe"] });
		const nonProtocolLines: string[] = [];
		let response: any;
		let buffer = "";

		child.stdout.on("data", (data: Buffer) => {
			buffer += data.toString();
			const lines = buffer.split("\n");
			buffer = lines.pop() ?? "";
			for (const line of lines.filter(l => l.trim())) {
				let message: any;
				try {
					message = JSON.parse(line);
				} catch {
					nonProtocolLines.push(line);
					continue;
				}
				if (message.id === 1) {
					response = message;
					child.stdin.end();
				}
			}
		});
		child.on("error", reject);
		child.on("exit", exitCode => resolve({ response, nonProtocolLines, exitCode }));

		child.stdin.write(JSON.stringify({
			jsonrpc: "2.0",
			id: 1,
			method: "initialize",
			params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "mcp-spec", version: "0" } }
		}) + "\n");
	});
}

describe("MCP command", () => {
	it("starts the MCP server, which answers initialize over stdio and exits when stdin closes", async () => {
		const run = await initializeMcpServer([]);

		expect(run.response?.result?.serverInfo?.name).toBe("igniteui-mcp-server");
		expect(run.nonProtocolLines).toEqual([]);
		expect(run.exitCode).toBe(0);
	}, 30000);

	it("passes --remote=<url> to the server", async () => {
		const run = await initializeMcpServer(["--remote=http://127.0.0.1:9"]);

		expect(run.response?.result?.serverInfo?.name).toBe("igniteui-mcp-server");
		expect(run.nonProtocolLines).toEqual([]);
	}, 30000);
});
