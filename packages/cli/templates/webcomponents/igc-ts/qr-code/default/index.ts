import { IgniteUIForWebComponentsTemplate } from "../../../../../lib/templates/IgniteUIForWebComponentsTemplate";

class IgcQrCodeTemplate extends IgniteUIForWebComponentsTemplate {
	constructor() {
		super(__dirname);
		this.components = ["Qr Code"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "qr-code";
		this.projectType = "igc-ts";
		this.name = "Qr Code";
		this.description = "basic IgcQrCode";
	}
}
module.exports = new IgcQrCodeTemplate();
