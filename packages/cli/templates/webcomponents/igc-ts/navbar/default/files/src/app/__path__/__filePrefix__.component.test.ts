import { expect } from '@open-wc/testing';
import { IgcNavbarComponent } from './navbar.component.ts';

describe('IgcNavbarComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('navbar');
    expect(element).to.be.instanceOf(IgcNavbarComponent);
  });
});
