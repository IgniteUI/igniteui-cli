import { Util } from "../../lib/Util";

describe("Unit - Util", () => {
	it("className should replace dashes and empty spaces", async done => {
		const projectNames = [
			{
				name: "name with spaces",
				valid: "NameWithSpaces"
			},
			{
				name: "name-with-dashes",
				valid: "NameWithDashes"
			},
			{
				name: "miXed CaSe",
				valid: "MiXedCaSe"
			}
		];

		for (const item of projectNames) {
			expect(Util.className(item.name)).toEqual(item.valid);
		}

		done();
	});
});
