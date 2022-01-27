import { expect } from '@open-wc/testing';
import { IgcSliderComponent } from 'igniteui-webcomponents';

describe('IgcSliderComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('slider');
    expect(element).to.be.instanceOf(IgcSliderComponent);
  });
});
