import { GoogleAnalytics } from "../lib/GoogleAnalytic";

function uninstall() {
	GoogleAnalytics.post({
		cd: `uninstall global: ${!!process.env.npm_config_global}`,
		t: "screenview"
	});
}

uninstall();
