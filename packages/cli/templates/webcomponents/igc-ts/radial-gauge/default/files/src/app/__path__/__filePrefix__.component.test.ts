import { expect } from '@open-wc/testing';
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';

describe('IgcRadialGaugeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('radial-gauge');
    expect(element).to.be.instanceOf(IgcRadialGaugeComponent);
  });
});
