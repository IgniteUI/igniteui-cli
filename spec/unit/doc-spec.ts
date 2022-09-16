import { GoogleAnalytics, Util } from "@igniteui/cli-core";
import { default as doc } from "../../packages/cli/lib/commands/doc";
import { PromptSession } from "../../packages/cli/lib/PromptSession";

describe("Unit - Doc command", () => {
	beforeAll(() => {
		spyOn(GoogleAnalytics, "post");
	});

	it("Should search Infragistics API for passed term", async () => {
		spyOn(doc, "execute").and.callThrough();
		spyOn(doc, "open");
		spyOn(Util, "log");
		await doc.execute({
			term: "igGrid"
		});
		expect(doc.execute).toHaveBeenCalled();
		expect(doc.execute).toHaveBeenCalledWith({ term: "igGrid"});
		expect(doc.execute).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
		expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
	});
	it("Should propmpt user for input if called without arguments", async () => {
		spyOn(doc, "execute").and.callThrough();
		spyOn(PromptSession, "chooseTerm").and.returnValue(Promise.resolve("igGrid"));
		spyOn(doc, "open");
		spyOn(Util, "log");
		await doc.execute({});
		expect(doc.execute).toHaveBeenCalled();
		expect(doc.execute).toHaveBeenCalledWith({ term: "igGrid"});
		expect(doc.execute).toHaveBeenCalledTimes(2);
		expect(PromptSession.chooseTerm).toHaveBeenCalled();
		expect(PromptSession.chooseTerm).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledTimes(1);
		expect(doc.open).toHaveBeenCalledWith("https://www.infragistics.com/search?q=igGrid");
		expect(Util.log).toHaveBeenCalledWith(`Review your search results in the browser`, "green");
	});
	it("Should raise an error if search term does no match criteria", async () => {
		spyOn(doc, "execute").and.callThrough();
		spyOn(Util, "error");
		await doc.execute({
			term: "Th1s i$ incorrect"
		});
		expect(doc.execute).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalled();
		expect(Util.error).toHaveBeenCalledWith("The search term 'Th1s i$ incorrect' is not valid." + "\n" +
"Name should start with a letter and can also contain numbers, dashes and spaces.", "red");
	});
});
