// tslint:disable:no-implicit-dependencies
import Jasmine = require("jasmine");
import { DisplayProcessor, SpecReporter } from "jasmine-spec-reporter";

class CustomProcessor extends DisplayProcessor {
	public displayJasmineStarted(info: jasmine.SuiteInfo, log: string): string {
		return `TypeScript ${log}, specs: ${info.totalSpecsDefined}`;
	}
}

const jasmineInst = new Jasmine({});

jasmineInst.env.clearReporters();
jasmineInst.env.addReporter(new SpecReporter({
	customProcessors: [CustomProcessor]
}));

jasmineInst.loadConfig({
	spec_dir: "",
	spec_files: [
		"spec/**/*[sS]pec.js",
		"migrations/**/*[sS]pec.js"
	]
});

jasmineInst.execute([], null);
