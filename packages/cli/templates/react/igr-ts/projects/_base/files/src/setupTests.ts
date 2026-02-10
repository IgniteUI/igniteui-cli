import { vi } from 'vitest';
import ResizeObserver from 'resize-observer-polyfill';

export function setupTestMocks() {
  globalThis.ResizeObserver = ResizeObserver;

  HTMLElement.prototype.scrollIntoView = vi.fn();
  HTMLElement.prototype.hidePopover = vi.fn();
  HTMLElement.prototype.showPopover = vi.fn();
  HTMLElement.prototype.togglePopover = vi.fn();
}
