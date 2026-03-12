import { EmptyTree } from "@angular-devkit/schematics";
import { UnitTestTree } from "@angular-devkit/schematics/testing";
import { NgTreeFileSystem } from "./NgFileSystem";

describe("NgTreeFileSystem", () => {
	let tree: UnitTestTree;
	let fs: NgTreeFileSystem;

	beforeEach(() => {
		tree = new UnitTestTree(new EmptyTree());
		fs = new NgTreeFileSystem(tree);
	});

	describe("fileExists", () => {
		it("should return true when the file exists in the tree", () => {
			tree.create("/src/app/app.component.ts", "content");
			expect(fs.fileExists("/src/app/app.component.ts")).toBeTrue();
		});

		it("should return false when the file does not exist in the tree", () => {
			expect(fs.fileExists("/src/missing.ts")).toBeFalse();
		});
	});

	describe("readFile", () => {
		it("should return the file content as a string", () => {
			tree.create("/src/app/app.component.ts", "export class AppComponent {}");
			expect(fs.readFile("/src/app/app.component.ts")).toBe("export class AppComponent {}");
		});

		it("should return an empty string when the file does not exist", () => {
			expect(fs.readFile("/src/nonexistent.ts")).toBe("");
		});

		it("should ignore the encoding parameter and still return the content", () => {
			tree.create("/src/file.txt", "hello");
			expect(fs.readFile("/src/file.txt", "utf-8")).toBe("hello");
		});
	});

	describe("writeFile", () => {
		it("should create a new file when it does not exist", () => {
			fs.writeFile("/src/new-file.ts", "new content");
			expect(tree.readContent("/src/new-file.ts")).toBe("new content");
		});

		it("should overwrite an existing file", () => {
			tree.create("/src/existing.ts", "original content");
			fs.writeFile("/src/existing.ts", "updated content");
			expect(tree.readContent("/src/existing.ts")).toBe("updated content");
		});
	});

	describe("directoryExists", () => {
		it("should return true when the directory contains files", () => {
			tree.create("/src/app/app.component.ts", "");
			expect(fs.directoryExists("/src/app")).toBeTrue();
		});

		it("should return true when the directory contains subdirectories", () => {
			tree.create("/src/app/nested/file.ts", "");
			expect(fs.directoryExists("/src/app")).toBeTrue();
		});

		it("should return false for an empty or non-existent directory", () => {
			expect(fs.directoryExists("/src/nonexistent")).toBeFalse();
		});
	});

	describe("glob", () => {
		beforeEach(() => {
			tree.create("/src/app/app.component.ts", "");
			tree.create("/src/app/app.module.ts", "");
			tree.create("/src/app/shared/shared.component.ts", "");
			tree.create("/src/environments/environment.ts", "");
			tree.create("/src/environments/environment.prod.ts", "");
		});

		it("should return all files matching the pattern", () => {
			const results = fs.glob("/src", "**/*.ts");
			expect(results).toContain("/src/app/app.component.ts");
			expect(results).toContain("/src/app/app.module.ts");
			expect(results).toContain("/src/app/shared/shared.component.ts");
			expect(results).toContain("/src/environments/environment.ts");
			expect(results).toContain("/src/environments/environment.prod.ts");
		});

		it("should return only files matching a specific pattern", () => {
			const results = fs.glob("/src", "**/environment*.ts");
			expect(results).toContain("/src/environments/environment.ts");
			expect(results).toContain("/src/environments/environment.prod.ts");
			expect(results).not.toContain("/src/app/app.component.ts");
		});

		it("should return an empty array when no files match the pattern", () => {
			const results = fs.glob("/src", "**/*.html");
			expect(results).toEqual([]);
		});

		it("should skip subdirectories matching ignorePatterns", () => {
			tree.create("/src/node_modules/lib/index.ts", "");

			const results = fs.glob("/src", "**/*.ts", ["node_modules"]);
			expect(results.some(r => r.includes("node_modules"))).toBeFalse();
		});

		it("should return an empty array when dirPath does not exist", () => {
			const results = fs.glob("/nonexistent", "**/*.ts");
			expect(results).toEqual([]);
		});
	});
});
