const STYLES = {
	bold: ["\u001b[1m", "\u001b[22m"],
	dim: ["\u001b[2m", "\u001b[22m"],
	cyan: ["\u001b[36m", "\u001b[39m"],
	yellow: ["\u001b[33m", "\u001b[39m"],
	green: ["\u001b[32m", "\u001b[39m"],
	red: ["\u001b[31m", "\u001b[39m"]
};

export type Style = keyof typeof STYLES;

export function useColor(): boolean {
	return !!process.stdout.isTTY && !process.env.NO_COLOR;
}

export function paint(text: string, style: Style, color: boolean): string {
	return color ? STYLES[style][0] + text + STYLES[style][1] : text;
}
