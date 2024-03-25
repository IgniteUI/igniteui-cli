export interface IImport {
	from: string;
	edit: boolean;
	namedImport?: boolean; // not really needed?
	as?: string;
	component?: string;
	imports?: string[];
}
