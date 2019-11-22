import { FS_TOKEN, FS_TYPE_TOKEN, FsTypes } from "../types";
import { Container } from "./Container";
import { FsFileSystem } from "./FileSystem";

export class App {
	public static container: Container = new Container();
	public static initialize() {
		this.container.set(FS_TOKEN, new FsFileSystem());
		this.container.set(FS_TYPE_TOKEN, FsTypes.physical);
	}

	public static get workDir() {
		return this.container.get<FsTypes>(FS_TYPE_TOKEN) ? process.cwd() : "";
	}
}
