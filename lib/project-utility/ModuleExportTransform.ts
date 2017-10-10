enum TransformOperation {
	/** Update value. */
	Set,
	/** Add value at path. */
	Add,
	/** Remove value. */
	Remove
}
interface Transform {
	propertyPath: string;
	transform: TransformOperation,
	value?: any
}
export class ModuleExportTransform {

	static updateFile(filePath:string, operations: Transform[]) {
		//TODO
		for (var i = 0; i < operations.length; i++) {
			var element = operations[i];
			switch (element.transform) {
				case TransformOperation.Set:

					break;
			
				default:
					break;
			}
		}
	}
	
}