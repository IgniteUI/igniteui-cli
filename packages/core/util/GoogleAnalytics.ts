import { createHash} from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as qs from "querystring";
import { GoogleAnalyticsParameters } from "../types";
import { App } from "./App";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

class GoogleAnalytics {
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
		parameters.an = App.appName;

		//	set user agent string. We are using this for detecting the user's OS.
		//	as well as node version. The latest is set as browser version.
		const nodeVersion = process.version;
		const os = this.getOsForUserAgent();
		const npmVersion = this.getNpmVersion();
		parameters.ua = `node/${nodeVersion} (${os}) npm/${npmVersion}`;

		//	set user ID
		parameters.uid = this.getUUID();

		//	generate http request and sent it to GA
		const queryString = qs.stringify(parameters as {});
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
		const dirName = path.dirname(absolutePath);
		fs.mkdirSync(dirName, { recursive: true });

		try {
			const fd = fs.openSync(absolutePath, fs.constants.O_CREAT | fs.constants.O_EXCL | fs.constants.O_RDWR, 0o600);
			UUID = this.getUserID();
			fs.writeFileSync(fd, JSON.stringify({ UUID }));
			fs.closeSync(fd);
		} catch {
			UUID = JSON.parse(fs.readFileSync(absolutePath, "utf8")).UUID;
		}

		return UUID;
	}

	protected static getUserID(): string {
		const platform = process.platform;
		let result: string = "";

		try	{
			result = this.getMachineID(platform, result);
		}	catch {
				result = this.createRandomGuid()
				.replace(/\r+|\n+|\s+/ig, "")
				.toLowerCase();
		}

		result = createHash("sha256").update(result).digest("hex");
		return result;
	}

	protected static getMachineID(platform: string, result: string) {
		switch (platform) {
			case "darwin":
				result = Util.execSync("ioreg -rd1 -c IOPlatformExpertDevice").toString()
					.split("IOPlatformUUID")[1]
					.split("\n")[0].replace(/\=|\s+|\"/ig, "")
					.toLowerCase();
				break;
			case "win32":
				result = Util.execSync("REG QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid")
					.toString()
					.split("REG_SZ")[1]
					.replace(/\r+|\n+|\s+/ig, "")
					.toLowerCase();
				break;
			case "linux":
				result =
					Util.execSync("( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :")
						.toString()
						.replace(/\r+|\n+|\s+/ig, "")
						.toLowerCase();
				break;
			case "freebsd":
				result = Util.execSync("kenv -q smbios.system.uuid").toString()
					.replace(/\r+|\n+|\s+/ig, "")
					.toLowerCase();
				break;
		}
		return result;
	}

	protected static createRandomGuid(): string {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		const currentDate = new Date();
		const currentTime = currentDate.getTime().toString();
		return currentTime + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
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
			const buffer = Util.execSync("npm -v");
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
		t: "exception",
		exd: err.message
	});
});
