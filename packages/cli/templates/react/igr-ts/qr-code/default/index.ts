import { IgniteUIForReactTemplate } from "../../../../../lib/templates/IgniteUIForReactTemplate";
import { IGNITEUI_REACT_PACKAGE } from "../../constants";

class IgrQrCodeTemplate extends IgniteUIForReactTemplate {
	constructor() {
		super(__dirname);
		this.components = ["QR Code"];
		this.controlGroup = "Data Entry & Display";
		this.listInComponentTemplates = true;
		this.id = "qr-code";
		this.projectType = "igr-ts";
		this.name = "QR Code";
		this.description = "basic IgrQrCode";
		this.packages = [IGNITEUI_REACT_PACKAGE];
	}
}
module.exports = new IgrQrCodeTemplate();
