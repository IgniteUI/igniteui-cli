import { expect } from '@open-wc/testing';
import { IgcBadgeComponent } from './badge.component.ts';

describe('IgcBadgeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('badge');
    expect(element).to.be.instanceOf(IgcBadgeComponent);
  });
});
