// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { ConfigOptions } from "karma";
import webpackTestConfig from "./webpack-test.config";
const igConfig = require("./ignite-ui-cli.json");

export default (config) => {
	config.set({
		basePath: "",
		frameworks: ["jasmine"],
		files: [
			"http://code.jquery.com/jquery-1.12.3.js",
			"http://code.jquery.com/ui/1.11.4/jquery-ui.min.js",
			`${igConfig.project.igniteuiSource}/css/themes/infragistics/infragistics.theme.css`,
			`${igConfig.project.igniteuiSource}/css/structure/infragistics.css`,
			...igConfig.project.sourceFiles.map(x => `${igConfig.project.igniteuiSource}/js/${x}`),

			"karma-test-entry.ts"
		],

		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		preprocessors: {
			"karma-test-entry.ts": ["webpack", "sourcemap"]
		},
		webpack: webpackTestConfig,
		webpackMiddleware: {
			noInfo: true,
			stats: {
				chunks: false
			}
		},

		mime: {
			"text/x-typescript": ["ts"]
		},

		failOnEmptyTestSuite: false,
		coverageIstanbulReporter: {
			reports: ["html", "lcovonly"],
			fixWebpackSourcePaths: true
		},
		reporters: ["progress", "kjhtml", "coverage-istanbul"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_WARN,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false,

		browserConsoleLogOptions: {
			terminal: true,
			level: "log"
		}
	} as ConfigOptions);
};
