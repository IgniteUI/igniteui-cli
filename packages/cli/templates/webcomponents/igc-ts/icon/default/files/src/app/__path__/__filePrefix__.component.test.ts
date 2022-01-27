import { expect } from '@open-wc/testing';
import { IgcIconComponent } from 'igniteui-webcomponents';

describe('IgcIconComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('icon');
    expect(element).to.be.instanceOf(IgcIconComponent);
  });
});
