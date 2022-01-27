import { expect } from '@open-wc/testing';
import { IgcCalendarComponent } from 'igniteui-webcomponents';

describe('IgcCalendarComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('calendar');
    expect(element).to.be.instanceOf(IgcCalendarComponent);
  });
});
