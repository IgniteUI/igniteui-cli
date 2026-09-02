import { describe, it, expect } from 'vitest';
import $(ClassName) from './$(path).js';

describe('IgcToggleButtonComponent', () => {
  it('<app-$(path)> is an instance of $(ClassName)', async () => {
    const element = document.createElement('app-$(path)');
    expect(element).to.be.instanceOf($(ClassName));
  });

  it('clicking a toggle button updates the displayed active formats', async () => {
    const element = document.createElement('app-$(path)') as $(ClassName);
    document.body.appendChild(element);
    await element.updateComplete;

    const status = element.shadowRoot!.querySelector('[data-testid="status"]')!;
    expect(status.textContent).to.contain('bold');
    expect(status.textContent).to.not.contain('italic');

    const italicButton = element.shadowRoot!.querySelector(
      'igc-toggle-button[value="italic"]'
    ) as HTMLElement;
    italicButton.click();
    await element.updateComplete;

    expect(status.textContent).to.contain('italic');

    element.remove();
  });
});
