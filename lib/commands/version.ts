import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "version",
	alias: "v",
	desc: "Displays currently installed version of the Ignite UI CLI and OS type info",
	builder: {},
	async execute(argv) {
		Util.version();
	}
};
export default command;
