import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as opn from "opn";
import { PromptSession } from "../PromptSession.js";

let doc: {
	[term: string]: any,
	execute: (argv: any) => Promise<void>
};
doc = {
	// tslint:disable:object-literal-sort-keys
	command: "doc [term]",
	desc: "opens the Infragistics search for the given term",
	builder: {
		term: {
			describe: "The term you would like to search for",
			type: "string"
		}
	},
	template: null,
	open(target) {
		opn(target);
	},
	async execute(argv) {

		GoogleAnalytics.post({
			t: "screenview",
			cd: "Doc"
		});

		if (!argv.term) {
			const answer = await PromptSession.chooseTerm();
			argv.term = answer;
			await this.execute(argv);
		} else if (!Util.isAlphanumericExt(argv.term)) {
			return Util.error(`The search term '${argv.term}' is not valid.` + "\n" +
			"Name should start with a letter and can also contain numbers, dashes and spaces.",
			"red");
		} else {
			Util.log(`Review your search results in the browser`, "green");

			GoogleAnalytics.post({
				t: "event",
				ec: "$ig doc",
				ea: `term to search: ${argv.term}`,
				cd13: argv.term
			});

			doc.open(`https://www.infragistics.com/search?q=${argv.term.trim()}`);
		}
	}
};

export default doc;
