import { GoogleAnalytics } from "../lib/GoogleAnalytic";

function install() {
	GoogleAnalytics.post({
		cd: "install",
		t: "screenview"
	});
}

install();
