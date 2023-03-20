import { expect } from '@open-wc/testing';
import { HomeComponent } from './home.ts';

describe('HomeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('app-home');
    expect(element).to.be.instanceOf(HomeComponent);
  });
});
