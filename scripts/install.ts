import { GoogleAnalytics } from "@igniteui-cli/core";

function install() {
	if (!!process.env.npm_config_global) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: `install`
		});
	}
}

install();
