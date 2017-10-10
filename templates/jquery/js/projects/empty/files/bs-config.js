/**
 * Browser Sync config.
 * NOTE: Ignite UI paths auto-updated by the CLI, must be valid JSON.
 */
module.exports = {
	"server": {
		"routes": {
			"/ignite-ui/js/infragistics.core.js": "./node_modules/ignite-ui/js/infragistics.core-lite.js",
			"/ignite-ui/js/infragistics.lob.js": "./node_modules/ignite-ui/js/infragistics.lob-lite.js",
			"/ignite-ui": "$(igniteuiSource)"
		}
	}
}