import { checkbox, input, select, Separator } from '@inquirer/prompts';
import { Context } from '@inquirer/type';

// ref - node_modules\@inquirer\input\dist\cjs\types\index.d.ts - bc for some reason this is not publicly exported
type InputConfig = {
    message: string;
    default?: string;
    required?: boolean;
	type?: string;
	name?: string;
	choices?: (string | Separator)[];
    transformer?: (value: string, { isFinal }: {
        isFinal: boolean;
    }) => string;

	// TODO: consider typing these by extracting the types from the inquirer package
    validate?: any;
    theme?: unknown;
};

export class InquirerWrapper {
	private constructor() { }

	public static async input(message: InputConfig, context?: Context): Promise<string> {
		return input(message, context);
	}

	public static async select(message: InputConfig & { choices: (string | Separator)[] }, context?: Context): Promise<string> {
		return select(message, context);
	}

	public static async checkbox(message: InputConfig & { choices: (string | Separator)[] }, context?: Context): Promise<string[]> {
		return checkbox(message, context);
	}
}
