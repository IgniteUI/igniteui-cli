import javascript
import semmle.javascript.security.dataflow.CommandInjectionCustomizations


// General flow via config https://codeql.github.com/docs/codeql-language-guides/analyzing-data-flow-in-javascript-and-typescript/#sanitizers
// Instead this follows https://github.com/github/codeql/blob/a3e9aed00ae5c1e70da8fbc4fc4a7cc803f177ca/javascript/documentation/library-customization.rst?plain=1#L244-L245
// to modify the pre-defined javascript CommandInjection flow's Sanitizer

/**
 * Treat Util.sanitizeShellArg(x) as a sanitizer for shell‑command injection.
 */
class ShellArgSanitizer extends CommandInjection::Sanitizer {
	ShellArgSanitizer() {
		this.(DataFlow::MethodCallNode).getReceiver().toString() = "Util" and
		this.(DataFlow::MethodCallNode).getMethodName() = "sanitizeShellArg"
	}
}
