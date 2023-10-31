export class Container {
	private properties: Map<any, any> = new Map();

	public get<T>(token: any): T {
		return this.properties.get(token);
	}

	public set(token: any, value: any) {
		return this.properties.set(token, value);
	}

	public get length(): number {
		return this.properties.size;
	}
}
