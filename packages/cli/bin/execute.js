#!/usr/bin/env node
var fs = require("fs");
var inquirer = require('inquirer');
var projectConfiguration = {};
var resolve = require('resolve');
var path = require('path');

//execute -g igniteui-cli in case there is no project installed, else resolve to the local one
resolve('igniteui-cli', { basedir: process.cwd() }, function (err, res) {
	var cli;
    if (err) {
		var cli = require("../lib/cli");
	}
    else {		
		var localVersion = require(path.join(process.cwd(), 'node_modules/igniteui-cli/package.json'))['version'];
		var globalVersion = require(path.join(__dirname, '../package.json'))['version'];
		if (globalVersion !== localVersion) {
			console.log("Different igniteui-cli global and local version")
		}
		cli = require(res);
	}
	cli.run();
});
