/**
 * Converts igniteui-documentation `.mdx` (after its own `generate.mjs` step) into
 * the markdown shape the rest of the pipeline was built around:
 *
 *   <Sample src="/x/y" .../>            → <code-view iframe-src="…" github-src="x/y"></code-view>
 *   <ApiLink type="Grid" member="x"/>   → [`IgxGridComponent.x`](mcp:get_api_reference?…)
 *   <ApiRef types={["Splitter"]}/>      → API reference link list
 *   <DocsAside type="warning">…         → **Warning:** …
 *   <FaqItem question="…">…             → **Q: …**
 *   images, badges, MDX imports and {/* comments *\/} are dropped
 *
 * The `<code-view>` form is what inject-<fw>-docs.ts parses, so sample injection
 * stays unchanged. Token resolution mirrors `vitePluginPlatformTokens` in
 * igniteui-documentation/docs/xplat/astro.config.ts, which the docs site applies
 * at build time and generate.mjs does not.
 */

export type DocsPlatform = "Angular" | "React" | "WebComponents" | "Blazor";

export interface Replacement {
  name: string;
  value: string;
}

export interface ApiResolver {
  platform: string;
  prefix: string;
  /** lower-cased component name → canonical name, as built by buildCanonicalIndex */
  index: Map<string, string>;
}

export interface ConvertOptions {
  platform: DocsPlatform;
  replacements: Replacement[];
  /** `{environment:key}` values, e.g. the `production` block of Angular's environment.json. */
  environment?: Record<string, string>;
  api?: ApiResolver;
  stats?: ConvertStats;
}

export interface ConvertStats {
  samples: number;
  apiLinks: number;
  apiLinksResolved: number;
  unresolvedApiTypes: Map<string, number>;
}

export function createStats(): ConvertStats {
  return { samples: 0, apiLinks: 0, apiLinksResolved: 0, unresolvedApiTypes: new Map() };
}

// ---------- tokens ----------

const LEGACY_ENV: Record<string, string> = {
  infragisticsBaseUrl: "https://www.infragistics.com",
  sassApiUrl: "https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest",
  angularApiUrl: "https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest",
  AngularApiUrl: "https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest",
  wcApiUrl: "https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest",
  WebComponentsApiUrl: "https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest",
  ReactApiUrl: "https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest",
  BlazorApiUrl: "https://www.infragistics.com/products/ignite-ui-blazor/docs/typescript/latest",
};

export function sortReplacements(list: Array<{ name?: string; value?: string }>): Replacement[] {
  return list
    .filter((r): r is Replacement => !!r.name && r.value !== undefined)
    .sort((a, b) => b.name.length - a.name.length);
}

export function resolveTokens(content: string, replacements: Replacement[], environment: Record<string, string> = {}): string {
  let result = content;

  const compKey = result.match(/^---[\s\S]*?^_componentKey:\s*(\w+)/m)?.[1];
  if (compKey) {
    const prefix = `{${compKey}`;
    const componentTokens = replacements
      .filter((r) => r.name.startsWith(prefix))
      .map((r) => ({ name: `{Component${r.name.slice(prefix.length)}`, value: r.value }))
      .sort((a, b) => b.name.length - a.name.length);
    for (const { name, value } of componentTokens) result = result.replaceAll(name, value);
  }

  for (const { name, value } of replacements) result = result.replaceAll(name, value);

  // Demo base URLs are deliberately left in place: <code-view iframe-src> keeps
  // them as {environment:*} placeholders for inject-angular-docs.ts.
  result = result.replace(/\{environment:([^}]+)\}/g, (m, key: string) =>
    /DemosBaseUrl$|DemoBaseUrl$|^demosBaseUrl$/.test(key) ? m : (environment[key] ?? LEGACY_ENV[key] ?? "")
  );
  result = result.replace(/\{([A-Za-z][A-Za-z0-9]*(?:[-][A-Za-z0-9._]+)+)\}/g, (_m, inner) => inner);
  result = result.replace(/\{([A-Z][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)\}/g, "");
  return result;
}

// ---------- JSX tag parsing ----------

export type AttrValue = string | boolean | string[];

export interface JsxTag {
  name: string;
  attrs: Record<string, AttrValue>;
  selfClosing: boolean;
  start: number;
  end: number;
}

