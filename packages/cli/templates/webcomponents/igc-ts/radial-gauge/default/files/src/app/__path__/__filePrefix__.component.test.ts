import { expect } from '@open-wc/testing';
import { IgcRadialGaugeModule } from './radial-gauge.component.ts';

describe('IgcRadialGaugeModule', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('radial-gauge');
    expect(element).to.be.instanceOf(IgcRadialGaugeModule);
  });
});
