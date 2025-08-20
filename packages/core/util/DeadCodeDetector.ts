import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

export interface DeadCodeReport {
	/** Files that are never imported or referenced */
	orphanedFiles: string[];
	/** Exports that are never used */
	unusedExports: Array<{
		file: string;
		export: string;
		line: number;
	}>;
	/** Analysis statistics */
	stats: {
		totalFiles: number;
		totalExports: number;
		orphanedFilesCount: number;
		unusedExportsCount: number;
	};
}

export interface FileExport {
	name: string;
	line: number;
	isDefault: boolean;
}

export interface FileImport {
	name: string;
	source: string;
	line: number;
	isDefault: boolean;
}

export interface FileAnalysis {
	filePath: string;
	exports: FileExport[];
	imports: FileImport[];
	referencedBy: Set<string>;
}

export class DeadCodeDetector {
	private fileAnalyses: Map<string, FileAnalysis> = new Map();
	private projectRoot: string;

	constructor(projectRoot: string) {
		this.projectRoot = path.resolve(projectRoot);
	}

	/**
	 * Analyzes the codebase for dead code and orphaned files
	 * @param patterns Glob patterns for files to analyze (default: TypeScript files)
	 * @param excludePatterns Patterns to exclude from analysis
	 */
	public async analyze(
		patterns: string[] = ["**/*.ts", "**/*.tsx"],
		excludePatterns: string[] = ["**/*.d.ts", "**/node_modules/**", "**/dist/**", "**/output/**"]
	): Promise<DeadCodeReport> {
		this.fileAnalyses.clear();

		// Find all TypeScript files
		const allFiles = new Set<string>();
		for (const pattern of patterns) {
			const files = await glob(pattern, {
				cwd: this.projectRoot,
				absolute: true,
				ignore: excludePatterns
			});
			files.forEach(file => allFiles.add(file));
		}

		// Analyze each file
		for (const filePath of allFiles) {
			await this.analyzeFile(filePath);
		}

		// Build reference graph
		this.buildReferenceGraph();

		// Generate report
		return this.generateReport();
	}

	private async analyzeFile(filePath: string): Promise<void> {
		try {
			const content = fs.readFileSync(filePath, "utf-8");
			const sourceFile = ts.createSourceFile(
				filePath,
				content,
				ts.ScriptTarget.Latest,
				true
			);

			const analysis: FileAnalysis = {
				filePath,
				exports: [],
				imports: [],
				referencedBy: new Set()
			};

			// Visit all nodes to extract imports and exports
			this.visitNode(sourceFile, analysis);

			this.fileAnalyses.set(filePath, analysis);
		} catch (error) {
			// Skip files that can't be parsed
			console.warn(`Failed to analyze ${filePath}: ${error.message}`);
		}
	}

	private visitNode(node: ts.Node, analysis: FileAnalysis): void {
		switch (node.kind) {
			case ts.SyntaxKind.ImportDeclaration:
				this.extractImport(node as ts.ImportDeclaration, analysis);
				break;
			case ts.SyntaxKind.ExportDeclaration:
				this.extractExport(node as ts.ExportDeclaration, analysis);
				break;
			case ts.SyntaxKind.ExportAssignment:
				this.extractExportAssignment(node as ts.ExportAssignment, analysis);
				break;
			case ts.SyntaxKind.FunctionDeclaration:
			case ts.SyntaxKind.ClassDeclaration:
			case ts.SyntaxKind.InterfaceDeclaration:
			case ts.SyntaxKind.TypeAliasDeclaration:
			case ts.SyntaxKind.EnumDeclaration:
			case ts.SyntaxKind.VariableStatement:
				this.extractDeclarationExport(node, analysis);
				break;
		}

		ts.forEachChild(node, child => this.visitNode(child, analysis));
	}

	private extractImport(node: ts.ImportDeclaration, analysis: FileAnalysis): void {
		const moduleSpecifier = node.moduleSpecifier as ts.StringLiteral;
		const source = moduleSpecifier.text;
		const line = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart()).line + 1;

