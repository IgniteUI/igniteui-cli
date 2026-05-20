import { describe, expect, it } from 'vitest';
import { compareVersionDir, pickLatestVersionDir } from '../../lib/version-picker.js';

describe('compareVersionDir', () => {
  it('ranks latest above any parsable semver', () => {
    expect(compareVersionDir('latest', '21.0.x')).toBeLessThan(0);
    expect(compareVersionDir('21.0.x', 'latest')).toBeGreaterThan(0);
  });

  it('treats .x as higher than any concrete patch', () => {
    expect(compareVersionDir('21.0.x', '21.0.5')).toBeLessThan(0);
  });

  it('treats x in the minor slot as higher than any concrete minor', () => {
    expect(compareVersionDir('21.x.x', '21.5.0')).toBeLessThan(0);
    expect(compareVersionDir('21.x.x', '21.0.x')).toBeLessThan(0);
  });

  it('orders by major, then minor, then patch (descending)', () => {
    expect(compareVersionDir('21.0.x', '15.1.x')).toBeLessThan(0);
    expect(compareVersionDir('19.5.1', '18.0.0')).toBeLessThan(0);
    expect(compareVersionDir('19.5.1', '19.5.0')).toBeLessThan(0);
  });

  it('returns 0 for equal versions', () => {
    expect(compareVersionDir('21.0.x', '21.0.x')).toBe(0);
    expect(compareVersionDir('latest', 'latest')).toBe(0);
  });

  it('falls back to lex-descending for unparsable strings', () => {
    expect(compareVersionDir('beta', 'alpha')).toBeLessThan(0);
  });
});

describe('pickLatestVersionDir', () => {
  it('picks the highest semver from Angular-style versions', () => {
    expect(pickLatestVersionDir(['9.0.x', '15.1.x', '21.0.x'])).toBe('21.0.x');
  });

  it('picks the highest semver from React-style versions', () => {
    expect(pickLatestVersionDir(['17.5.0', '18.0.0', '19.5.1'])).toBe('19.5.1');
  });

  it('picks "latest" when present alongside concrete versions', () => {
    expect(pickLatestVersionDir(['5.0.0', 'latest'])).toBe('latest');
    expect(pickLatestVersionDir(['19.5.1', 'latest', '20.0.x'])).toBe('latest');
  });

  it('returns the only version when input has one entry', () => {
    expect(pickLatestVersionDir(['25.1.x'])).toBe('25.1.x');
    expect(pickLatestVersionDir(['latest'])).toBe('latest');
  });

  it('throws on empty input', () => {
    expect(() => pickLatestVersionDir([])).toThrow();
  });

  it('does not mutate the input array', () => {
    const input = ['9.0.x', '21.0.x', '15.1.x'];
    const snapshot = [...input];
    pickLatestVersionDir(input);
    expect(input).toEqual(snapshot);
  });
});
