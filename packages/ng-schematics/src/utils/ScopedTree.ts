import { join, normalize, Path } from "@angular-devkit/core";
import { DelegateTree, Tree } from "@angular-devkit/schematics";

/**
 * Lightweight scoped tree using only public DevKit APIs (DelegateTree).
 * Replaces the private import from `@angular-devkit/schematics/src/tree/scoped`.
 */
export class ScopedTree extends DelegateTree {
	private readonly scope: Path;

	constructor(base: Tree, scope: string) {
		super(base);
		this.scope = normalize("/" + scope);
	}

	private fullPath(p: string): Path {
		return join(this.scope, normalize("/" + p));
	}

	override read(p: string) { return this._other.read(this.fullPath(p)); }
	override readText(p: string) { return this._other.readText(this.fullPath(p)); }
	override readJson(p: string) { return this._other.readJson(this.fullPath(p)); }
	override exists(p: string) { return this._other.exists(this.fullPath(p)); }
	override get(p: string) { return this._other.get(this.fullPath(p)); }
	override getDir(p: string) { return this._other.getDir(this.fullPath(p)); }
	override overwrite(p: string, c: Buffer | string) { this._other.overwrite(this.fullPath(p), c); }
	override beginUpdate(p: string) { return this._other.beginUpdate(this.fullPath(p)); }
	override create(p: string, c: Buffer | string) { this._other.create(this.fullPath(p), c); }
	override delete(p: string) { this._other.delete(this.fullPath(p)); }
	override rename(from: string, to: string) { this._other.rename(this.fullPath(from), this.fullPath(to)); }
}
