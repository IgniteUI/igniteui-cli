enum TransformOperation {
	/** Update value. */
	Set,
	/** Add value at path. */
	Add,
	/** Remove value. */
	Remove
}
// tslint:disable-next-line:interface-name
interface Transform {
	propertyPath: string;
	transform: TransformOperation;
	value?: any;
}
export class ModuleExportTransform {

	public static updateFile(filePath: string, operations: Transform[]) {
		//TODO
		for (const element of operations) {
			switch (element.transform) {
				case TransformOperation.Set:

					break;

				default:
					break;
			}
		}
	}

}
