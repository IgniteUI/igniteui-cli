import { execSync } from "child_process";
import { createHash} from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as qs from "querystring";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

class GoogleAnalytics implements GoogleAnalytics {
	protected static userDataFolder: string = process.env.APPDATA ||
		(process.platform === "darwin" ? "/Users/Shared" : process.env.HOME + "/.npm/");
	protected static appFolder = "igniteui-cli";
	protected static userSettings: string = "user-settings.json";
	protected static appVersion: string;
	protected static npmVersion: string;
	protected static trackingID = "UA-392932-23";

	/**
	 * Generates http post request with provided parameters and sends it to GA
	 * @param parameters Object containing all the parameters to send
	 */
	public static post(parameters: GoogleAnalyticsParameters) {
		const config = ProjectConfig.getConfig();
		if (config.disableAnalytics) {
			return;
		}

		// set GA protocol version. This should be 1
		parameters.v = 1;

		// set the Tracking ID
		parameters.tid = this.trackingID;

		// set application version if not set beforehand
		if (!parameters.av) {
			if (!this.appVersion) {
				this.appVersion = Util.version();
			}

			parameters.av = this.appVersion;
		}

		// set application name
		parameters.an = "igniteui-cli";

		//	set user agent string. We are using this for detecting the user's OS.
		//	as well as node version. The latest is set as browser version.
		const nodeVersion = process.version;
		const os = this.getOsForUserAgent();
		const npmVersion = this.getNpmVersion();
		parameters.ua = `node/${nodeVersion} (${os}) npm/${npmVersion}`;

		//	set user ID
		parameters.uid = this.getUUID();

		//	generate http request and sent it to GA
		const queryString = qs.stringify(parameters);
		const fullPath = "/collect?" + queryString;
		const options = { host: "www.google-analytics.com", path: fullPath, method: "POST" };
		const https = require("https");
		const req = https.request(options);
		req.on("error", e => {
			// TODO: save all the logs and send them later
		});
		req.end();
	}

	protected static getUUID(): string {
		const absolutePath = path.join(this.userDataFolder, this.appFolder, this.userSettings);
		let UUID = "";
		if (fs.existsSync(absolutePath)) {
			UUID = require(absolutePath).UUID;
		} else {
			const dirName = path.dirname(absolutePath);
			if (!fs.existsSync(dirName)) {
				fs.mkdirSync(dirName);
			}

			UUID = this.getMachineID();
			fs.writeFileSync(absolutePath, JSON.stringify({ UUID }));
		}

		return UUID;
	}

	protected static getMachineID(): string {
		const platform = process.platform;
		let result: string = "";

		switch (platform) {
			case "darwin":
				result = execSync("ioreg -rd1 -c IOPlatformExpertDevice").toString()
					.split("IOPlatformUUID")[1]
					.split("\n")[0].replace(/\=|\s+|\"/ig, "")
					.toLowerCase();
				break;
			case "win32":
				result = execSync("REG QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid")
					.toString()
					.split("REG_SZ")[1]
					.replace(/\r+|\n+|\s+/ig, "")
					.toLowerCase();
				break;
			case "linux":
				result =
					execSync("( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :")
						.toString()
						.replace(/\r+|\n+|\s+/ig, "")
						.toLowerCase();
				break;
			case "freebsd":
				result = execSync("kenv -q smbios.system.uuid").toString()
					.replace(/\r+|\n+|\s+/ig, "")
					.toLowerCase();
				break;
		}

		result = createHash("sha256").update(result).digest("hex");
		return result;
	}

	protected static getOsForUserAgent(): string {
		const platform = process.platform;
		switch (platform) {
			case "darwin":
				return "Mac OS";
			case "win32":
				return "Windows NT";
			case "linux":
				return "Linux";
			case "freebsd":
				return "OpenBSD";
			default:
				return "";
		}
	}

	protected static getNpmVersion(): string {
		if (!this.npmVersion) {
			this.npmVersion = "";
			const buffer = execSync("npm -v");
			// tslint:disable-next-line:prefer-for-of
			for (let i = 0; i < buffer.length; i += 1) {
				this.npmVersion += String.fromCharCode(+buffer[i]).toString();
			}
		}

		return this.npmVersion.trim();
	}
}

export { GoogleAnalytics };

process.on("uncaughtException", err => {
	GoogleAnalytics.post({
		exd: err.message,
		t: "exception"
	});
});
