import { BaseComponent } from "@igniteui/cli-core";

class IgcQrCodeComponent extends BaseComponent {
	/**
	 *
	 */
	constructor() {
		super(__dirname);
		this.name  = "Qr Code";
		this.group = "Data Entry & Display";
		this.description = `Renders a scannable QR code as an SVG based on the provided value`;
	}
}
module.exports = new IgcQrCodeComponent();
