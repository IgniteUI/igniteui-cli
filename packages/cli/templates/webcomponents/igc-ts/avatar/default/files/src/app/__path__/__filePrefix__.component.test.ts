import { expect } from '@open-wc/testing';
import { IgcAvatarComponent } from 'igniteui-webcomponents';

describe('IgcAvatarComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('avatar');
    expect(element).to.be.instanceOf(IgcAvatarComponent);
  });
});
