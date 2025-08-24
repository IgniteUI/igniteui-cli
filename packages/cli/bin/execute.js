#!/usr/bin/env node
const fs = require("fs");
const resolve = require("resolve");
const path = require("path");
const { hideBin } = require("yargs/helpers");

const args = hideBin(process.argv);

//execute -g igniteui-cli in case there is no project installed, else resolve to the local one
resolve("igniteui-cli", { basedir: process.cwd() }, function (err, res) {
	let cli;
	if (res && res.indexOf(process.cwd()) > -1) {
		const localVersion = require(path.join(process.cwd(), "node_modules/igniteui-cli/package.json"))["version"];
		const globalVersion = require(path.join(__dirname, "../package.json"))["version"];
		if (globalVersion !== localVersion) {
			console.log("Different igniteui-cli global and local version");
		}
		cli = require(res);
	} else {
		cli = require("../lib/cli");
	}
	cli.run(args);
});
