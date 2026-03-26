import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RemoteDocsProvider } from '../../providers/RemoteDocsProvider.js';

const BACKEND_URL = 'https://fake-backend.example.com';

function mockFetch(status: number, body: string) {
  return vi.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    text: () => Promise.resolve(body),
  });
}

describe('RemoteDocsProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('listComponents()', () => {
    it('fetches from /api/docs with framework param', async () => {
      const fetch = mockFetch(200, '- IgxGrid\n- IgxCombo');
      vi.stubGlobal('fetch', fetch);

      const provider = new RemoteDocsProvider(BACKEND_URL);
      const result = await provider.listComponents('angular');

      expect(fetch).toHaveBeenCalledOnce();
      const url = new URL(fetch.mock.calls[0][0]);
      expect(url.pathname).toBe('/api/docs');
      expect(url.searchParams.get('framework')).toBe('angular');
      expect(result).toContain('IgxGrid');
    });

    it('includes filter param when provided', async () => {
      const fetch = mockFetch(200, '- IgxGrid');
      vi.stubGlobal('fetch', fetch);

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await provider.listComponents('angular', 'grid');

      const url = new URL(fetch.mock.calls[0][0]);
      expect(url.searchParams.get('filter')).toBe('grid');
    });

    it('omits filter param when not provided', async () => {
      const fetch = mockFetch(200, '');
      vi.stubGlobal('fetch', fetch);

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await provider.listComponents('angular');

      const url = new URL(fetch.mock.calls[0][0]);
      expect(url.searchParams.has('filter')).toBe(false);
    });

    it('throws when backend returns a non-ok status', async () => {
      vi.stubGlobal('fetch', mockFetch(500, 'Internal Server Error'));

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await expect(provider.listComponents('angular')).rejects.toThrow('500');
    });
  });

  describe('getDoc()', () => {
    it('returns the document text with found=true on success', async () => {
      vi.stubGlobal('fetch', mockFetch(200, '# IgxGrid\n\ncontent'));

      const provider = new RemoteDocsProvider(BACKEND_URL);
      const result = await provider.getDoc('angular', 'IgxGrid');

      expect(result.found).toBe(true);
      expect(result.text).toContain('IgxGrid');
    });

    it('fetches from /api/docs/{framework}/{name}', async () => {
      const fetch = mockFetch(200, '# content');
      vi.stubGlobal('fetch', fetch);

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await provider.getDoc('angular', 'IgxGrid');

      const url = new URL(fetch.mock.calls[0][0]);
      expect(url.pathname).toBe('/api/docs/angular/IgxGrid');
    });

    it('returns found=false and fallback text on 404', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        text: () => Promise.resolve('Not Found'),
      }));

      const provider = new RemoteDocsProvider(BACKEND_URL);
      const result = await provider.getDoc('angular', 'IgxNonExistent');

      expect(result.found).toBe(false);
      expect(result.text).toContain('IgxNonExistent');
      expect(result.text).toContain('list_components');
    });

    it('throws on non-404 errors', async () => {
      vi.stubGlobal('fetch', mockFetch(503, 'Service Unavailable'));

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await expect(provider.getDoc('angular', 'IgxGrid')).rejects.toThrow('503');
    });
  });

  describe('searchDocs()', () => {
    it('fetches from /api/docs/search with framework and query params', async () => {
      const fetch = mockFetch(200, '## Results\nIgxGrid');
      vi.stubGlobal('fetch', fetch);

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await provider.searchDocs('angular', 'grid selection');

      const url = new URL(fetch.mock.calls[0][0]);
      expect(url.pathname).toBe('/api/docs/search');
      expect(url.searchParams.get('framework')).toBe('angular');
      expect(url.searchParams.get('query')).toBe('grid selection');
    });

    it('throws when backend returns a non-ok status', async () => {
      vi.stubGlobal('fetch', mockFetch(502, 'Bad Gateway'));

      const provider = new RemoteDocsProvider(BACKEND_URL);
      await expect(provider.searchDocs('angular', 'grid')).rejects.toThrow('502');
    });
  });
});
