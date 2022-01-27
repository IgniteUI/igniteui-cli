import { expect } from '@open-wc/testing';
import { IgcRadioGroupComponent } from 'igniteui-webcomponents';

describe('IgcRadioGroupComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('radio-group');
    expect(element).to.be.instanceOf(IgcRadioGroupComponent);
  });
});
