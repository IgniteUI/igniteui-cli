import { existsSync, copyFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const sourceDb = resolve("db/igniteui-docs.db");
const destDb = resolve("dist/igniteui-docs.db");

if (existsSync(sourceDb)) {
  copyFileSync(sourceDb, destDb);
  console.log("Copied db/igniteui-docs.db → dist/");
} else {
  console.warn("db/igniteui-docs.db not found, skipping copy");
}

const setupFiles = ["setup_angular.md", "setup_react.md", "setup_webcomponents.md"];
for (const file of setupFiles) {
  const src = resolve(`src/tools/${file}`);
  const dest = resolve(`dist/tools/${file}`);
  if (existsSync(src)) {
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
    console.log(`Copied src/tools/${file} → dist/tools/`);
  } else {
    console.warn(`src/tools/${file} not found, skipping copy`);
  }
}
