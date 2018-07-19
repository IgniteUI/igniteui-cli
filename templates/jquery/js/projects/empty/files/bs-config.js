var fallback = require("connect-history-api-fallback");
var routes = require("./bs-routes.json").routes;
/**
 * Browser Sync config.
 * NOTE: Ignite UI paths auto-updated by the CLI, must be valid JSON.
 */
module.exports = {
	files: ["./**/*.{html,htm,css,js}"],
	watchOptions: {
	  ignored: "node_modules"
	},
	"server": {
		routes: routes,
		baseDir: "./",
		middleware: [
		  fallback({
			index: "/index.html"
		  })
		]
	}
};