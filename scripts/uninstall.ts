import { GoogleAnalytics } from "../lib/GoogleAnalytic";

function uninstall() {
	GoogleAnalytics.post({
		cd: "uninstall",
		t: "screenview"
	});
}

uninstall();
