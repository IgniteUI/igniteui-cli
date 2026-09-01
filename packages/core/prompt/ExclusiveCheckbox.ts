import {
	createPrompt,
	isDownKey,
	isEnterKey,
	isNumberKey,
	isSpaceKey,
	isUpKey,
	makeTheme,
	useKeypress,
	usePrefix,
	useState,
	type Status,
} from "@inquirer/core";
import { Separator } from "@inquirer/prompts";
import { styleText } from "node:util";
import type { PartialDeep } from "@inquirer/type";
import type { Theme } from "@inquirer/core";

export type ExclusiveCheckboxChoice<Value> = {
	value: Value;
	name?: string;
	checked?: boolean;
	disabled?: boolean | string;
};

type NormalizedChoice<Value> = {
	value: Value;
	name: string;
	checked: boolean;
	disabled: boolean | string;
};

type ExclusiveCheckboxConfig<Value = string> = {
	message: string;
	choices: ReadonlyArray<Value | ExclusiveCheckboxChoice<Value> | Separator>;
	required?: boolean;
	exclusiveValues?: readonly Value[];
	pageSize?: number;
	loop?: boolean;
	theme?: PartialDeep<Theme>;
};

function normalizeChoice<Value>(choice: Value | ExclusiveCheckboxChoice<Value> | Separator): NormalizedChoice<Value> | Separator {
	if (Separator.isSeparator(choice)) {
		return choice;
	}

	if (typeof choice === "object" && choice !== null && "value" in choice) {
		const objectChoice = choice as ExclusiveCheckboxChoice<Value>;
		const name = objectChoice.name ?? String(objectChoice.value);
		return {
			value: objectChoice.value,
			name,
			checked: !!objectChoice.checked,
			disabled: objectChoice.disabled ?? false
		};
	}

	const name = String(choice);
	return {
		value: choice as Value,
		name,
		checked: false,
		disabled: false
	};
}

function isSelectable<Value>(choice: NormalizedChoice<Value> | Separator): choice is NormalizedChoice<Value> {
	return !Separator.isSeparator(choice) && !choice.disabled;
}

function isChecked<Value>(choice: NormalizedChoice<Value> | Separator): choice is NormalizedChoice<Value> {
	return !Separator.isSeparator(choice) && choice.checked;
}

function toggleExclusiveChoice<Value>(
	items: Array<NormalizedChoice<Value> | Separator>,
	index: number,
	exclusiveValues: readonly Value[],
): Array<NormalizedChoice<Value> | Separator> {
	const choice = items[index];
	if (!isSelectable(choice)) {
		return items;
	}

	const toggledOn = !choice.checked;
	const isExclusive = exclusiveValues.some(value => Object.is(value, choice.value));

	return items.map((item, itemIndex) => {
		if (Separator.isSeparator(item)) {
			return item;
		}

		if (itemIndex === index) {
			return { ...item, checked: toggledOn };
		}

		if (toggledOn && isExclusive) {
			return item.disabled ? item : { ...item, checked: false };
		}

		if (toggledOn && exclusiveValues.some(value => Object.is(value, item.value))) {
			return item.disabled ? item : { ...item, checked: false };
		}

		return item;
	});
}

function moveActiveIndex<Value>(
	items: Array<NormalizedChoice<Value> | Separator>,
	active: number,
	direction: 1 | -1,
	loop: boolean,
): number {
	let next = active;
	for (let i = 0; i < items.length; i++) {
		next += direction;
		if (next < 0) {
			next = loop ? items.length - 1 : 0;
		}
		if (next >= items.length) {
			next = loop ? 0 : items.length - 1;
		}
		if (isSelectable(items[next])) {
			return next;
		}
	}
	return active;
}

export function applyExclusiveToggle<Value>(
	items: Array<NormalizedChoice<Value> | Separator>,
	index: number,
	exclusiveValues: readonly Value[],
): Array<NormalizedChoice<Value> | Separator> {
	return toggleExclusiveChoice(items, index, exclusiveValues);
}

export const exclusiveCheckboxTesting = {
	normalizeChoice,
	moveActiveIndex,
	isSelectable,
	isChecked,
};

export const exclusiveCheckbox = createPrompt<string[], ExclusiveCheckboxConfig<string>>((config, done) => {
	const theme = makeTheme(config.theme);
	const [status, setStatus] = useState<Status>("idle");
	const [error, setError] = useState<string>();
	const [items, setItems] = useState<Array<NormalizedChoice<string> | Separator>>(
		config.choices.map(normalizeChoice),
	);
	const firstSelectable = items.findIndex(isSelectable);
	const [active, setActive] = useState(firstSelectable >= 0 ? firstSelectable : 0);
	const prefix = usePrefix({ status, theme });
	const exclusiveValues = config.exclusiveValues ?? [];

	useKeypress((key) => {
		if (isUpKey(key)) {
			setActive(moveActiveIndex(items, active, -1, config.loop ?? true));
			return;
		}

		if (isDownKey(key)) {
			setActive(moveActiveIndex(items, active, 1, config.loop ?? true));
			return;
		}

		if (isSpaceKey(key)) {
			setItems(toggleExclusiveChoice(items, active, exclusiveValues));
			setError(undefined);
			return;
		}

		if (isNumberKey(key)) {
			const selectedIndex = Number(key.name) - 1;
			let selectableIndex = -1;
			const position = items.findIndex((item) => {
				if (Separator.isSeparator(item)) {
					return false;
				}
				if (item.disabled) {
					return false;
				}
				selectableIndex++;
				return selectableIndex === selectedIndex;
			});
			if (position >= 0) {
				setActive(position);
				setItems(toggleExclusiveChoice(items, position, exclusiveValues));
				setError(undefined);
			}
			return;
		}

		if (isEnterKey(key)) {
			const selected = items.filter(isChecked);
			if (config.required && selected.length === 0) {
				setError("Select at least one option.");
				return;
			}
			setStatus("done");
			done(selected.map(choice => choice.value));
		}
	});

	const renderItem = (item: NormalizedChoice<string> | Separator, index: number, isActive: boolean) => {
		if (Separator.isSeparator(item)) {
			return `  ${item.separator}`;
		}

		const cursor = isActive ? ">" : " ";
		const checkbox = item.checked ? "[x]" : "[ ]";
		const label = item.checked ? (item.name) : item.name;
		const line = `${cursor} ${checkbox} ${label}`;
		return isActive ? theme.style.highlight(line) : line;
	};

	if (status === "done") {
		const answer = items.filter(isChecked).map(choice => choice.name).join(", ");
		return `${prefix} ${config.message}\n${styleText("cyan", answer)}`;
	}

	const renderedItems = items
		.map((item, index) => renderItem(item, index, index === active))
		.join("\n");

	const helpLine = styleText("dim", "Use ↑↓ to navigate, space to toggle, enter to submit");
	const lines = [
		`${prefix} ${config.message}`,
		renderedItems,
		error ? styleText("red", error) : undefined,
		helpLine
	].filter(Boolean);

	return lines.join("\n");
});