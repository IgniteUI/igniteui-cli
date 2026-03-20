import { existsSync, copyFileSync } from "fs";
import { resolve } from "path";

const sourceDb = resolve("db/igniteui-docs.db");
const destDb = resolve("dist/igniteui-docs.db");

if (existsSync(sourceDb)) {
  copyFileSync(sourceDb, destDb);
  console.log("Copied db/igniteui-docs.db → dist/");
} else {
  console.warn("db/igniteui-docs.db not found, skipping copy");
}
