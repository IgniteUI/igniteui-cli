
import { default as testCmd } from "../../lib/commands/test";
import { Util } from "../../lib/Util";

describe("Unit - Test command", () => {
	it("Run tests for the current project", async done => {
		spyOn(Util, "exec");
		await testCmd.execute({});
		expect (Util.exec).toHaveBeenCalledWith("npm test");

		done();
	});
});
