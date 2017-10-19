import * as yargs from "yargs";
import chalk from "chalk";
import * as inquirer from "inquirer";
import { Util } from "./Util";
import { default as quickstart } from "./commands/quickstart";
import { default as start } from "./commands/start";
import { default as newCommand } from "./commands/new";
import { default as build } from "./commands/build";
import { default as test } from "./commands/test";
import { default as add } from "./commands/add";
import {TemplateManager} from "./TemplateManager";
import { PromptSession } from './PromptSession';

process.title = 'Ignite UI CLI';

export async function run() {
	var templateManager = new TemplateManager();
	//Initialize all templates
	templateManager.initializeTemplate();

	newCommand.template = templateManager;
	newCommand.builder.framework.choices = templateManager.getFrameworkIds();
	add.templateManager = templateManager;

	var argv = yargs.command(quickstart)
	.command(start)
	.command(newCommand)
	.command(build)
	.command(test)
	.command(add)
	.help()
	.argv;

	var command = argv._[0];
	switch (command) {
		case "new":
			await newCommand.execute(argv);
			console.log("Project Created");
			process.exit();
			break;
		case "quickstart":
			await quickstart.execute(argv);
			console.log("quickstart Created");
			break;
		case "add":
			await add.execute(argv);
			process.exit();
			break;
		case "build":
			await build.execute(argv);
			process.exit();
			break;
		case "test":
			await test.execute(argv);
			process.exit();
			break;
		case "start": 
			await start.execute(argv);
			break;
		default:
			console.log("No command recognized, starting guide.");
			console.log(chalk.green("Use --help after stopping this execution for a list of available commands."));
			var prompts = new PromptSession(templateManager);
			prompts.start();
			break;
	}
}