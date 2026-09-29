import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { ApiDocLoader } from '../lib/api-doc-loader.js';
import { searchApiDocs, extractSection, extractMember } from '../lib/api-doc-search.js';
import type { ImportResolver, ResolvedImport } from '../lib/import-resolver.js';
import type { GetApiReferenceParams, ResolveImportParams, SearchApiParams } from './schemas.js';
import { getPlatformConfig, PLATFORMS, type Platform } from '../config/platforms.js';

export function createGetApiReferenceHandler(docLoader: ApiDocLoader) {
  return async (params: GetApiReferenceParams): Promise<CallToolResult> => {
    const { platform, section = 'all' } = params;
    let { component, member } = params;

    // Hardening: tolerate "Component#member" being passed in `component`.
    // The rewrite step encodes member as `&member=`, but defensive parsing here
    // means a stray fragment-style ref still resolves.
    if (component.includes('#')) {
      const [head, ...rest] = component.split('#');
      component = head.trim();
      if (!member && rest.length > 0) {
        const tail = rest.join('#').trim();
        if (tail) member = tail;
      }
    }

    // Agents that read `member` as required send placeholders like "*" or ".*"
    // when they want the whole entry. Anything with no letters or digits cannot
    // name a real member, so treat it as omitted rather than failing.
    if (member && !/[A-Za-z0-9]/.test(member)) {
      member = undefined;
    }

    // ApiDocLoader.get is exact-first, then case-insensitive and generic-stripped
    // (IgbCombo → IgbCombo<T>).
    const entry = docLoader.get(platform, component);

    if (!entry) {
      const platformName = getPlatformConfig(platform).displayName;
      return {
        content: [{
          type: "text",
          text: `API reference for "${component}" not found in ${platformName}. Use search_api to find available components.`
        }],
        isError: true,
      };
    }
    const resolvedComponent = entry.component;

    const content = entry.content;
    if (!content) {
      return {
        content: [{
          type: "text",
          text: `API content for "${resolvedComponent}" is not available in memory.`
        }],
        isError: true,
      };
    }

    // Member-targeted lookup takes precedence over section.
    if (member) {
      const match = extractMember(content, member);
      if (match) {
        const text = `${entry.component}.${match.name} (${match.section}):\n${match.line}`;
        return { content: [{ type: "text", text }] };
      }
      return {
        content: [{
          type: "text",
          text: `Member "${member}" not found on ${entry.component}. Use search_api or call get_api_reference without "member" to see the full entry.`
        }],
        isError: true,
      };
    }

    // Extract specific section if requested
    if (section !== 'all') {
      const extracted = extractSection(content, section);
      if (extracted) {
        const header = `# ${entry.component} (${entry.platform}) - ${section}\n\n`;
        return { content: [{ type: "text", text: header + extracted }] };
      }
    }

    return { content: [{ type: "text", text: content }] };
  };
}

export function createSearchApiHandler(docLoader: ApiDocLoader) {
  return async (params: SearchApiParams): Promise<CallToolResult> => {
    const { platform, query } = params;

    const docs = docLoader.search({ platform });
    const hits = searchApiDocs(docs, query, 10);

    if (hits.length === 0) {
      const platformText = platform ? ` in ${getPlatformConfig(platform).displayName}` : '';
      return {
        content: [{
          type: "text",
          text: `No results found for "${query}"${platformText}.`
        }]
      };
    }

    const lines = hits.map(h => {
      const platformTag = `[${h.entry.platform}]`;
      const typeTag = `[${h.entry.type}]`;
      const kwTag = h.entry.keywords.length
        ? `\nKeywords: ${h.entry.keywords.join(", ")}`
        : "";
      return `**${h.entry.component}** ${platformTag} ${typeTag} (${h.matches} matches)${kwTag}\n${h.excerpt}`;
    });

    const frameworks = new Set(hits.map(h => h.entry.platform));
    const crossPlatformWarning = !platform && frameworks.size > 1
      ? `⚠ Results span multiple frameworks (${[...frameworks].join(', ')}). Only use entries that match your target framework — never apply APIs, events, or binding syntax from one framework to another.\n\n`
      : '';

    return { content: [{ type: "text", text: crossPlatformWarning + lines.join("\n\n") }] };
  };
}

const TYPE_ONLY_KINDS = new Set(['interface', 'type']);
const BLAZOR_CONTROLS_PACKAGES = new Set(['IgniteUI.Blazor', 'IgniteUI.Blazor.Lite', 'IgniteUI.Blazor.GridLite']);

function groupByModule(matches: ResolvedImport[]): Map<string, ResolvedImport[]> {
  const groups = new Map<string, ResolvedImport[]>();
  for (const m of [...matches].sort((a, b) => a.module.localeCompare(b.module))) {
    const list = groups.get(m.module) ?? [];
    if (!list.some(x => x.symbol === m.symbol)) list.push(m);
    groups.set(m.module, list);
  }
  return groups;
}

