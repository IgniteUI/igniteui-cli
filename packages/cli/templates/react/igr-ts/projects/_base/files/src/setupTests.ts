import '@testing-library/jest-dom'
import 'vitest-canvas-mock'
import ResizeObserver from 'resize-observer-polyfill'

global.ResizeObserver = ResizeObserver;
