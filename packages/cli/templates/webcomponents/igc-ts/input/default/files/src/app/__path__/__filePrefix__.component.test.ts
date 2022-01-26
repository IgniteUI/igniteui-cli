import { expect } from '@open-wc/testing';
import { IgcInputComponent } from './input.component.ts';

describe('IgcInputComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('input');
    expect(element).to.be.instanceOf(IgcInputComponent);
  });
});
