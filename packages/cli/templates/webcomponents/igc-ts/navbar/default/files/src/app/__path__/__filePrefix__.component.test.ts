import { expect } from '@open-wc/testing';
import $(ClassName) from './$(path)';

describe('IgcNavbarComponent', () => {
  it('<app-$(path)> is an instance of $(ClassName)', async () => {
    const element = document.createElement('app-$(path)');
    expect(element).to.be.instanceOf($(ClassName));
  });
});
