import { spawn } from "child_process";
import * as http from "http";
import { AddressInfo } from "net";

const execLocation = "packages/cli/bin/execute.js";
// shorter than the specs' Jasmine timeout, so a hung server is killed instead of outliving the spec
const MCP_RUN_DEADLINE_MS = 20000;
const SPEC_TIMEOUT_MS = 30000;

interface McpRequest {
	method: string;
	params?: unknown;
}

interface McpRun {
	/** Responses by request id: 1 is `initialize`, then one per request passed in, in order. */
	responses: Map<number, any>;
	nonProtocolLines: string[];
	exitCode: number | null;
}

/**
 * Starts `ig mcp`, sends `initialize`, then each request in turn after the previous one is answered,
 * and closes stdin once the last is answered.
 * Kills the server and rejects if it has not exited within {@link MCP_RUN_DEADLINE_MS}.
 */
function runMcpSession(args: string[], requests: McpRequest[] = []): Promise<McpRun> {
	return new Promise((resolve, reject) => {
		const child = spawn(process.execPath, [execLocation, "mcp", ...args], { stdio: ["pipe", "pipe", "pipe"] });
		const queue: McpRequest[] = [
			{
				method: "initialize",
				params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "mcp-spec", version: "0" } }
			},
			...requests
		];
		const responses = new Map<number, any>();
		const nonProtocolLines: string[] = [];
		let buffer = "";

		const send = (message: object) => child.stdin.write(JSON.stringify({ jsonrpc: "2.0", ...message }) + "\n");
		const sendNext = () => {
			const id = responses.size + 1;
			if (id > queue.length) {
				child.stdin.end();
				return;
			}
			if (id === 2) {
				send({ method: "notifications/initialized" });
			}
			send({ id, ...queue[id - 1] });
		};

		const deadline = setTimeout(() => {
			child.kill();
			reject(new Error(responses.size === queue.length
				? `MCP server did not exit within ${MCP_RUN_DEADLINE_MS} ms after stdin closed`
				: `MCP server did not answer ${queue[responses.size].method} within ${MCP_RUN_DEADLINE_MS} ms`));
		}, MCP_RUN_DEADLINE_MS);

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
				if (message.id === responses.size + 1) {
					responses.set(message.id, message);
					sendNext();
				}
			}
		});
		child.on("error", err => {
			clearTimeout(deadline);
			reject(err);
		});
		child.on("exit", exitCode => {
			clearTimeout(deadline);
			resolve({ responses, nonProtocolLines, exitCode });
		});

		sendNext();
	});
}

describe("MCP command", () => {
	it("starts the MCP server, which answers initialize over stdio and exits when stdin closes", async () => {
		const run = await runMcpSession([]);

		expect(run.responses.get(1)?.result?.serverInfo?.name).toBe("igniteui-mcp-server");
		expect(run.nonProtocolLines).toEqual([]);
		expect(run.exitCode).toBe(0);
	}, SPEC_TIMEOUT_MS);

	describe("with a remote docs backend", () => {
		const fixtureIndex = "remote fixture index";
		let backend: http.Server;
		let backendUrl: string;
		let backendRequests: string[];

		beforeEach(async () => {
			backendRequests = [];
			backend = http.createServer((req, res) => {
				backendRequests.push(req.url ?? "");
				res.writeHead(200, { "Content-Type": "text/plain" });
				res.end(fixtureIndex);
			});
			await new Promise<void>(resolve => backend.listen(0, "127.0.0.1", resolve));
			backendUrl = `http://127.0.0.1:${(backend.address() as AddressInfo).port}`;
		});

		afterEach(async () => {
			await new Promise(resolve => backend.close(resolve));
		});

		for (const remoteArgs of [(url: string) => [`--remote=${url}`], (url: string) => ["--remote", url]]) {
			it(`sends docs requests to the backend given with ${remoteArgs("<url>").join(" ")}`, async () => {
				const run = await runMcpSession(remoteArgs(backendUrl), [
					{ method: "tools/call", params: { name: "list_components", arguments: { framework: "angular", filter: "grid" } } }
				]);

				expect(backendRequests).toEqual(["/api/docs?framework=angular&filter=grid"]);
				expect(run.responses.get(2)?.result?.content?.[0]?.text).toContain(fixtureIndex);
				expect(run.nonProtocolLines).toEqual([]);
				expect(run.exitCode).toBe(0);
			}, SPEC_TIMEOUT_MS);
		}
	});
});
