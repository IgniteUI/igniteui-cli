import { expect } from '@open-wc/testing';
import { IgcIconButtonComponent } from 'igniteui-webcomponents';

describe('IgcIconButtonComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('icon-button');
    expect(element).to.be.instanceOf(IgcIconButtonComponent);
  });
});
