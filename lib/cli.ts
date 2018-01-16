import chalk from "chalk";
import * as inquirer from "inquirer";
import * as yargs from "yargs";
import { default as add } from "./commands/add";
import { default as build } from "./commands/build";
import { default as newCommand } from "./commands/new";
import { default as quickstart } from "./commands/quickstart";
import { default as start } from "./commands/start";
import { default as test } from "./commands/test";
import { PromptSession } from "./PromptSession";
import {TemplateManager} from "./TemplateManager";
import { Util } from "./Util";

process.title = "Ignite UI CLI";

export async function run(args = null) {
	const templateManager = new TemplateManager();
	// initialize all templates
	templateManager.initializeTemplate();

	newCommand.template = templateManager;
	newCommand.builder.framework.choices = templateManager.getFrameworkIds();
	add.templateManager = templateManager;

	const yargsModule = args ? yargs(args) : yargs;

	const argv = yargsModule.command(quickstart)
	.command(start)
	.command(newCommand)
	.command(build)
	.command(test)
	.command(add)
	.options({
		version: {
			alias: "v",
			description: "Show current Ignite UI CLI version",
			global: true,
			type: "boolean"
		}
	})
	.help().alias("help", "h")
	.argv;

	if (argv.version) {
		Util.version();
		return;
	}

	const command = argv._[0];
	switch (command) {
		case "new":
			await newCommand.execute(argv);
			break;
		case "quickstart":
			await quickstart.execute(argv);
			Util.log("quickstart Created");
			break;
		case "add":
			if (add.check(argv)) {
				await add.execute(argv);
			} else {
				yargsModule.showHelp();
				return;
			}
			break;
		case "build":
			await build.execute(argv);
			break;
		case "test":
			await test.execute(argv);
			break;
		case "start":
			await start.execute(argv);
			break;
		default:
			Util.log("No command recognized, starting guide.");
			Util.log(chalk.green("Use --help after stopping this execution for a list of available commands."));
			const prompts = new PromptSession(templateManager);
			prompts.start();
			break;
	}
}
