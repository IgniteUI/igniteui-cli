import { GoogleAnalytic } from "../lib/GoogleAnalytic";

function install() {
	GoogleAnalytic.post({
		cd: `install global: ${!!process.env.npm_config_global}`,
		t: "screenview"
	});
}

install();
