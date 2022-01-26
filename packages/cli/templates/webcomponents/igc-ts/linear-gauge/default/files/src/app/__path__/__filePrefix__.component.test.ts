import { expect } from '@open-wc/testing';
import { IgcLinearGaugeModule } from 'igniteui-webcomponents-gauges';

describe('IgcLinearGaugeModule', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('linear-gauge');
    expect(element).to.be.instanceOf(IgcLinearGaugeModule);
  });
});
