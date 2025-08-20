import analyze from "../../packages/cli/lib/commands/analyze";

describe("Unit - Analyze command", () => {
	it("should have correct command structure", () => {
		expect(analyze.command).toBe("analyze");
		expect(analyze.aliases).toEqual(["a"]);
		expect(analyze.describe).toBe("analyze codebase for dead code and orphaned files");
	});

	it("should have builder and handler", () => {
		expect(analyze.builder).toBeDefined();
		expect(typeof analyze.handler).toBe("function");
	});
});