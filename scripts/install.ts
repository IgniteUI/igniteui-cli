import { GoogleAnalytics } from "../lib/GoogleAnalytics";

function install() {
	GoogleAnalytics.post({
		t: "screenview",
		// tslint:disable-next-line:object-literal-sort-keys
		cd: `install global: ${!!process.env.npm_config_global}`
	});
}

install();
