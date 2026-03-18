const fs=require('fs'),p=require('path');
const sourceDb = p.resolve('../db/igniteui-docs.db');
const destDb = p.resolve('../dist/igniteui-docs.db');

if (fs.existsSync(sourceDb)) {
	fs.copyFileSync(sourceDb, destDb);
	console.log('Copied db/igniteui-docs.db → dist/');
} else {
	console.warn('db/igniteui-docs.db not found, skipping copy');
}
