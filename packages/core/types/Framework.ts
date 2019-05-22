import { ProjectLibrary } from "./ProjectLibrary";

export interface Framework {
	id: string;

	/** Friendly Name */
	name: string;

	projectLibraries: ProjectLibrary[];
}
