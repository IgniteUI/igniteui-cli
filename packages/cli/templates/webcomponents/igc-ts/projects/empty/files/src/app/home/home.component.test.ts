import { expect } from '@open-wc/testing';
import { HomeComponent } from './home.component.js';

describe('HomeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('lit-home');
    expect(element).to.be.instanceOf(HomeComponent);
  });
});