function parseExpression(expr: string): AttrValue {
  const trimmed = expr.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return trimmed;
  const str = trimmed.match(/^(["'`])([\s\S]*)\1$/);
  if (str) return str[2];
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return [...trimmed.matchAll(/(["'`])(.*?)\1/g)].map((m) => m[2]);
  }
  return trimmed;
}

/** Parse a tag starting at `start` (which must point at `<`). Returns null if malformed. */
export function parseTagAt(content: string, start: number): JsxTag | null {
  const nameMatch = /^<([A-Z][A-Za-z0-9]*)/.exec(content.slice(start, start + 64));
  if (!nameMatch) return null;
  const name = nameMatch[1];
  const attrs: Record<string, AttrValue> = {};
  let i = start + nameMatch[0].length;

  while (i < content.length) {
    while (/\s/.test(content[i] ?? "")) i++;
    if (content.startsWith("/>", i)) return { name, attrs, selfClosing: true, start, end: i + 2 };
    if (content[i] === ">") return { name, attrs, selfClosing: false, start, end: i + 1 };

    const attrMatch = /^[A-Za-z_:][\w:.-]*/.exec(content.slice(i, i + 64));
    if (!attrMatch) return null;
    const attr = attrMatch[0];
    i += attr.length;
    while (/\s/.test(content[i] ?? "")) i++;
    if (content[i] !== "=") {
      attrs[attr] = true;
      continue;
    }
    i++;
    while (/\s/.test(content[i] ?? "")) i++;

    const q = content[i];
    if (q === '"' || q === "'") {
      const close = content.indexOf(q, i + 1);
      if (close === -1) return null;
      attrs[attr] = content.slice(i + 1, close);
      i = close + 1;
    } else if (q === "{") {
      let depth = 0;
      let j = i;
      let inStr: string | null = null;
      for (; j < content.length; j++) {
        const c = content[j];
        if (inStr) {
          if (c === "\\") j++;
          else if (c === inStr) inStr = null;
        } else if (c === '"' || c === "'" || c === "`") inStr = c;
        else if (c === "{") depth++;
        else if (c === "}" && --depth === 0) break;
      }
      if (j >= content.length) return null;
      attrs[attr] = parseExpression(content.slice(i + 1, j));
      i = j + 1;
    } else {
      return null;
    }
  }
  return null;
}

function str(v: AttrValue | undefined): string | undefined {
  return typeof v === "string" ? v : undefined;
}

// ---------- code fences ----------

/** Apply `fn` to the parts of `content` that are outside fenced code blocks. */
export function mapOutsideFences(content: string, fn: (text: string) => string): string {
  const lines = content.split("\n");
  const out: string[] = [];
  let buffer: string[] = [];
  let fence: string | null = null;

  const flush = () => {
    if (buffer.length) out.push(fn(buffer.join("\n")));
    buffer = [];
  };

  for (const line of lines) {
    const m = /^\s*(`{3,}|~{3,})/.exec(line);
    if (fence) {
      out.push(line);
      if (m && m[1][0] === fence[0] && m[1].length >= fence.length && line.trim() === m[1]) fence = null;
    } else if (m) {
      flush();
      fence = m[1];
      out.push(line);
    } else {
      buffer.push(line);
    }
  }
  flush();
  return out.join("\n");
}

// ---------- component conversions ----------

const DV_PREFIXES = ["gauges/", "maps/", "excel/", "charts/"];

export function convertSample(tag: JsxTag, platform: DocsPlatform): string {
  const src = (str(tag.attrs.src) ?? "").replace(/^\/+|\/+$/g, "");
  const alt = (str(tag.attrs.alt) ?? "").replace(/"/g, "&quot;");
  const altAttr = alt ? ` alt="${alt}"` : "";

  if (platform !== "Angular") {
    return `<code-view github-src="${src}"${altAttr}></code-view>`;
  }

  const isDv = tag.attrs.dv === true || DV_PREFIXES.some((p) => src.startsWith(p));
  const base =
    tag.attrs.lob === true ? "lobDemosBaseUrl"
      : tag.attrs.crm === true ? "crmDemoBaseUrl"
        : isDv ? "dvDemosBaseUrl"
          : "demosBaseUrl";
  return `<code-view iframe-src="{environment:${base}}/${src}" github-src="${src}"${altAttr}></code-view>`;
}

function resolveApiType(type: string, prefixed: boolean, api: ApiResolver): string | undefined {
  const base = prefixed && !type.startsWith(api.prefix) ? `${api.prefix}${type}` : type;
  for (const candidate of [base, `${base}Component`, `${base}Directive`, `${base}Module`, type]) {
    const hit = api.index.get(candidate.toLowerCase());
    if (hit) return hit;
  }
  return undefined;
}

function apiRef(api: ApiResolver, component: string, member?: string): string {
  const params = new URLSearchParams({ platform: api.platform, component });
  if (member) params.set("member", member);
  return `mcp:get_api_reference?${params.toString()}`;
}

function codeSpan(text: string): string {
  return text.includes("`") ? `\`\` ${text} \`\`` : `\`${text}\``;
}

export function convertApiLink(tag: JsxTag, opts: ConvertOptions): string {
  const type = str(tag.attrs.type) ?? str(tag.attrs.module) ?? "";
  const member = str(tag.attrs.member);
  const label = str(tag.attrs.label);
  const prefixed = tag.attrs.prefixed !== false;

  if (tag.attrs.kind === "sass") return codeSpan(label ?? type);

  const api = opts.api;
  const baseName = prefixed && api && !type.startsWith(api.prefix) ? `${api.prefix}${type}` : type;
  const display = label ?? (member ? `${baseName}.${member}` : baseName);
  if (opts.stats) opts.stats.apiLinks++;

  const canonical = api ? resolveApiType(type, prefixed, api) : undefined;
  if (!canonical || !api) {
    if (opts.stats) {
      const key = baseName || "(empty)";
      opts.stats.unresolvedApiTypes.set(key, (opts.stats.unresolvedApiTypes.get(key) ?? 0) + 1);
    }
    return codeSpan(display);
  }
  if (opts.stats) opts.stats.apiLinksResolved++;
  return `[${codeSpan(display)}](${apiRef(api, canonical, member)})`;
}

export function convertApiRef(tag: JsxTag, opts: ConvertOptions): string {
  const types = Array.isArray(tag.attrs.types) ? tag.attrs.types : [str(tag.attrs.types) ?? ""].filter(Boolean);
  const links = types.map((t) => convertApiLink({ ...tag, name: "ApiLink", attrs: { type: t } }, opts));
  return links.length ? `API references: ${links.join(", ")}` : "";
}

const ASIDE_LABELS: Record<string, string> = {
  info: "Note",
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  caution: "Warning",
  danger: "Important",
  important: "Important",
};

function convertTag(tag: JsxTag, opts: ConvertOptions): string {
  switch (tag.name) {
    case "Sample":
      if (opts.stats) opts.stats.samples++;
      return convertSample(tag, opts.platform);
    case "ApiLink":
      return convertApiLink(tag, opts);
    case "ApiRef":
      return convertApiRef(tag, opts);
    case "DocsAside": {
      if (tag.selfClosing) return "";
      const label = ASIDE_LABELS[str(tag.attrs.type) ?? "info"] ?? "Note";
      const title = str(tag.attrs.title);
      return title ? `**${label}: ${title}**\n\n` : `**${label}:** `;
    }
    case "FaqItem": {
      const question = str(tag.attrs.question);
      return question ? `**Q: ${question}**\n\n` : "";
    }
    case "Anatomy": {
      const name = str(tag.attrs.name);
      const description = str(tag.attrs.description);
      return description ? `${name ? `**${name} anatomy:** ` : ""}${description}` : "";
    }
    default:
      return "";
  }
}

/**
 * Replace every MDX component tag in a text segment. `components` is the set of
 * tag names the file imports — anything else that looks like a tag (e.g. a
 * `<Grid>` mentioned in prose) is left untouched.
 */
function convertSegment(text: string, components: Set<string>, opts: ConvertOptions): string {
  let result = "";
  let pos = 0;

  while (pos < text.length) {
    const lt = text.indexOf("<", pos);
    if (lt === -1) break;

    const closing = /^<\/([A-Z][A-Za-z0-9]*)\s*>/.exec(text.slice(lt, lt + 64));
    if (closing && components.has(closing[1])) {
      result += text.slice(pos, lt);
      pos = lt + closing[0].length;
      continue;
    }

    const tag = components.size ? parseTagAt(text, lt) : null;
    if (!tag || !components.has(tag.name)) {
      result += text.slice(pos, lt + 1);
      pos = lt + 1;
      continue;
    }

    result += text.slice(pos, lt) + convertTag(tag, opts);
    pos = tag.end;
  }

  return result + text.slice(pos);
}

const IMPORT_RE = /^import\s+(?:(\w+)|\{([^}]*)\})\s+from\s+['"]([^'"]+)['"];?\s*$/;

/** Collect and remove the ESM import block MDX files carry after their frontmatter. */
export function extractImports(body: string): { body: string; components: Set<string> } {
  const components = new Set<string>();
  const lines = body.split("\n");
  const kept: string[] = [];
  let inPreamble = true;

  for (const line of lines) {
    if (inPreamble) {
      const m = IMPORT_RE.exec(line.trim());
      if (m) {
        const names = m[1] ? [m[1]] : (m[2] ?? "").split(",").map((n) => n.trim().split(/\s+as\s+/).pop()!);
        const isComponent = /\.astro$|components\/mdx/.test(m[3]);
        for (const n of names) if (n && isComponent) components.add(n);
        continue;
      }
      if (line.trim() !== "") inPreamble = false;
    }
    kept.push(line);
  }
  return { body: kept.join("\n"), components };
}

/** Components rendered by the docs site that never carry content for the DB. */
const ALWAYS_COMPONENTS = ["Sample", "ApiLink", "ApiRef", "DocsAside", "Image", "Badge", "Faq", "FaqItem", "Anatomy"];

export function convertMdx(content: string, opts: ConvertOptions): string {
  const resolved = resolveTokens(content.replace(/\r\n/g, "\n"), opts.replacements, opts.environment);

  const fm = /^---\n[\s\S]*?\n---\n?/.exec(resolved);
  const frontmatter = fm ? fm[0] : "";
  const { body, components } = extractImports(resolved.slice(frontmatter.length));
  for (const c of ALWAYS_COMPONENTS) components.add(c);

  const converted = mapOutsideFences(body, (text) => {
    let t = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
    t = convertSegment(t, components, opts);
    t = t.replace(/\\([{}<>])/g, "$1");
    return t.replace(/\n{3,}/g, "\n\n");
  });

  return frontmatter + converted.replace(/^\n+/, "");
}
