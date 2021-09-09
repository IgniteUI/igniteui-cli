import { expect } from '@open-wc/testing';
import { HomeComponent } from './HomeComponent.js';
import './home-component.js';

describe('HomeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('home-component');
    expect(element).to.be.instanceOf(HomeComponent);
  });
});
