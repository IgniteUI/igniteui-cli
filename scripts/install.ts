import { GoogleAnalytics } from "../lib/GoogleAnalytics";

function install() {
	if (!!process.env.npm_config_global) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: `install`
		});
	}
}

install();
