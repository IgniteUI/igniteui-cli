import * as path from "path";
import * as ts from "typescript";

// tslint:disable:no-implicit-dependencies
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

function addTypography(host: Tree) {
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

function addHomeHeaderStyles(host: Tree) {
	const homeCss = "src/app/home/home.component.css";
	if (host.exists(homeCss)) {
		let content = host.read(homeCss).toString();
		content +=
`
h1 {
  font-size: 3rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .74);
}

h3 {
  font-size: 1.75rem;
  font-weight: 600;
}
`;
		host.overwrite(homeCss, content);
	}
}

export default function(): Rule {
	return (host: Tree, context: SchematicContext) => {
		context.logger.info("Updating project to Ignite UI CLI 3.0.0");

		addTypography(host);
		addHomeHeaderStyles(host);
	};
}
