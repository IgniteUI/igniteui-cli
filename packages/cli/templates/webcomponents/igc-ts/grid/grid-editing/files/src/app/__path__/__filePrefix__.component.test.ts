import { expect } from '@open-wc/testing';
import { IgcDataGridComponent } from 'igniteui-webcomponents-grids';

describe('IgcDataGridComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('grid-editing');
    expect(element).to.be.instanceOf(IgcDataGridComponent);
  });
});
