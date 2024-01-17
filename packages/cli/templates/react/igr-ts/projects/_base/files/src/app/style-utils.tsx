export default function combine (styles: any, classes: string) {
	let combinedClasses = '';
	const keys = classes.split(' ');

	for (let i = 0; i < keys.length; i++) {
		const arg = styles[keys[i]];
		if (arg) {
			combinedClasses += ' ' + arg;
		} else {
			combinedClasses += ' ' + keys[i];
		}
	}

	return combinedClasses;
}