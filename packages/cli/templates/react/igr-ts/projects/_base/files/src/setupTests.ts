import '@testing-library/jest-dom'
import 'vitest-canvas-mock'
import ResizeObserver from 'resize-observer-polyfill'
import {vi} from 'vitest'

global.ResizeObserver = ResizeObserver;

HTMLElement.prototype.scrollIntoView = vi.fn();
HTMLElement.prototype.hidePopover = vi.fn();
HTMLElement.prototype.showPopover = vi.fn();
HTMLElement.prototype.togglePopover = vi.fn();