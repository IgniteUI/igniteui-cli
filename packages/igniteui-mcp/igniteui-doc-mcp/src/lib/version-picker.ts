const LATEST_SENTINEL = 'latest';

export function compareVersionDir(a: string, b: string): number {
  if (a === b) return 0;
  if (a === LATEST_SENTINEL) return -1;
  if (b === LATEST_SENTINEL) return 1;

  const at = parseVersion(a);
  const bt = parseVersion(b);
  if (at && bt) {
    for (let i = 0; i < 3; i++) {
      if (at[i] !== bt[i]) return bt[i] - at[i];
    }
    return 0;
  }
  return b.localeCompare(a);
}

export function pickLatestVersionDir(versions: string[]): string {
  if (versions.length === 0) {
    throw new Error('pickLatestVersionDir: empty input');
  }
  return [...versions].sort(compareVersionDir)[0];
}

function parseVersion(s: string): [number, number, number] | null {
  const m = /^v?(\d+)\.(\d+|x)\.(\d+|x)$/.exec(s);
  if (!m) return null;
  const major = parseInt(m[1], 10);
  const minor = m[2] === 'x' ? Number.MAX_SAFE_INTEGER : parseInt(m[2], 10);
  const patch = m[3] === 'x' ? Number.MAX_SAFE_INTEGER : parseInt(m[3], 10);
  return [major, minor, patch];
}
