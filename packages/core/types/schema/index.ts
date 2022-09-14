export interface MigrationCollection {
	migrations: Migration[]
}

export interface Migration {
	name: string;
	version: string;
	factory: string;
}
