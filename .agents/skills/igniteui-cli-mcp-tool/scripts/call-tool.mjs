#!/usr/bin/env node
// Calls one tool on the built MCP server over stdio, as an MCP client would.
//   node call-tool.mjs --list                       → every tool's name, description and input schema (JSON)
//   node call-tool.mjs <tool> '<json arguments>'    → the tool's text content as the client receives it, after an "[isError]" line when set
// Exits 0 on success, 1 on isError or a server failure, 2 on bad usage or arguments.
// Runs from any folder; build the server first. The server starts in local mode (bundled database).
import { spawn } from "child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), "../../../../packages/igniteui-mcp/igniteui-doc-mcp");

const [tool, rawArgs = "{}"] = process.argv.slice(2);
if (!tool) {
  console.error("Usage: call-tool.mjs --list | <tool> '<json arguments>'");
  process.exit(2);
}

let toolArgs;
if (tool !== "--list") {
  try {
    toolArgs = JSON.parse(rawArgs);
  } catch (err) {
    console.error(`Arguments are not valid JSON: ${err.message}`);
    process.exit(2);
  }
}

// cwd is the package, so the server reads that package's .env as it does under `npm start`.
const server = spawn(process.execPath, ["dist/index.js"], { cwd: packageDir, stdio: ["pipe", "pipe", "inherit"] });
const send = (msg) => server.stdin.write(JSON.stringify({ jsonrpc: "2.0", ...msg }) + "\n");

// Exit through exitCode, not process.exit(): on POSIX, stdout to a pipe is async and a large result would be cut off.
let finished = false;
const stop = (code) => {
  finished = true;
  clearTimeout(timer);
  server.kill();
  process.exitCode = code;
};

// A server that dies on startup (missing database, bad import) never answers; its stderr above says why.
server.on("exit", (code, signal) => {
  if (finished) return;
  console.error(`Server exited before answering (code ${code}${signal ? `, signal ${signal}` : ""}).`);
  stop(1);
});

let buffer = "";
const pending = new Map();
server.stdout.on("data", (chunk) => {
  buffer += chunk;
  let nl;
  while ((nl = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, nl).trim();
    buffer = buffer.slice(nl + 1);
    if (!line) continue;
    const msg = JSON.parse(line);
    pending.get(msg.id)?.(msg);
  }
});

let nextId = 1;
const request = (method, params) =>
  new Promise((done) => {
    const id = nextId++;
    pending.set(id, done);
    send({ id, method, params });
  });

const timer = setTimeout(() => {
  console.error("Timed out after 60s waiting for the server.");
  stop(1);
}, 60_000);

const init = await request("initialize", {
  protocolVersion: "2025-06-18",
  capabilities: {},
  clientInfo: { name: "call-tool", version: "1.0.0" },
});
if (init.error) {
  console.error(`initialize failed: ${JSON.stringify(init.error)}`);
  stop(1);
} else {
  send({ method: "notifications/initialized" });

  const response = tool === "--list"
    ? await request("tools/list", {})
    : await request("tools/call", { name: tool, arguments: toolArgs });

  if (response.error) {
    console.error(JSON.stringify(response.error, null, 2));
    stop(1);
  } else if (tool === "--list") {
    console.log(JSON.stringify(response.result, null, 2));
    stop(0);
  } else {
    const { content = [], isError } = response.result;
    if (isError) console.log("[isError]");
    for (const item of content) console.log(item.type === "text" ? item.text : JSON.stringify(item, null, 2));
    stop(isError ? 1 : 0);
  }
}
