import { App, GoogleAnalytics, Util } from "@igniteui/cli-core";
import * as yargs from "yargs";
import { default as add } from "./commands/add";
import { default as build } from "./commands/build";
import { default as config } from "./commands/config";
import { default as doc } from "./commands/doc";
import { default as generate } from "./commands/generate";
import { default as list } from "./commands/list";
import { default as newCommand } from "./commands/new";
import { default as quickstart } from "./commands/quickstart";
import { default as start } from "./commands/start";
import { default as test } from "./commands/test";
import { default as upgrade } from "./commands/upgrade";
import { PromptSession } from "./PromptSession";
import { TemplateManager } from "./TemplateManager";
import { ADD_COMMAND_NAME, ALL_COMMANDS } from "./commands/types";

process.title = "Ignite UI CLI";

function logHelp() {
	GoogleAnalytics.post({
		t: "screenview",
		cd: "$ig help"
	});
}

export async function run(args = null) {
	//	we are subscribing on process.exit to catch when help is executed
	process.on("exit", logHelp);
	App.initialize();

	const templateManager = new TemplateManager();

	newCommand.addChoices(templateManager.getFrameworkIds());
	newCommand.templateManager = templateManager;
	add.templateManager = templateManager;
	build.templateManager = templateManager;
	start.templateManager = templateManager;
	generate.templateManager = templateManager;
	list.templateManager = templateManager;
	upgrade.templateManager = templateManager;

// TODO: export all commands in an index.ts
// TODO: docs for the new types

	const yargsModule = args ? yargs(args) : yargs;
	await yargsModule
		.command(quickstart)
		.command(newCommand)
		.command(add)
		.command(build)
		.command(start)
		.command(generate)
		.command(config)
		.command(doc)
		.command(test)
	// .command(list)
	// .command(upgrade)
		.version(false) // disable built-in yargs.version to override it with our custom option
		.options({
			version: {
				alias: "v",
				description: "Show current Ignite UI CLI version",
				global: true,
				type: "boolean"
			}
		})
		.options({
			testMode: {
				default: false,
				type: "boolean",
				hidden: true
			}
		})
		.help().alias("help", "h")
		.middleware((argv) => {
				const command = argv._[0];
				if (command === ADD_COMMAND_NAME && !add.check(argv)) {
					argv.skipExecution = true;
					yargsModule.showHelp();
				}
			},
			false	// setting this to `true` is supposed to exec the middleware after parsing and before arg validation
					// but in reality it also does not trigger the command's handler (╯°□°）╯︵ ┻━┻
		)
		.parseAsync(
			args, // the args to parse to argv
			{}, // docs say context to pass in to handlers, but nuh-uh, it's just garbage
			async (err, argv, output) => {
				// `argv._` are the positional arguments passed in to the script
				const command = argv._[0];

				if (err) {
					Util.error(`The ${command} command threw error - ${err.name}`, "red");
					Util.error(`Message: ${err.message}`, "red");
					if (err.stack) {
						Util.error(`Stack: ${err.stack}`, "red");
					}
					process.exit(1);
				}

				if (output) {
					Util.log(output);
				}

				// unsubscribing from process.exit. If `help` was executed we should not reach here
				process.removeListener("exit", logHelp);

				if (argv.version) {
					Util.showVersion(__dirname + "/../ignite-ui-cli.txt");
					return;
				}

				// internal testing only
				/* istanbul ignore next */
				App.testMode = !!argv.testMode;

				if (!ALL_COMMANDS.has(command.toString())) {
					Util.log("Starting Step by step mode.", "green");
					Util.log("For available commands, stop this execution and use --help.", "green");
					const prompts = new PromptSession(templateManager);
					prompts.start();
					return;
				}

				switch (command) {
					case "quickstart":
						Util.log("quickstart Created");
						break;
					case "l":
					case "list":
						list.execute(argv);
						break;
					case "upgrade-packages":
						await upgrade.execute(argv);
						break;
				}
			}
		);
}
