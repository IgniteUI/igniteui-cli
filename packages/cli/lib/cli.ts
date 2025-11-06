import { App, GoogleAnalytics, Util } from "@igniteui/cli-core";
import yargs from "yargs";
import {
	add,
	ADD_COMMAND_NAME,
	ALL_COMMANDS,
	build,
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

	newCommand.addChoices(templateManager.getFrameworkIds());
	newCommand.templateManager = templateManager;
	add.templateManager = templateManager;
	build.templateManager = templateManager;
	start.templateManager = templateManager;
	generate.templateManager = templateManager;
	list.templateManager = templateManager;
	mcp.templateManager = templateManager;
	upgrade.templateManager = templateManager;

	const yargsModule = args ? yargs(args) : yargs;
	await yargsModule
		.scriptName("") // prevent the addition of the name of the executing script in the usage output
		.usage("") // do not show any usage instructions before the commands list
		.command(newCommand)
		.command(add)
		.command(build)
		.command(start)
		.command(generate)
		.command(config)
		.command(doc)
		.command(test)
		.command(list)
		.command(mcp)
		.command(upgrade)
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
		.middleware((argv) => {
				// invoked after parsing and before the `yargsModule.parseAsync` callback
				const command = argv._[0];
				if (command === ADD_COMMAND_NAME && !add.check(argv)) {
					argv.skipExecution = true;
					yargsModule.showHelp();
				}
			},
			false	// setting this to `true` is supposed to exec the middleware after parsing and before arg validation
					// but in reality it also does not trigger the command's handler (╯°□°）╯︵ ┻━┻
		)
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

				const helpRequest = argv.h || argv.help;
				if (helpRequest) {
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

				if (!helpRequest && !ALL_COMMANDS.has(command?.toString())) {
					Util.log("Starting Step by step mode.", "green");
					Util.log("For available commands, stop this execution and use --help.", "green");
					const prompts = new PromptSession(templateManager);
					prompts.start();
				}
			}
		);
}
