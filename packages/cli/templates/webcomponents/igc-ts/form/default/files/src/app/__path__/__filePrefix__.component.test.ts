import { expect } from '@open-wc/testing';
import { IgcFormComponent } from './form.component.ts';

describe('IgcFormComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('form');
    expect(element).to.be.instanceOf(IgcFormComponent);
  });
});
