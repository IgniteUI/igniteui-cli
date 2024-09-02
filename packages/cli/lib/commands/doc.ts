import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { PromptSession } from "../PromptSession";
import { DocCommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";

const doc: DocCommandType = {
	command: "doc [term]",
	describe: "opens the Infragistics search for the given term",
	builder: {
		term: {
			describe: "The term you would like to search for",
			type: "string"
		}
	},
	open: async (target) => {
		const open = await import("open");
		open.default.call(target);
	},
	async handler(argv: ArgumentsCamelCase<PositionalArgs>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Doc"
		});

		if (!argv.term) {
			const answer = await PromptSession.chooseTerm();
			argv.term = answer;
			await this.handler(argv);
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

			await doc.open(`https://www.infragistics.com/search?q=${argv.term.trim()}`);
		}
	}
};

export default doc;
