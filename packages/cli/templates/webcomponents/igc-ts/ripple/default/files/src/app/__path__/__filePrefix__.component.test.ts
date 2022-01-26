import { expect } from '@open-wc/testing';
import { IgcRippleComponent } from './ripple.component.ts';

describe('IgcRippleComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('ripple');
    expect(element).to.be.instanceOf(IgcRippleComponent);
  });
});
