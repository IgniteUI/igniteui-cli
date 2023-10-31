import Jasmine from "jasmine";
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
	random: false,
	spec_dir: "",
	spec_files: [
		"spec/**/*[sS]pec.js",
		"packages/cli/migrations/**/*[sS]pec.js",
		"packages/igx-templates/**/*[sS]pec.js",
		"packages/ng-schematics/src/**/**/*[sS]pec.js"
	]
});

jasmineInst.execute([], null);
