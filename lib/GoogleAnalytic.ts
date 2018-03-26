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

	public static postToGoogleAnalytic(parameters: object) {
		const config = ProjectConfig.getConfig();
		if (config.skipAnalytics) {
			return;
		}
		parameters["v"] = 1;
		parameters["tid"] = "UA-115760770-1";

		if (!parameters["av"]) {
			if (!this.appVersion) {
				this.appVersion = Util.cliVersion();
			}

			parameters["av"] = this.appVersion;
		}

		parameters["an"] = "igniteui-cli";

		const nodeVersion = process.version;
		const os = process.platform;

		parameters["ua"] = `node: ${nodeVersion} os: ${os}`;

		const clientId = this.getUUID();
		parameters["cid"] = clientId;
		let queryString = qs.stringify(parameters);
		const path = "/collect?" + queryString;
		var options = { host: "www.google-analytics.com", path: path, method: "POST" }
		const https = require("https");
		const req = https.request(options);
		req.on("error", e => {
			// TODO: remove error loging after
			// should we save all the logs and send them later or just live without them
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