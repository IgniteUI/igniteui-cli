import { checkbox, confirm, input, select, Separator } from '@inquirer/prompts';
import type { Context } from '@inquirer/type';
import type { PartialDeep } from '@inquirer/type';
import type { Theme } from '@inquirer/core';
import { exclusiveCheckbox, type ExclusiveCheckboxChoice } from "./ExclusiveCheckbox";

// ref - node_modules\@inquirer\input\dist\cjs\types\index.d.ts - bc for some reason this is not publicly exported
type InputConfig = {
	message: string;
	default?: string;
	required?: boolean;
	type?: string;
	name?: string;
	transformer?: (value: string, { isFinal }: {
		isFinal: boolean;
	}) => string;

	// TODO: consider typing these by extracting the types from the inquirer package
	validate?: any;
	theme?: any;
};

type InputChoicesConfig = Omit<InputConfig, "transformer"> & {
	choices: (string | Separator)[] | ({ value: string; name?: string; checked?: boolean } | Separator)[];
	pageSize?: number;
};

type ExclusiveCheckboxConfig = {
	message: string;
	choices: ReadonlyArray<string | ExclusiveCheckboxChoice<string> | Separator>;
	required?: boolean;
	exclusiveValues?: readonly string[];
	pageSize?: number;
	loop?: boolean;
	theme?: PartialDeep<Theme>;
};

export class InquirerWrapper {
	private constructor() { }

	public static async input(message: InputConfig, context?: Context): Promise<string> {
		return input(message, context);
	}

	public static async select(message: InputChoicesConfig, context?: Context): Promise<string> {
		return select(message, context);
	}

	public static async checkbox(message: InputChoicesConfig, context?: Context): Promise<string[]> {
		return checkbox(message, context);
	}

	public static async exclusiveCheckbox(message: ExclusiveCheckboxConfig, context?: Context): Promise<string[]> {
		return exclusiveCheckbox(message, context);
	}

	public static async confirm(message: { message: string; default?: boolean }, context?: Context): Promise<boolean> {
		return confirm(message, context);
	}
}
