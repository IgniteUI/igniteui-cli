import { BaseComponent } from "@igniteui/cli-core";

class IgrQrCodeComponent extends BaseComponent {
	constructor() {
		super(__dirname);
		this.name = "QR Code";
		this.group = "Data Entry & Display";
		this.description = `renders a scannable QR code as an SVG based on the provided value`;
	}
}
module.exports = new IgrQrCodeComponent();
