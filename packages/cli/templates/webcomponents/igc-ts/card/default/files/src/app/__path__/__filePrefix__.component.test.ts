import { expect } from '@open-wc/testing';
import { IgcCardComponent } from './card.component.ts';

describe('IgcCardComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('card');
    expect(element).to.be.instanceOf(IgcCardComponent);
  });
});
