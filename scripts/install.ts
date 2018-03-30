import { GoogleAnalytics } from "../lib/GoogleAnalytic";

function install() {
	GoogleAnalytics.post({
		cd: `install global: ${!!process.env.npm_config_global}`,
		t: "screenview"
	});
}

install();
