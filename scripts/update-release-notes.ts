import { readFileSync, writeFileSync } from "fs";
import { mergeSupplyChainNotes } from "./sbom-notes";

const [releaseNotesFile, notesFile, outputFile] = process.argv.slice(2);

if (!releaseNotesFile || !notesFile || !outputFile) {
	throw new Error("Usage: node scripts/update-release-notes.js <release-notes> <supply-chain-notes> <output>");
}

const releaseNotes = readFileSync(releaseNotesFile, "utf8");
const notes = readFileSync(notesFile, "utf8");

writeFileSync(outputFile, mergeSupplyChainNotes(releaseNotes, notes));
