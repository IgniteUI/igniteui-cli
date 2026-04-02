export const PLATFORMS = ['angular', 'webcomponents', 'react'] as const;
export type Platform = typeof PLATFORMS[number];

export type ApiSourceConfig =
  | { kind: 'markdown-index' }
  | { kind: 'typedoc-json'; jsonPath: string };

export interface PlatformConfig {
  key: Platform;
  displayName: string;
  submodulePath: string;
  docsPath: string;
  apiSource: ApiSourceConfig;
}

export const PLATFORM_CONFIGS: Record<Platform, PlatformConfig> = {
  angular: {
    key: 'angular',
    displayName: 'Angular',
    submodulePath: 'angular/igniteui-angular',
    docsPath: 'docs/angular/api',
    apiSource: { kind: 'markdown-index' },
  },
  react: {
    key: 'react',
    displayName: 'React',
    submodulePath: 'react/igniteui-react',
    docsPath: 'docs/react',
    apiSource: {
      kind: 'typedoc-json',
      jsonPath: 'docs/react/igniteui-react.json',
    },
  },
  webcomponents: {
    key: 'webcomponents',
    displayName: 'Web Components',
    submodulePath: 'webcomponents/igniteui-webcomponents',
    docsPath: 'docs/webcomponents/api',
    apiSource: { kind: 'markdown-index' },
  },
  // TODO: Add Blazor config when ready
};

// Helper to get only enabled platforms
export function getPlatforms(): PlatformConfig[] {
  return Object.values(PLATFORM_CONFIGS);
}

export function getPlatformConfig(platform: Platform): PlatformConfig {
  return PLATFORM_CONFIGS[platform];
}