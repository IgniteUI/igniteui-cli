import { describe, it, expect } from 'vitest';
import $(ClassName) from './$(path).js';

describe('IgcDockManagerComponent', () => {
  it('<app-$(path)> is an instance of $(ClassName)', async () => {
    const element = document.createElement('app-$(path)');
    expect(element).to.be.instanceOf($(ClassName));
  });
});
