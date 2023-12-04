import { IgniteUIForAngularTemplate } from "../../../IgniteUIForAngularTemplate";

class IgxWeatherForecastTemplate extends IgniteUIForAngularTemplate {
	constructor() {
		super(__dirname);
		this.id = "weather-forecast";
		this.projectType = "igx-ts";
		this.listInComponentTemplates = false;
		this.listInCustomTemplates = true;
		this.name = "Weather Forecast";
		this.description = "Weather Forecast";
	}
}
module.exports = new IgxWeatherForecastTemplate();
