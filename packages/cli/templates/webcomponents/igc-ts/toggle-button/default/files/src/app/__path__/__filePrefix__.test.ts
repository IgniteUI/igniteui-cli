import { describe, it, expect } from 'vitest';
import $(ClassName) from './$(path).js';

describe('IgcToggleButtonComponent', () => {
  it('<app-$(path)> is an instance of $(ClassName)', async () => {
    const element = document.createElement('app-$(path)');
    expect(element).to.be.instanceOf($(ClassName));
  });

  it('renders toggle buttons with expected initial states', async () => {
    const element = document.createElement('app-$(path)') as $(ClassName);
    document.body.appendChild(element);
    await element.updateComplete;

    const emailButton = element.shadowRoot!.querySelector('igc-toggle-button[value="email"]');
    const pushButton = element.shadowRoot!.querySelector('igc-toggle-button[value="push"]');

    expect(emailButton).to.not.equal(null);
    expect(pushButton).to.not.equal(null);
    expect((emailButton as HTMLElement).hasAttribute('selected')).to.equal(true);
    expect((pushButton as HTMLElement).hasAttribute('disabled')).to.equal(true);

    element.remove();
  });
});
