import { describe, expect, it } from 'vitest';
import { PLATFORMS, PLATFORM_CONFIGS, getPlatforms, getPlatformConfig } from '../../config/platforms.js';
import type { Platform, PlatformConfig } from '../../config/platforms.js';

describe('PLATFORMS', () => {
  it('includes angular, react, and webcomponents', () => {
    expect(PLATFORMS).toContain('angular');
    expect(PLATFORMS).toContain('react');
    expect(PLATFORMS).toContain('webcomponents');
  });

  it('has exactly 3 entries', () => {
    expect(PLATFORMS).toHaveLength(3);
  });
});

describe('PLATFORM_CONFIGS', () => {
  it('has a config for every platform', () => {
    for (const platform of PLATFORMS) {
      expect(PLATFORM_CONFIGS[platform]).toBeDefined();
      expect(PLATFORM_CONFIGS[platform].key).toBe(platform);
    }
  });

  it('angular uses llms-full-txt api source', () => {
    const source = PLATFORM_CONFIGS.angular.apiSource;
    expect(source.kind).toBe('llms-full-txt');
    if (source.kind === 'llms-full-txt') {
      expect(source.docsPath).toContain('angular-api');
    }
  });

  it('react uses llms-full-txt api source', () => {
    const source = PLATFORM_CONFIGS.react.apiSource;
    expect(source.kind).toBe('llms-full-txt');
    if (source.kind === 'llms-full-txt') {
      expect(source.docsPath).toBeDefined();
      expect(source.docsPath).toContain('react-api');
    }
  });

  it('webcomponents uses llms-full-txt api source', () => {
    expect(PLATFORM_CONFIGS.webcomponents.apiSource.kind).toBe('llms-full-txt');
  });

  it('each config has required fields', () => {
    for (const platform of PLATFORMS) {
      const config = PLATFORM_CONFIGS[platform];
      expect(config.displayName).toBeTruthy();
      expect(config.submodulePath).toBeTruthy();
      expect(config.docsPath).toBeTruthy();
    }
  });
});

describe('getPlatforms()', () => {
  it('returns an array of PlatformConfig objects', () => {
    const platforms = getPlatforms();
    expect(platforms).toBeInstanceOf(Array);
    expect(platforms.length).toBeGreaterThan(0);
  });

  it('returns one config per platform', () => {
    const platforms = getPlatforms();
    expect(platforms).toHaveLength(PLATFORMS.length);
  });

  it('each returned config has a key matching a PLATFORMS entry', () => {
    const keys = getPlatforms().map(p => p.key);
    for (const platform of PLATFORMS) {
      expect(keys).toContain(platform);
    }
  });
});

describe('getPlatformConfig()', () => {
  it('returns the correct config for angular', () => {
    const config = getPlatformConfig('angular');
    expect(config.key).toBe('angular');
    expect(config.displayName).toBe('Angular');
  });

  it('returns the correct config for react', () => {
    const config = getPlatformConfig('react');
    expect(config.key).toBe('react');
    expect(config.displayName).toBe('React');
  });

  it('returns the correct config for webcomponents', () => {
    const config = getPlatformConfig('webcomponents');
    expect(config.key).toBe('webcomponents');
    expect(config.displayName).toBe('Web Components');
  });
});
