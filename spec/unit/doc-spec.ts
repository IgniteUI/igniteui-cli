import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

describe("Unit - Doc command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("Should search Infragistics API for passed term", async () => {
		spyOn(doc, "handler").and.callThrough();
		spyOn(doc, "open");
		spyOn(Util, "log");
		await doc.handler({ term: "igGrid", _: ["doc"], $0: "doc" });
		expect(doc.handler).toHaveBeenCalled();
		expect(doc.handler).toHaveBeenCalledWith({ term: "igGrid", _: ["doc"], $0: "doc" });
		expect(doc.handler).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
		expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
	});
	it("Should prompt user for input if called without arguments", async () => {
		spyOn(doc, "handler").and.callThrough();
		spyOn(PromptSession, "chooseTerm").and.returnValue(Promise.resolve("igGrid"));
		spyOn(doc, "open");
		spyOn(Util, "log");
		await doc.handler({ _: ["doc"], $0: "doc" });
		expect(doc.handler).toHaveBeenCalled();
		expect(doc.handler).toHaveBeenCalledWith({ term: "igGrid", _: ["doc"], $0: "doc" });
		expect(doc.handler).toHaveBeenCalledTimes(2);
		expect(PromptSession.chooseTerm).toHaveBeenCalled();
		expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
		expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
	});
	it("Should raise an error if search term does no match criteria", async () => {
		spyOn(doc, "handler").and.callThrough();
		spyOn(Util, "error");
		await doc.handler({ term: "Th1s i$ incorrect", _: ["doc"], $0: "doc" });
		expect(doc.handler).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalledWith("The search term 'Th1s i$ incorrect' is not valid." + "\n" +
"Name should start with a letter and can also contain numbers, dashes and spaces.", "red");
	});
});
