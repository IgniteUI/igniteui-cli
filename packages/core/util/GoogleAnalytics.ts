import { createHash} from "crypto";
import * as fs from "fs";
import * as path from "path";
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
	// GA4 Measurement ID and API Secret
	// To obtain these credentials:
	// 1. Go to Google Analytics Admin panel (https://analytics.google.com/analytics/web/)
	// 2. Navigate to Admin > Data Streams > Select your stream
	// 3. Measurement ID is shown at the top (format: G-XXXXXXXXXX)
	// 4. For API Secret: Scroll down to "Measurement Protocol API secrets" > "Create" to generate a new secret
	protected static measurementID = "G-XXXXXXXXXX";  // TODO: Replace with actual GA4 Measurement ID
	protected static apiSecret = "XXXXXXXXXXXXXXXXXXXXXXXX";  // TODO: Replace with actual GA4 API Secret

	/**
	 * Generates http post request with provided parameters and sends it to GA4
	 * @param parameters Object containing all the parameters to send
	 */
	public static post(parameters: GoogleAnalyticsParameters) {
		const config = ProjectConfig.getConfig();
		if (config.disableAnalytics) {
			return;
		}

		// Get application version if not set
		if (!this.appVersion) {
			this.appVersion = Util.version();
		}

		// Get user agent info
		const nodeVersion = process.version;
		const os = this.getOsForUserAgent();
		const npmVersion = this.getNpmVersion();
		const userAgent = `node/${nodeVersion} (${os}) npm/${npmVersion}`;

		// Get client ID (user ID)
		const clientId = this.getUUID();

		// Build GA4 event payload
		const eventName = this.mapHitTypeToEventName(parameters.t || "event");
		const eventParams: any = {
			app_name: App.appName,
			app_version: parameters.av || this.appVersion,
			engagement_time_msec: "100"  // Required for events
		};

		// Map custom dimensions to event parameters
		if (parameters.cd) eventParams.screen_name = parameters.cd;
		if (parameters.ec) eventParams.event_category = parameters.ec;
		if (parameters.ea) eventParams.event_action = parameters.ea;
		if (parameters.el) eventParams.event_label = parameters.el;
		if (parameters.exd) eventParams.exception_description = parameters.exd;
		
		// Map custom dimensions
		if (parameters.cd1) eventParams.framework = parameters.cd1;
		if (parameters.cd2) eventParams.project_type = parameters.cd2;
		if (parameters.cd3) eventParams.project_name = parameters.cd3;
		if (parameters.cd4) eventParams.action = parameters.cd4;
		if (parameters.cd5) eventParams.component_group = parameters.cd5;
		if (parameters.cd6) eventParams.component_name = parameters.cd6;
		if (parameters.cd7) eventParams.template_name = parameters.cd7;
		if (parameters.cd8) eventParams.custom_view_name = parameters.cd8;
		if (parameters.cd9) eventParams.extra_config = parameters.cd9;
		if (parameters.cd10 !== undefined) eventParams.skip_config = parameters.cd10;
		if (parameters.cd11 !== undefined) eventParams.skip_git = parameters.cd11;
		if (parameters.cd12 !== undefined) eventParams.global = parameters.cd12;
		if (parameters.cd13) eventParams.search_term = parameters.cd13;
		if (parameters.cd14) eventParams.theme = parameters.cd14;

		// Build GA4 request payload
		const payload = {
			client_id: clientId,
			user_properties: {
				user_agent: {
					value: userAgent
				}
			},
			events: [{
				name: eventName,
				params: eventParams
			}]
		};

		const payloadString = JSON.stringify(payload);
		const fullPath = `/mp/collect?measurement_id=${this.measurementID}&api_secret=${this.apiSecret}`;
		const options = {
			host: "www.google-analytics.com",
			path: fullPath,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(payloadString)
			}
		};

		const https = require("https");
		const req = https.request(options);
		req.on("error", e => {
			// TODO: save all the logs and send them later
		});
		req.write(payloadString);
		req.end();
	}

	/**
	 * Maps Universal Analytics hit types to GA4 event names
	 */
	protected static mapHitTypeToEventName(hitType: string): string {
		switch (hitType) {
			case "screenview":
				return "screen_view";
			case "event":
				return "cli_event";
			case "exception":
				return "exception";
			default:
				return "cli_event";
		}
	}

	protected static getUUID(): string {
		const absolutePath = path.join(this.userDataFolder, this.appFolder, this.userSettings);
		let UUID = "";
		if (fs.existsSync(absolutePath)) {
			UUID = require(absolutePath).UUID;
		} else {
			const dirName = path.dirname(absolutePath);
			if (!fs.existsSync(dirName)) {
				fs.mkdirSync(dirName, { recursive: true });
			}

			UUID = this.getUserID();
			fs.writeFileSync(absolutePath, JSON.stringify({ UUID }));
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
