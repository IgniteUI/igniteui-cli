import { GoogleAnalytics } from "../lib/GoogleAnalytics";

function uninstall() {
	GoogleAnalytics.post({
		cd: `uninstall global: ${!!process.env.npm_config_global}`,
		t: "screenview"
	});
}

uninstall();
