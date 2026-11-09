#!/usr/bin/env node
const fs = require("fs");
const resolve = require("resolve");
const path = require("path");
const { pathToFileURL } = require("url");
const { hideBin } = require("yargs/helpers");

// the first release with `ig update`
const RUNNER_MIN_VERSION = "16.0.0";

const args = hideBin(process.argv);

//execute -g igniteui-cli in case there is no project installed, else resolve to the local one
resolve("igniteui-cli", { basedir: process.cwd() }, function (err, res) {
	let cliPath = "../lib/cli";
	if (res && res.indexOf(process.cwd()) > -1) {
		const localVersion = require(path.join(process.cwd(), "node_modules/igniteui-cli/package.json"))["version"];
		const globalVersion = require(path.join(__dirname, "../package.json"))["version"];
		if (globalVersion !== localVersion) {
			// stderr, because stdout carries the protocol messages when `ig mcp` runs the MCP server
			console.error("Different igniteui-cli global and local version");
		}
		if (args[0] === "update" ? localRunsUpdate(localVersion, globalVersion) : args[0] !== "ai-config") {
			cliPath = res;
		}
	}
	if (args[0] === "mcp" && startMcpServer(path.dirname(require.resolve(cliPath)))) {
		return;
	}
	const cli = require(cliPath);
	cli.run(args).catch(function (err) {
		console.error("Error: " + (err.message || err));
		process.exit(1);
	});
});

/**
 * Whether `update` runs with the local CLI: a release of at least 16.0.0 that isn't older than the invoked one, unless
 * IG_DISABLE_VERSION_CHECK is 1 or true, or the invoked CLI is a repository build (its TypeScript source is next to it)
 */
function localRunsUpdate(localVersion, globalVersion) {
	if (/^(1|true)$/i.test(process.env.IG_DISABLE_VERSION_CHECK || "") || fs.existsSync(path.join(__dirname, "../lib/cli.ts"))) {
		return false;
	}
	const semver = require("semver");
	return semver.valid(localVersion) && semver.valid(globalVersion) &&
		semver.gte(localVersion, RUNNER_MIN_VERSION) && semver.gte(localVersion, globalVersion);
}

/**
 * Starts the MCP server bundled with the CLI copy in `cliDir` in this process, before the CLI loads, so a session
 * runs one Node process and skips loading the CLI and its templates.
 * @returns false when `ig mcp` should run through the CLI instead (help, other options, server missing or not built)
 */
function startMcpServer(cliDir) {
	const { getMcpServerArgs, resolveMcpServerEntry } = require("../lib/commands/mcp");
	const serverArgs = getMcpServerArgs(args.slice(1));
	const mcpEntry = serverArgs && resolveMcpServerEntry(cliDir);
	if (!mcpEntry) {
		return false;
	}
	// the server reads its options from process.argv when it loads
	process.argv = [process.argv[0], mcpEntry, ...serverArgs];
	import(pathToFileURL(mcpEntry).href).catch(function (err) {
		console.error("Failed to start MCP server: " + (err.message || err));
		process.exit(1);
	});
	return true;
}
