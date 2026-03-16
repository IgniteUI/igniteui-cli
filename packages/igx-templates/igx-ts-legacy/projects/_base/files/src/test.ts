import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js';
import 'zone.js/testing';

// guard against multiple initialization
if (!(globalThis as any).__angular_testbed_initialized__) {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  (globalThis as any).__angular_testbed_initialized__ = true;
}

afterEach(() => {
  getTestBed().resetTestingModule();
});
