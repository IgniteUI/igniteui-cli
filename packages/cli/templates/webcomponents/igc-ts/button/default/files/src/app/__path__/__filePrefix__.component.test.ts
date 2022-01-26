import { expect } from '@open-wc/testing';
import { IgcButtonComponent } from './button.component.ts';

describe('IgcButtonComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('button');
    expect(element).to.be.instanceOf(IgcButtonComponent);
  });
});
