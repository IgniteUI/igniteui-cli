import { describe, it, expect } from 'vitest';
import App from './app.js';

describe('App', () => {
  it('<app-root> is an instance of App', async () => {
    const element = document.createElement('app-root');
    expect(element).to.be.instanceOf(App);
  });
});
