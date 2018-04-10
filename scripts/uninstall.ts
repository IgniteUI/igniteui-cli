import { GoogleAnalytic } from "../lib/GoogleAnalytic";

function uninstall() {
	GoogleAnalytic.post({
		cd: `uninstall global: ${!!process.env.npm_config_global}`,
		t: "screenview"
	});
}

uninstall();
