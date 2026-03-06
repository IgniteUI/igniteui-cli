import javascript

// https://codeql.github.com/docs/codeql-language-guides/analyzing-data-flow-in-javascript-and-typescript/#sanitizers
// https://codeql.github.com/codeql-standard-libraries/actions/codeql/dataflow/DataFlow.qll/module.DataFlow$Configs$ConfigSig.html
module UtilSanitizerConfig implements DataFlow::ConfigSig {
	/** 
	 * Treat calls to Util.sanitizeShellArg(...) as a barrier/sanitizer for dataflow
	 */
	predicate isBarrier(DataFlow::Node nd) {
		nd.(DataFlow::CallNode).getCalleeName() = "sanitizeShellArg"
	}
	/** Minimal stubs required by ConfigSig */
  predicate isSource(DataFlow::Node source) { source instanceof Source }

  predicate isSink(DataFlow::Node sink) { sink instanceof Sink }
}

module UtilSanitizerConfigFlow = TaintTracking::Global<UtilSanitizerConfig>;

from DataFlow::Node source, DataFlow::Node sink
where UtilSanitizerConfigFlow::flow(source, sink)
select source, sink
