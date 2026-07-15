export const PLATFORMS = ['angular', 'webcomponents', 'react', 'blazor'] as const;
export type Platform = typeof PLATFORMS[number];

export type ApiSourceConfig =
  | { kind: 'llms-full-txt'; docsPath: string };

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
    submodulePath: 'blazor/api-docs',
    docsPath: 'docs/angular-api',
    apiSource: { kind: 'llms-full-txt', docsPath: 'docs/angular-api' },
  },
  react: {
    key: 'react',
    displayName: 'React',
    submodulePath: 'blazor/api-docs',
    docsPath: 'docs/react-api',
    apiSource: { kind: 'llms-full-txt', docsPath: 'docs/react-api' },
  },
  webcomponents: {
    key: 'webcomponents',
    displayName: 'Web Components',
    submodulePath: 'blazor/api-docs',
    docsPath: 'docs/webcomponents-api',
    apiSource: { kind: 'llms-full-txt', docsPath: 'docs/webcomponents-api' },
  },
  blazor: {
    key: 'blazor',
    displayName: 'Blazor',
    submodulePath: 'blazor/api-docs',
    docsPath: 'docs/blazor-api',
    apiSource: { kind: 'llms-full-txt', docsPath: 'docs/blazor-api' },
  },
};

// Returns all platform configs
export function getPlatforms(): PlatformConfig[] {
  return Object.values(PLATFORM_CONFIGS);
}

export function getPlatformConfig(platform: Platform): PlatformConfig {
  return PLATFORM_CONFIGS[platform];
}