		if (node.importClause) {
			// Default import
			if (node.importClause.name) {
				analysis.imports.push({
					name: node.importClause.name.text,
					source,
					line,
					isDefault: true
				});
			}

			// Named imports
			if (node.importClause.namedBindings) {
				if (ts.isNamedImports(node.importClause.namedBindings)) {
					node.importClause.namedBindings.elements.forEach(element => {
						const name = element.propertyName 
							? element.propertyName.text 
							: element.name.text;
						analysis.imports.push({
							name,
							source,
							line,
							isDefault: false
						});
					});
				}
			}
		}
	}

	private extractExport(node: ts.ExportDeclaration, analysis: FileAnalysis): void {
		const line = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart()).line + 1;

		if (node.exportClause && ts.isNamedExports(node.exportClause)) {
			node.exportClause.elements.forEach(element => {
				const name = element.propertyName 
					? element.propertyName.text 
					: element.name.text;
				analysis.exports.push({
					name,
					line,
					isDefault: false
				});
			});
		}
	}

	private extractExportAssignment(node: ts.ExportAssignment, analysis: FileAnalysis): void {
		const line = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart()).line + 1;
		
		if (node.isExportEquals) {
			analysis.exports.push({
				name: "default",
				line,
				isDefault: true
			});
		} else {
			analysis.exports.push({
				name: "default",
				line,
				isDefault: true
			});
		}
	}

	private extractDeclarationExport(node: ts.Node, analysis: FileAnalysis): void {
		// TypeScript 5.x compatibility - check for modifiers differently based on node type
		let modifiers: readonly ts.ModifierLike[] | undefined;
		let hasExportModifier = false;
		let hasDefaultModifier = false;
		
		if (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node) || 
			ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || 
			ts.isEnumDeclaration(node)) {
			modifiers = ts.getModifiers(node);
		} else if (ts.isVariableStatement(node)) {
			modifiers = ts.getModifiers(node);
		}
		
		if (modifiers) {
			hasExportModifier = modifiers.some(mod => mod.kind === ts.SyntaxKind.ExportKeyword);
			hasDefaultModifier = modifiers.some(mod => mod.kind === ts.SyntaxKind.DefaultKeyword);
		}
		
		if (!hasExportModifier) {
			return;
		}

		const line = ts.getLineAndCharacterOfPosition(node.getSourceFile(), node.getStart()).line + 1;
		let name = "unknown";

		if (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node) || 
			ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || 
			ts.isEnumDeclaration(node)) {
			name = node.name?.text || "default";
		} else if (ts.isVariableStatement(node)) {
			const declaration = node.declarationList.declarations[0];
			if (ts.isIdentifier(declaration.name)) {
				name = declaration.name.text;
			}
		}
		
		analysis.exports.push({
			name,
			line,
			isDefault: hasDefaultModifier
		});
	}

	private buildReferenceGraph(): void {
		for (const [filePath, analysis] of this.fileAnalyses) {
			for (const importItem of analysis.imports) {
				// Resolve import source to absolute path
				const resolvedPath = this.resolveImportPath(importItem.source, filePath);
				if (resolvedPath && this.fileAnalyses.has(resolvedPath)) {
					this.fileAnalyses.get(resolvedPath)!.referencedBy.add(filePath);
				}
			}
		}
	}

	private resolveImportPath(source: string, fromFile: string): string | null {
		// Handle relative imports
		if (source.startsWith('.')) {
			const baseDir = path.dirname(fromFile);
			let resolvedPath = path.resolve(baseDir, source);
			
			// Try different extensions
			const extensions = ['.ts', '.tsx', '.js', '.jsx'];
			for (const ext of extensions) {
				const fullPath = resolvedPath + ext;
				if (fs.existsSync(fullPath)) {
					return fullPath;
				}
			}
			
			// Try index files
			for (const ext of extensions) {
				const indexPath = path.join(resolvedPath, 'index' + ext);
				if (fs.existsSync(indexPath)) {
					return indexPath;
				}
			}
		}

		// Handle package imports - for now just track relative imports
		return null;
	}

	private generateReport(): DeadCodeReport {
		const orphanedFiles: string[] = [];
		const unusedExports: Array<{ file: string; export: string; line: number }> = [];

		// Find orphaned files (files with no references)
		for (const [filePath, analysis] of this.fileAnalyses) {
			if (analysis.referencedBy.size === 0 && analysis.exports.length > 0) {
				// Skip entry points and test files
				const relativePath = path.relative(this.projectRoot, filePath);
				if (!this.isEntryPoint(relativePath) && !this.isTestFile(relativePath)) {
					orphanedFiles.push(relativePath);
				}
			}
		}

		// Find unused exports
		for (const [filePath, analysis] of this.fileAnalyses) {
			const referencingFiles = Array.from(analysis.referencedBy);
			const relativePath = path.relative(this.projectRoot, filePath);
			
			for (const exportItem of analysis.exports) {
				let isUsed = false;
				
				// Check if this export is imported by any referencing file
				for (const referencingFile of referencingFiles) {
					const referencingAnalysis = this.fileAnalyses.get(referencingFile);
					if (referencingAnalysis) {
						const hasImport = referencingAnalysis.imports.some(imp => 
							imp.name === exportItem.name && 
							this.resolveImportPath(imp.source, referencingFile) === filePath
						);
						if (hasImport) {
							isUsed = true;
							break;
						}
					}
				}
				
				if (!isUsed && !this.isEntryPoint(relativePath)) {
					unusedExports.push({
						file: relativePath,
						export: exportItem.name,
						line: exportItem.line
					});
				}
			}
		}

		const totalFiles = this.fileAnalyses.size;
		const totalExports = Array.from(this.fileAnalyses.values())
			.reduce((sum, analysis) => sum + analysis.exports.length, 0);

		return {
			orphanedFiles,
			unusedExports,
			stats: {
				totalFiles,
				totalExports,
				orphanedFilesCount: orphanedFiles.length,
				unusedExportsCount: unusedExports.length
			}
		};
	}

	private isEntryPoint(filePath: string): boolean {
		const entryPatterns = [
			/^index\.(ts|tsx|js|jsx)$/,
			/^main\.(ts|tsx|js|jsx)$/,
			/^app\.(ts|tsx|js|jsx)$/,
			/^cli\.(ts|tsx|js|jsx)$/,
			/package\.json$/,
			/tsconfig.*\.json$/
		];
		
		const fileName = path.basename(filePath);
		return entryPatterns.some(pattern => pattern.test(fileName));
	}

	private isTestFile(filePath: string): boolean {
		const testPatterns = [
			/\.spec\.(ts|tsx|js|jsx)$/,
			/\.test\.(ts|tsx|js|jsx)$/,
			/\/__tests__\//,
			/\/spec\//,
			/\/test\//
		];
		
		return testPatterns.some(pattern => pattern.test(filePath));
	}
}