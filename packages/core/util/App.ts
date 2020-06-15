import { FS_TOKEN, FS_TYPE_TOKEN, FsTypes } from "../types";
import { Container } from "./Container";
import { FsFileSystem } from "./FileSystem";

export class App {
	/** @internal testing only */
	public static testMode = false;
	public static container: Container = new Container();
	public static appName = "igniteui-cli";
	public static initialize(name?: string) {
		this.container.set(FS_TOKEN, new FsFileSystem());
		this.container.set(FS_TYPE_TOKEN, FsTypes.physical);
		if (name) {
			this.appName = name;
		}
	}

	public static get workDir() {
		return this.container.get<FsTypes>(FS_TYPE_TOKEN) ? process.cwd() : "";
	}
}
