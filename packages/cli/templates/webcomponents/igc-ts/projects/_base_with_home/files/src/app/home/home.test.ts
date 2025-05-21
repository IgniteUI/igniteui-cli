import { describe, it, expect } from 'vitest';
import { HomeComponent } from './home.js';

describe('HomeComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('app-home');
    expect(element).to.be.instanceOf(HomeComponent);
  });
});