function formatEsImports(matches: ResolvedImport[]): string[] {
  const lines: string[] = [];
  for (const [module, list] of groupByModule(matches)) {
    const names = [...list]
      .sort((a, b) => a.symbol.localeCompare(b.symbol))
      .map(m => (TYPE_ONLY_KINDS.has(m.kind ?? '') ? `type ${m.symbol}` : m.symbol));
    lines.push(`import { ${names.join(', ')} } from '${module}';`);
  }
  return ['```ts', ...lines, '```'];
}

function formatBlazor(matches: ResolvedImport[]): string[] {
  const lines: string[] = [];
  const groups = groupByModule(matches);
  if ([...groups.keys()].some(p => BLAZOR_CONTROLS_PACKAGES.has(p))) {
    lines.push('```razor', '@using IgniteUI.Blazor.Controls', '```', '');
  }
  for (const [pkg, list] of groups) {
    const names = list.map(m => (m.alsoIn ? `${m.symbol} (also in ${m.alsoIn.map(p => `\`${p}\``).join(', ')})` : m.symbol));
    lines.push(`- NuGet \`${pkg}\`: ${names.join(', ')}`);
  }

  lines.push('', 'Notes:');
  lines.push('- nuget.org ships trial builds as `<Package>.Trial` (e.g. `IgniteUI.Blazor.Trial`); the licensed Infragistics feed uses the plain package id.');
  const otherPackages = [...groups.keys()].filter(p => !BLAZOR_CONTROLS_PACKAGES.has(p));
  if (otherPackages.length > 0) {
    lines.push(`- The \`@using\` namespace for ${otherPackages.map(p => `\`${p}\``).join(', ')} is not listed here; check the package's API reference.`);
  }
  const modules = [...new Set(matches.flatMap(m => (m.registerModule ? [m.registerModule] : [])))];
  if (modules.length > 0) {
    lines.push(`- Register the component modules in Program.cs: \`builder.Services.AddIgniteUIBlazor(${modules.map(m => `typeof(${m})`).join(', ')});\``);
  }
  return lines;
}

function formatPlatform(platform: Platform, matches: ResolvedImport[]): string {
  const lines = [`## ${getPlatformConfig(platform).displayName}`, ''];
  if (platform === 'blazor') {
    return [...lines, ...formatBlazor(matches)].join('\n');
  }

  lines.push(...formatEsImports(matches));
  const notes: string[] = [];
  if (platform === 'webcomponents') {
    const toDefine = matches
      .filter(m => m.module === 'igniteui-webcomponents' && m.symbol.endsWith('Component'))
      .map(m => m.symbol);
    if (toDefine.length > 0) {
      notes.push(`Import \`defineComponents\` from \`igniteui-webcomponents\`, then register the elements once at startup: \`defineComponents(${toDefine.join(', ')});\`.`);
    }
    if (matches.some(m => m.module === 'igniteui-webcomponents-grids/grids')) {
      notes.push("Grid elements are registered by the side-effect import `import 'igniteui-webcomponents-grids/grids/combined';`.");
    }
  }
  for (const m of matches.filter(m => m.alsoIn)) {
    notes.push(`\`${m.symbol}\` is also exported by ${m.alsoIn!.map(p => `\`${p}\``).join(', ')}; use whichever package the project already depends on.`);
  }
  notes.push(`If package.json depends on the \`@infragistics/\`-scoped (licensed) build of a package, keep that scope with the same path, e.g. \`@infragistics/${matches[0].module}\`.`);

  lines.push('', 'Notes:', ...notes.map(n => `- ${n}`));
  return lines.join('\n');
}

export function createResolveImportHandler(resolver: ImportResolver) {
  return async (params: ResolveImportParams): Promise<CallToolResult> => {
    const { symbols, platform } = params;
    const results = symbols.map(s => resolver.resolve(s, platform));

    const byPlatform = new Map<Platform, ResolvedImport[]>();
    for (const m of results.flatMap(r => r.matches)) {
      byPlatform.set(m.platform, [...(byPlatform.get(m.platform) ?? []), m]);
    }

    const sections: string[] = [];
    const ambiguous = results.filter(r => r.matches.length > 1);
    if (ambiguous.length > 0) {
      const names = ambiguous.map(r => `"${r.query}"`).join(', ');
      sections.push(`⚠ ${names} ${ambiguous.length > 1 ? 'exist' : 'exists'} in several frameworks. Use only the section for your target framework, or pass \`platform\`.`);
    }

    for (const p of PLATFORMS) {
      const list = byPlatform.get(p);
      if (list) sections.push(formatPlatform(p, list));
    }

    const unresolved = results.filter(r => r.matches.length === 0);
    if (unresolved.length > 0) {
      const scope = platform ? ` in ${getPlatformConfig(platform).displayName}` : '';
      const lines = unresolved.map(r => {
        const hint = r.suggestions.length > 0 ? ` Did you mean: ${r.suggestions.join(', ')}?` : '';
        return `- \`${r.query}\` — not found${scope}.${hint}`;
      });
      sections.push(['## Not resolved', '', ...lines, '', 'Confirm the exact name with search_api before importing it.'].join('\n'));
    }

    return {
      content: [{ type: "text", text: sections.join('\n\n') }],
      ...(byPlatform.size === 0 ? { isError: true } : {}),
    };
  };
}