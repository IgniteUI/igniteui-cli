import { expect } from '@open-wc/testing';
import { IgcSwitchComponent } from 'igniteui-webcomponents';

describe('IgcSwitchComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('switch');
    expect(element).to.be.instanceOf(IgcSwitchComponent);
  });
});
