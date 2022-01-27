import { expect } from '@open-wc/testing';
import { IgcPieChartComponent } from 'igniteui-webcomponents-charts';

describe('IgcPieChartComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('pie-chart');
    expect(element).to.be.instanceOf(IgcPieChartComponent);
  });
});
