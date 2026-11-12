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
	protected static measurementID = "G-N2K2PWRTLP";
	/** Measurement Protocol API secret of the GA4 data stream. Nothing is sent while this is empty. */
	protected static apiSecret = "";
	protected static sessionID = Math.floor(Date.now() / 1000).toString();
	protected static readonly maxParamLength = 100;
	protected static readonly maxUserPropertyLength = 36;

	protected static readonly customDimensions: { [key: string]: string } = {
		cd1: "framework",
		cd2: "project_type",
		cd3: "project_name",
		cd4: "action",
		cd5: "component_group",
		cd6: "component_name",
		cd7: "template_id",
		cd8: "template_name",
		cd9: "extra_configuration",
		cd10: "skip_config",
		cd11: "skip_git",
		cd12: "global",
		cd13: "search_term",
		cd14: "theme"
	};

	/**
	 * Generates http post request with provided parameters and sends it to GA4
	 * @param parameters Object containing all the parameters to send
	 */
	public static post(parameters: GoogleAnalyticsParameters) {
		const config = ProjectConfig.getConfig();
		if (config.disableAnalytics || !this.apiSecret) {
			return;
		}

		if (!this.appVersion) {
			this.appVersion = Util.version();
		}

		const payload = {
			client_id: this.getUUID(),
			user_properties: this.toUserProperties({
				app_name: App.appName,
				app_version: parameters.av || this.appVersion,
				node_version: process.version,
				npm_version: this.getNpmVersion(),
				os: this.getOsForUserAgent()
			}),
			events: [this.toEvent(parameters)]
		};

		const body = JSON.stringify(payload);
		const query = qs.stringify({ measurement_id: this.measurementID, api_secret: this.apiSecret });
		const options = {
			host: "www.google-analytics.com",
			path: "/mp/collect?" + query,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(body)
			}
		};
		const https = require("https");
		const req = https.request(options);
		req.on("error", (e: Error) => {
			// TODO: save all the logs and send them later
		});
		req.end(body);
	}

	/** Maps the Universal Analytics style hit parameters to a GA4 event */
	protected static toEvent(parameters: GoogleAnalyticsParameters): { name: string, params: { [key: string]: string | number } } {
		const params: { [key: string]: string | number } = {
			session_id: this.sessionID,
			engagement_time_msec: 1
		};
		const add = (name: string, value: unknown) => {
			if (value === undefined || value === null || value === "") {
				return;
			}
			params[name] = String(value).substring(0, this.maxParamLength);
		};

		let name: string;
		switch (parameters.t) {
			case "screenview":
				// screen_view is accepted for app streams only
				name = "page_view";
				add("page_title", parameters.cd);
				break;
			case "exception":
				name = "exception";
				add("description", parameters.exd);
				break;
			default:
				name = this.toEventName(parameters.ec);
				add("event_category", parameters.ec);
				add("event_action", parameters.ea);
				add("event_label", parameters.el);
				break;
		}

		for (const key of Object.keys(this.customDimensions)) {
			add(this.customDimensions[key], parameters[key as keyof GoogleAnalyticsParameters]);
		}

		return { name, params };
	}

	/** Turns an event category like '$ig upgrade-packages' into a valid GA4 event name - 'ig_upgrade_packages' */
	protected static toEventName(category?: string): string {
		const name = (category || "")
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "_")
			.replace(/^[^a-z]+|_+$/g, "")
			.substring(0, 40);
		return name || "cli_event";
	}

	protected static toUserProperties(properties: { [key: string]: string }): { [key: string]: { value: string } } {
		const result: { [key: string]: { value: string } } = {};
		for (const key of Object.keys(properties)) {
			if (properties[key]) {
				result[key] = { value: properties[key].substring(0, this.maxUserPropertyLength) };
			}
		}
		return result;
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
