import { expect } from '@open-wc/testing';
import { IgcFinancialChartComponent } from './financial-chart.component.ts';

describe('IgcFinancialChartComponent', () => {
  it('<my-element> is an instance of MyElement', async () => {
    const element = document.createElement('financial-chart');
    expect(element).to.be.instanceOf(IgcFinancialChartComponent);
  });
});
