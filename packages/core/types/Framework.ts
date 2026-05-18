import { ProjectLibrary } from "./ProjectLibrary";

export interface Framework {
	id: string;

	/** Friendly Name */
	name: string;

	projectLibraries: ProjectLibrary[];

	/** When true the framework is excluded from `ig new` choices and the step-by-step wizard. */
	hidden?: boolean;
}
