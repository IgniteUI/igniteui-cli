import { Util } from "../Util";

const command = {
	// tslint:disable:object-literal-sort-keys
	command: "ver",
	alias: "v",
	desc: "Currently installed version",
	builder: {},
	async execute(argv) {
		Util.version();
	}
};
export default command;
