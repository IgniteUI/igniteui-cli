import {FeatureOutputType, GridHelper} from "../../packages/cli/lib/project-utility/GridHelper";

describe("Unit Tests - GridHelper", () => {
	it("Should call generateFeatures properly - AngularJS", async () => {
		const mockGridHelper = new GridHelper();
		mockGridHelper.outputType = FeatureOutputType.AngularJS;
		spyOn(mockGridHelper, "addFeature").and.callThrough();
		const mockGenerate = spyOn<any>(mockGridHelper, "generateXML").and.callThrough();
		mockGridHelper.generateFeatures(["Feature 1", "Feature 2"], 0);
		expect(mockGridHelper.addFeature).toHaveBeenCalledTimes(2);
		expect(mockGenerate).toHaveBeenCalledTimes(1);
	});
	it("Should call generateFeatures properly - JS", async () => {
		const mockGridHelper = new GridHelper();
		mockGridHelper.outputType = FeatureOutputType.JS;
		spyOn(mockGridHelper, "addFeature");
		spyOn(JSON, "stringify").and.returnValue("[\"Feature 1\", \"Feature 2\"]");
		mockGridHelper.generateFeatures(["Feature 1", "Feature 2"], 0);
		expect(mockGridHelper.addFeature).toHaveBeenCalledTimes(2);
		expect(JSON.stringify).toHaveBeenCalledTimes(1);
	});
	it("Should call addFeature properly - with Selection", async () => {
		const mockGridHelper = new GridHelper();
		mockGridHelper.outputType = FeatureOutputType.AngularJS;
		const mockGetFeature = spyOn<any>(mockGridHelper, "getFeature");
		mockGridHelper.addFeature("Selection");
		expect(mockGetFeature).toHaveBeenCalledTimes(2);
		expect(mockGetFeature).toHaveBeenCalledWith("Selection");
		expect(mockGetFeature).toHaveBeenCalledWith("RowSelectors");
	});
	it("Should call addFeature properly - without Selection", async () => {
		const mockGridHelper = new GridHelper();
		mockGridHelper.outputType = FeatureOutputType.AngularJS;
		mockGridHelper.hierarchical = true;
		const mockGetFeature = spyOn<any>(mockGridHelper, "getFeature").and.callThrough();
		mockGridHelper.addFeature("Example");
		expect(mockGetFeature).toHaveBeenCalledTimes(1);
		expect(mockGetFeature).toHaveBeenCalledWith("Example");
	});
});
