import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "test",
	desc: "tests the project",
	builder: {},
	async execute(argv) {
		Util.exec("npm test");
	}
};
export default command;
