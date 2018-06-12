import { GoogleAnalytics } from "../lib/GoogleAnalytics";

function uninstall() {
	GoogleAnalytics.post({
		t: "screenview",
		// tslint:disable-next-line:object-literal-sort-keys
		cd: `uninstall global: ${!!process.env.npm_config_global}`
	});
}

uninstall();
