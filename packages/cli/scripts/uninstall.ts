import { GoogleAnalytics } from "@igniteui/cli-core";

function uninstall() {
	if (!!process.env.npm_config_global) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: `uninstall`
		});
		}
}

uninstall();
