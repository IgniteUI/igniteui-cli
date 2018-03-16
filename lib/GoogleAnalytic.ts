import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as qs from "querystring";
import { ProjectConfig } from "./ProjectConfig";
import { Util } from "./Util";


class GoogleAnalytics implements GoogleAnalytics {
	private static UUIDPath: string = "./config/UUID.json";
	private static appVersion: string;

	public static postToGoogleAnalytic(parameters: object) {
		const config =  ProjectConfig.getConfig();
		if (config.skipAnalytics) {
			return;
		}
		parameters["v"] = 1;
		parameters["tid"] = "UA-115760770-1";

		if (!this.appVersion) {
			this.appVersion = Util.cliVersion();
		}

		parameters["av"] = this.appVersion;
		parameters["an"] = "igniteui-cli";
		
		const clientId = this.getUUID();
		parameters["cid"] = clientId;
		let queryString = qs.stringify(parameters);
		const path = "/collect?" + queryString;
        var options = { host: "www.google-analytics.com", path: path, method: "POST" }
		const https = require("https");
		const req = https.request(options);
		req.end();
	}

	private static getUUID(): string {
		const absolutePath = path.join(__dirname, this.UUIDPath);
		let UUID = ""
		if (fs.existsSync(absolutePath)) {
			UUID = require(absolutePath).UUID;
		} else {
			UUID = this.generateUUID();
			fs.writeFile(absolutePath, JSON.stringify({ UUID: UUID }), err => {});
		}
		
		return UUID;
	}

	private static generateUUID(): string{
		const randomBytes = crypto.randomBytes(16);
		const byteToHex = [];
		for (let i = 0; i < 256; ++i) {
			byteToHex[i] = (i + 0x100).toString(16).substr(1);
		}
		
		let i = 0;
		return byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] + '-' +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]] +
		byteToHex[randomBytes[i++]] + byteToHex[randomBytes[i++]];
	}
}

export { GoogleAnalytics }