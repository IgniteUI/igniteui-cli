import { execSync } from 'child_process';
// import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as qs from "querystring";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";

class GoogleAnalytics implements GoogleAnalytics {
	private static userDataFolder: string = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local');
	private static appFolder = "igniteui-cli";
	private static userSettings: string = "user-settings.json";
	private static appVersion: string;

	/**
	 * Generates http post request with provided parameters and sends it to GA
	 * @param parameters object containing all the parameters to send
	 */
	public static postToGoogleAnalytic(parameters: GoogleAnalyticsParameters) {
		const config = ProjectConfig.getConfig();
		if (config.skipAnalytics) {
			return;
		}

		// set GA protocol version. This should be 1
		parameters.v = 1;

		// set the Tracking ID
		parameters.tid = "UA-115760770-1";

		// set application version if not set beforehand
		if (!parameters.av) {
			if (!this.appVersion) {
				this.appVersion = Util.cliVersion();
			}

			parameters.av = this.appVersion;
		}

		// set application name
		parameters.an = "igniteui-cli";

		//	set user agent string. We are using this for detecting the user's OS.
		//	as well as node version. The latest is set as browsert version.
		const nodeVersion = process.version;
		const os = this.getOsForUserAgent();
		parameters.ua = `node/${nodeVersion} (${os})`;

		//	Set user ID
		parameters.uid = this.getUUID();

		//	generate http request and sent it to GA
		let queryString = qs.stringify(parameters);
		const path = "/collect?" + queryString;
		const options = { host: "www.google-analytics.com", path: path, method: "POST" }
		const https = require("https");
		const req = https.request(options);
		req.on("error", e => {
			// TODO: save all the logs and send them later
		});
		req.end();
	}

	private static getUUID(): string {
		const absolutePath = path.join(this.userDataFolder, this.appFolder, this.userSettings);
		let UUID = ""
		if (fs.existsSync(absolutePath)) {
			UUID = require(absolutePath).UUID;
		} else {
			const dirName = path.dirname(absolutePath);
			if (!fs.existsSync(dirName)) {
				fs.mkdirSync(dirName);
			}

			UUID = this.getMachineID();
			fs.writeFileSync(absolutePath, JSON.stringify({ UUID: UUID }));
		}

		return UUID;
	}

	private static getMachineID(): string {
		let platform = process.platform;
		console.log(platform);
		let result: string = "";
	
		switch (platform) {
			case 'darwin':
				result = execSync("ioreg -rd1 -c IOPlatformExpertDevice").toString()
					.split('IOPlatformUUID')[1]
					.split('\n')[0].replace(/\=|\s+|\"/ig, '')
					.toLowerCase();
				return result;
			case 'win32':
				result = execSync("REG QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid").toString()
					.split('REG_SZ')[1]
					.replace(/\r+|\n+|\s+/ig, '')
					.toLowerCase();
				return result;
			case 'linux':
				result = execSync("( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :").toString()
					.replace(/\r+|\n+|\s+/ig, '')
					.toLowerCase();
				return result;
			case 'freebsd':
				result = execSync("kenv -q smbios.system.uuid").toString()
					.replace(/\r+|\n+|\s+/ig, '')
					.toLowerCase();
				return result;
			default:
				return  result;
		}
	}

	private static getOsForUserAgent(): string {
		let platform = process.platform;
		switch (platform) {
			case 'darwin':
				return "Mac OS";
			case 'win32':
				return "Windows NT";
			case 'linux':
				return "Linux";
			case 'freebsd':
				return "OpenBSD";
			default:
				return  "";
		}
	}
	
	// private static getRandomUUID(): string {
	// 	const randomBytes = crypto.randomBytes(16);
	// 	const byteToHex = [];
	// 	for (let i = 0; i < 256; ++i) {
	// 		byteToHex[i] = (i + 0x100).toString(16).substr(1);
	// 	}

	// 	let i = 0;
	// 	return byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
	// 		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]];
	// }
}

export { GoogleAnalytics }