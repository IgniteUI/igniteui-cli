import { DeadCodeDetector, GoogleAnalytics, Util } from "@igniteui/cli-core";
import { CommandType, PositionalArgs } from "./types";
import { ArgumentsCamelCase } from "yargs";
import * as path from "path";

const command: CommandType = {
	command: "analyze",
	aliases: ["a"],
	describe: "analyze codebase for dead code and orphaned files",
	builder: {
		path: {
			alias: "p",
			default: ".",
			describe: "Path to analyze (defaults to current directory)",
			type: "string"
		},
		include: {
			alias: "i",
			describe: "Glob patterns for files to include (comma-separated)",
			type: "string",
			default: "**/*.ts,**/*.tsx"
		},
		exclude: {
			alias: "e",
			describe: "Glob patterns for files to exclude (comma-separated)",
			type: "string",
			default: "**/*.d.ts,**/node_modules/**,**/dist/**,**/output/**"
		},
		json: {
			alias: "j",
			describe: "Output results in JSON format",
			type: "boolean",
			default: false
		}
	},
	templateManager: null,
	async handler(argv: ArgumentsCamelCase<PositionalArgs & {
		path?: string;
		include?: string;
		exclude?: string;
		json?: boolean;
	}>) {
		GoogleAnalytics.post({
			t: "screenview",
			cd: "Analyze"
		});

		try {
			const projectPath = path.resolve(argv.path || ".");
			const includePatterns = argv.include ? argv.include.split(",").map(p => p.trim()) : ["**/*.ts", "**/*.tsx"];
			const excludePatterns = argv.exclude ? argv.exclude.split(",").map(p => p.trim()) : ["**/*.d.ts", "**/node_modules/**", "**/dist/**", "**/output/**"];

			Util.log(`Analyzing codebase at: ${projectPath}`, "cyan");
			Util.log(`Include patterns: ${includePatterns.join(", ")}`, "gray");
			Util.log(`Exclude patterns: ${excludePatterns.join(", ")}`, "gray");
			Util.log("", ""); // Empty line

			const detector = new DeadCodeDetector(projectPath);
			const report = await detector.analyze(includePatterns, excludePatterns);

			GoogleAnalytics.post({
				t: "event",
				ec: "$ig analyze",
				ea: `files: ${report.stats.totalFiles}; orphaned: ${report.stats.orphanedFilesCount}; unused exports: ${report.stats.unusedExportsCount}`,
				cd1: projectPath,
				cd2: includePatterns.join(",")
			});

			if (argv.json) {
				console.log(JSON.stringify(report, null, 2));
				return;
			}

			// Display human-readable report
			Util.log("📊 Dead Code Analysis Report", "green");
			Util.log("================================", "green");
			Util.log("");

			// Statistics
			Util.log("📈 Statistics:", "blue");
			Util.log(`  Total files analyzed: ${report.stats.totalFiles}`);
			Util.log(`  Total exports found: ${report.stats.totalExports}`);
			Util.log(`  Orphaned files: ${report.stats.orphanedFilesCount}`);
			Util.log(`  Unused exports: ${report.stats.unusedExportsCount}`);
			Util.log("");

			// Orphaned files
			if (report.orphanedFiles.length > 0) {
				Util.log("🗑️  Orphaned Files (never imported):", "yellow");
				report.orphanedFiles.forEach(file => {
					Util.log(`  - ${file}`, "red");
				});
				Util.log("");
			} else {
				Util.log("✅ No orphaned files found!", "green");
				Util.log("");
			}

			// Unused exports
			if (report.unusedExports.length > 0) {
				Util.log("📤 Unused Exports:", "yellow");
				
				// Group by file
				const exportsByFile = new Map<string, typeof report.unusedExports>();
				report.unusedExports.forEach(exp => {
					if (!exportsByFile.has(exp.file)) {
						exportsByFile.set(exp.file, []);
					}
					exportsByFile.get(exp.file)!.push(exp);
				});

				exportsByFile.forEach((exports, file) => {
					Util.log(`  📄 ${file}:`, "cyan");
					exports.forEach(exp => {
						Util.log(`    - ${exp.export} (line ${exp.line})`, "red");
					});
				});
				Util.log("");
			} else {
				Util.log("✅ No unused exports found!", "green");
				Util.log("");
			}

			// Summary
			const hasIssues = report.orphanedFiles.length > 0 || report.unusedExports.length > 0;
			if (hasIssues) {
				Util.log("💡 Recommendations:", "blue");
				if (report.orphanedFiles.length > 0) {
					Util.log("  - Consider removing orphaned files if they're no longer needed");
				}
				if (report.unusedExports.length > 0) {
					Util.log("  - Remove unused exports or make them private if only used internally");
				}
				Util.log("  - Review the results carefully before making changes");
				Util.log("");
				Util.log("⚠️  Manual verification recommended before removing any code!", "yellow");
			} else {
				Util.log("🎉 Great! No dead code detected in your project.", "green");
			}

		} catch (error) {
			Util.error(`Analysis failed: ${error.message}`, "red");
			if (error.stack) {
				Util.error(`Stack: ${error.stack}`, "red");
			}
			process.exit(1);
		}
	}
};

export default command;