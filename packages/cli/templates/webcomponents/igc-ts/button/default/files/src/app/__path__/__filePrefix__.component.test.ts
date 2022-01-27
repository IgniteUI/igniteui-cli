import { expect } from '@open-wc/testing';
import { IgcButtonComponent } from 'igniteui-webcomponents';

describe('IgcButtonComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('button');
    expect(element).to.be.instanceOf(IgcButtonComponent);
  });
});
