var command = {

	command: 'test',
	desc: 'test the project',
	builder: {},
	execute: async function (argv) {
		console.log("test!");
	}
};
export default command;