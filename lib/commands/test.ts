import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "test",
	desc: "test the project",
	builder: {},
	async execute(argv) {
		Util.log("test!");
	}
};
export default command;
