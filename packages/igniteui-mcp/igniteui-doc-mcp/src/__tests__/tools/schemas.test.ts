import { describe, expect, it } from 'vitest';
import { getApiReferenceSchema, searchApiSchema } from '../../tools/schemas.js';

describe('getApiReferenceSchema', () => {
  it('accepts valid input with all fields', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'IgxGridComponent',
      section: 'properties',
    }).success).toBe(true);
  });

  it('defaults section to "all" when omitted', () => {
    const result = getApiReferenceSchema.parse({ platform: 'angular', component: 'IgxGrid' });
    expect(result.section).toBe('all');
  });

  it('trims whitespace from component name', () => {
    const result = getApiReferenceSchema.parse({ platform: 'angular', component: '  IgxGrid  ' });
    expect(result.component).toBe('IgxGrid');
  });

  it('rejects empty component name', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: '' }).success).toBe(false);
  });

  it('rejects component name exceeding 128 characters', () => {
    expect(getApiReferenceSchema.safeParse({
      platform: 'angular',
      component: 'x'.repeat(129),
    }).success).toBe(false);
  });

  it('rejects unknown platform', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'blazor', component: 'IgbGrid' }).success).toBe(false);
    expect(getApiReferenceSchema.safeParse({ platform: 'vue', component: 'Component' }).success).toBe(false);
  });

  it('accepts all valid platforms', () => {
    for (const platform of ['angular', 'react', 'webcomponents'] as const) {
      expect(getApiReferenceSchema.safeParse({ platform, component: 'IgxGrid' }).success).toBe(true);
    }
  });

  it('accepts all valid section values', () => {
    for (const section of ['properties', 'methods', 'events', 'all'] as const) {
      expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: 'IgxGrid', section }).success).toBe(true);
    }
  });

  it('rejects invalid section values', () => {
    expect(getApiReferenceSchema.safeParse({ platform: 'angular', component: 'IgxGrid', section: 'slots' }).success).toBe(false);
  });
});

describe('searchApiSchema', () => {
  it('accepts a query without a platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid selection' }).success).toBe(true);
  });

  it('accepts a query with a valid platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid', platform: 'react' }).success).toBe(true);
  });

  it('trims whitespace from query', () => {
    const result = searchApiSchema.parse({ query: '  grid  ' });
    expect(result.query).toBe('grid');
  });

  it('rejects empty query', () => {
    expect(searchApiSchema.safeParse({ query: '' }).success).toBe(false);
  });

  it('rejects query exceeding 256 characters', () => {
    expect(searchApiSchema.safeParse({ query: 'x'.repeat(257) }).success).toBe(false);
  });

  it('rejects unknown platform', () => {
    expect(searchApiSchema.safeParse({ query: 'grid', platform: 'blazor' }).success).toBe(false);
  });

  it('platform is optional', () => {
    const result = searchApiSchema.safeParse({ query: 'grid' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.platform).toBeUndefined();
    }
  });
});
