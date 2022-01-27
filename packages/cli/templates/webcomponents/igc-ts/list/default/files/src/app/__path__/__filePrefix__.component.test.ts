import { expect } from '@open-wc/testing';
import { IgcListComponent } from 'igniteui-webcomponents';

describe('IgcListComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('list');
    expect(element).to.be.instanceOf(IgcListComponent);
  });
});
