import { App, GoogleAnalytics, TEMPLATE_MANAGER, Util } from "@igniteui/cli-core";
import yargs from "yargs";
import {
	add,
	aiConfig,
	build,
	CommandType,
	config,
	doc,
	generate,
	list,
	mcp,
	newCommand,
	start,
	test,
	upgrade,
} from './commands';
import { PromptSession } from "./PromptSession";
import { TemplateManager } from "./TemplateManager";

process.title = "Ignite UI CLI";

function logHelp() {
	GoogleAnalytics.post({
		t: "screenview",
		cd: "$ig help"
	});
}

export async function run(args = null) {
	App.initialize();

	const templateManager = new TemplateManager();
	App.container.set(TEMPLATE_MANAGER, templateManager);

	newCommand.addChoices(templateManager.getFrameworkIds());

	const registeredCommands: CommandType[] = [
		newCommand, add, build, start, generate, config, doc, test, list, upgrade, mcp, aiConfig
	];

	const yargsModule = args ? yargs(args) : yargs;
	let chain = yargsModule
		.scriptName("ig")
		.usage("Usage: $0 [command] [options]\n\nRun without a command to start the interactive step-by-step project setup.")
		.example("$0", "Launch the interactive step-by-step project setup")
		.example("$0 new my-app --framework angular", "Scaffold a new Ignite UI for Angular project")
		.example("$0 add grid main-grid", "Add a Grid component to the current project")
		.example("$0 list", "Show all frameworks and their project templates");

	for (const cmd of registeredCommands) {
		chain = chain.command(cmd);
	}

	await chain
		.command({
			command: "$0",
			describe: false,
			handler: async (argv) => {
				if (argv.version) return; // version handled in the parseAsync callback
				const unknown = argv._[0];
				if (unknown) {
					process.exitCode = 1;
					Util.error(`Unknown command: "${unknown}"`, "red");
					Util.log(await yargsModule.getHelp());
				} else {
					Util.log("Starting Step by step mode.", "green");
					Util.log("For available commands, stop this execution and use --help.", "green");
					const prompts = new PromptSession();
					prompts.start();
				}
			}
		})
		.version(false) // disable built-in `yargs.version` to override it with our custom option
		.options({
			version: {
				alias: "v",
				description: "Show current Ignite UI CLI version",
				global: true,
				type: "boolean"
			}
		})
		.options({ // testMode option to allow the addition of all templates at once
			testMode: {
				default: false,
				type: "boolean",
				hidden: true
			}
		})
		.fail((msg, err, yargs) => {
			const message = err?.message ?? msg;
			if (message) {
				Util.error(message, "red");
				yargs.showHelp();
				process.exitCode = 1;
			}
		})
		.wrap(yargs.terminalWidth())
		.help().alias("help", "h")
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

				if (argv.h || argv.help) {
					logHelp();
				}

				// since we are providing a custom callback to `yargsModule.parseAsync`, we need to handle the output as well
				// ref - https://yargs.js.org/docs/#api-reference-parseargs-context-parsecallback
				if (output) {
					Util.log(output);
				}

				if (argv.version) {
					Util.showVersion(__dirname + "/../ignite-ui-cli.txt");
					return;
				}

				// internal testing only
				/* istanbul ignore next */
				App.testMode = !!argv.testMode;
			}
		);
}
