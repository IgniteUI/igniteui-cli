import { expect } from '@open-wc/testing';
import { IgcDockManagerComponent } from 'igniteui-dockmanager';

describe('IgcDockManagerComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('dock-manager');
    expect(element).to.be.instanceOf(IgcDockManagerComponent);
  });
});
