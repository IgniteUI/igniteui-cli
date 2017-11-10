#!/usr/bin/env node
var fs = require("fs");
var inquirer = require('inquirer');
var projectConfiguration = {};
var resolve = require('resolve');
var path = require('path');

//execute -g ignite-ui-cli in case there is no project installed, else resolve to the local one
resolve('ignite-ui-cli', { basedir: process.cwd() }, function (err, res) {
	var cli;
    if (err) {
		var cli = require("../lib/cli");
	}
    else {		
		var localVersion = require(path.join(process.cwd(), 'node_modules/ignite-ui-cli/package.json'))['version'];
		var globalVersion = require(path.join(__dirname, '../package.json'))['version'];
		if (globalVersion !== localVersion) {
			console.log("Different ignite-ui-cli global and local version")
		}
		cli = require(res);
	}
	cli.run();
});
