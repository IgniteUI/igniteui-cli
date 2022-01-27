import { expect } from '@open-wc/testing';
import { IgcCheckboxComponent } from 'igniteui-webcomponents';

describe('IgcCheckboxComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('checkbox');
    expect(element).to.be.instanceOf(IgcCheckboxComponent);
  });
});
