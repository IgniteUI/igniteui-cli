// tslint:disable-next-line:no-implicit-dependencies
import { App, GoogleAnalytics } from "@igniteui/cli-core";

function install() {
	if (!!process.env.npm_config_global) {
		App.initialize("angular-cli");
		GoogleAnalytics.post({
			t: "screenview",
			cd: `install`
		});
	}
}

install();
