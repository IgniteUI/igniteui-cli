import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "test",
	desc: "tests the project",
	builder: {},
	async execute(argv) {
		Util.postToGoogleAnalytic({
			t: "screenview",
			cd: "test",
		});

		Util.log("test!");
	}
};
export default command;
