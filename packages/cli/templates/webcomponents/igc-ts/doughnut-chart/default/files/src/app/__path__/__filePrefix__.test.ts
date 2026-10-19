import { describe, it, expect } from 'vitest';
import $(ClassName) from './$(filePrefix).js';

describe('IgcDoughnutChartComponent', () => {
  it('<app-$(filePrefix)> is an instance of $(ClassName)', async () => {
    const element = document.createElement('app-$(filePrefix)');
    expect(element).to.be.instanceOf($(ClassName));
  });
});
