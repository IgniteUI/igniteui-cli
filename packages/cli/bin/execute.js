#!/usr/bin/env node
import { default as path } from 'path';
import { default as resolve } from 'resolve';

// const resolve = require('resolve');
// const path = require('path');

//execute -g igniteui-cli in case there is no project installed, else resolve to the local one
resolve('igniteui-cli', { basedir: process.cwd() }, async function (err, res) {
	var cli;
	if (res && res.indexOf(process.cwd()) > -1) {
		var localVersion = require(path.join(process.cwd(), 'node_modules/igniteui-cli/package.json'))['version'];
		var globalVersion = require(path.join(__dirname, '../package.json'))['version'];
		if (globalVersion !== localVersion) {
			console.log("Different igniteui-cli global and local version");
		}
		// cli = require(res);
		cli = await import(res + ".js");
	} else {
		// cli = require('../lib/cli');
		cli = await import("../lib/cli.js");
	}
	cli.run();
});
