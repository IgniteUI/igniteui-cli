import { Tree } from "@angular-devkit/schematics";

export function addTypography(host: Tree) {
	const indexHtml = "src/index.html";
	const bodyTagRegex = /<body[^>]*?>/;
	const classRegex = /class=["']([^"']*?)["']/;

	if (host.exists(indexHtml)) {
		let content = host.read(indexHtml).toString();
		if (!bodyTagRegex.test(content)) {
			return;
		}
		const bodyTag = bodyTagRegex.exec(content).pop();

		if (!classRegex.test(bodyTag)) {
			content = content.replace(
				bodyTag,
				bodyTag.replace(/>$/, ` class="igx-typography">`)
			);
		} else {
			const classes = classRegex.exec(bodyTag).pop();
			const classList = classes ? classes.split(" ") : [];
			if (classList.indexOf("igx-typography") !== -1) {
				return;
			}
			classList.push("igx-typography");
			content = content.replace(
				bodyTag,
				bodyTag.replace(classRegex, `class="${classList.join(" ")}"`)
			);
		}
		host.overwrite(indexHtml, content);
	}
}
