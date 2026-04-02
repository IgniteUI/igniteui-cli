import { readFileSync } from 'fs';
import type {
  ReactDocEntry,
  ReactDocSection,
  TypeDocComment,
  TypeDocReflection,
  TypeDocType,
} from './types/react-json-parser.types.js';

export type { ReactDocEntry, ReactDocSection } from './types/react-json-parser.types.js';

function isTypeDocReflection(value: unknown): value is TypeDocReflection {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<TypeDocReflection>;
  return typeof candidate.name === 'string' && typeof candidate.kind === 'number';
}

export class ReactJsonParser {
  private model: TypeDocReflection;

  constructor(jsonPath: string) {
    const content = readFileSync(jsonPath, 'utf-8');
    const parsed = JSON.parse(content) as unknown;
    if (!isTypeDocReflection(parsed)) {
      throw new Error(`Invalid React TypeDoc model at ${jsonPath}`);
    }
    this.model = parsed;
  }

  getComponent(componentName: string): ReactDocEntry | null {
    // Find component in the model
    const component = this.findReflection(this.model, componentName);
    if (!component) return null;

    return {
      name: component.name,
      type: this.getReflectionType(component.kind),
      summary: this.extractSummary(component.comment),
      properties: this.extractProperties(component),
      methods: this.extractMethods(component),
      events: this.extractEvents(component),
      slots: this.extractSlots(component.comment),
      cssParts: this.extractCssParts(component.comment),
    };
  }

  getAllComponents(): string[] {
    const components: string[] = [];
    this.collectComponents(this.model, components);
    return components;
  }

  private findReflection(node: TypeDocReflection, name: string): TypeDocReflection | null {
    if (node.name === name) return node;
    
    if (Array.isArray(node.children)) {
      for (const child of node.children.filter(isTypeDocReflection)) {
        const found = this.findReflection(child, name);
        if (found) return found;
      }
    }
    
    return null;
  }

  private collectComponents(node: TypeDocReflection, list: string[]) {
    // Kind 128 = Class
    if (node.kind === 128 && node.name.startsWith('Igr')) {
      list.push(node.name);
    }
    
    if (Array.isArray(node.children)) {
      for (const child of node.children.filter(isTypeDocReflection)) {
        this.collectComponents(child, list);
      }
    }
  }

  private extractSummary(comment?: TypeDocComment): string {
    if (!comment?.summary) return '';
    return comment.summary.map((s) => s.text).join('');
  }

  private extractProperties(component: TypeDocReflection): ReactDocEntry['properties'] {
    if (!component.children) return [];
    
    // Find Properties category
    const propsCategory = component.categories?.find(c => c.title === 'Properties');
    if (!propsCategory) return [];

    return propsCategory.children
      .map(id => component.children!.find(c => c.id === id))
      .filter((prop): prop is TypeDocReflection => Boolean(prop))
      .map(prop => ({
        name: prop.name,
        type: this.formatType(prop.type),
        description: this.extractSummary(prop.comment),
      }));
  }

  private extractMethods(component: TypeDocReflection): ReactDocEntry['methods'] {
    if (!component.children) return [];
    
    const methodsCategory = component.categories?.find(c => c.title === 'Methods');
    if (!methodsCategory) return [];

    return methodsCategory.children
      .map(id => component.children!.find(c => c.id === id))
      .filter((method): method is TypeDocReflection => Boolean(method))
      .map(method => ({
        name: method.name,
        signature: this.formatSignature(method),
        description: this.extractSummary(method.comment),
      }));
  }

  private extractEvents(component: TypeDocReflection): ReactDocEntry['events'] {
    if (!component.children) return [];
    
    const eventsCategory = component.categories?.find(c => c.title === 'Events');
    if (!eventsCategory) return [];

    return eventsCategory.children
      .map(id => component.children!.find(c => c.id === id))
      .filter((event): event is TypeDocReflection => Boolean(event))
      .map(event => ({
        name: event.name,
        type: this.formatType(event.type),
        description: this.extractSummary(event.comment),
      }));
  }

  private extractSlots(comment?: TypeDocComment): string[] {
    if (!comment?.blockTags) return [];
    return comment.blockTags
      .filter((tag) => tag.tag === '@slot')
      .map((tag) => (tag.content ?? []).map((c) => c.text).join(''));
  }

  private extractCssParts(comment?: TypeDocComment): string[] {
    if (!comment?.blockTags) return [];
    return comment.blockTags
      .filter((tag) => tag.tag === '@csspart')
      .map((tag) => (tag.content ?? []).map((c) => c.text).join(''));
  }

  private formatType(type?: TypeDocType): string {
    if (!type) return 'any';
    if (type.type === 'intrinsic') return type.name ?? 'any';
    if (type.type === 'reference') return type.name ?? 'any';
    if (type.type === 'union' && Array.isArray(type.types)) {
      return type.types.map((t) => this.formatType(t)).join(' | ');
    }
    return JSON.stringify(type);
  }

  private formatSignature(method: TypeDocReflection): string {
    // Format method signature from signatures array
    if (method.signatures?.[0]) {
      const sig = method.signatures[0];
      const params = sig.parameters?.map((p) => 
        `${p.name}: ${this.formatType(p.type)}`
      ).join(', ') || '';
      const returnType = this.formatType(sig.type);
      return `${method.name}(${params}): ${returnType}`;
    }
    return method.name;
  }

  private getReflectionType(kind: number): string {
    const types: Record<number, string> = {
      128: 'class',
      256: 'interface',
      1024: 'property',
      2048: 'method',
      // ... add more as needed
    };
    return types[kind] || 'unknown';
  }

  formatAsMarkdown(entry: ReactDocEntry, section: ReactDocSection = 'all'): string {
    let md = `# ${entry.type}: ${entry.name}\n\n`;
    
    if (entry.summary) {
      md += `${entry.summary}\n\n`;
    }

    if (section === 'all' || section === 'properties') {
      if (entry.properties.length > 0) {
        md += `## Properties\n\n`;
        for (const prop of entry.properties) {
          md += `### ${prop.name}\n\n`;
          md += `**Type:** \`${prop.type}\`\n\n`;
          if (prop.description) {
            md += `${prop.description}\n\n`;
          }
        }
      }
    }

    if (section === 'all' || section === 'methods') {
      if (entry.methods.length > 0) {
        md += `## Methods\n\n`;
        for (const method of entry.methods) {
          md += `### ${method.signature}\n\n`;
          if (method.description) {
            md += `${method.description}\n\n`;
          }
        }
      }
    }

    if (section === 'all' || section === 'events') {
      if (entry.events.length > 0) {
        md += `## Events\n\n`;
        for (const event of entry.events) {
          md += `### ${event.name}\n\n`;
          md += `**Type:** \`${event.type}\`\n\n`;
          if (event.description) {
            md += `${event.description}\n\n`;
          }
        }
      }
    }

    if (entry.slots.length > 0) {
      md += `## Slots\n\n`;
      for (const slot of entry.slots) {
        md += `- ${slot}\n`;
      }
      md += `\n`;
    }

    if (entry.cssParts.length > 0) {
      md += `## CSS Parts\n\n`;
      for (const part of entry.cssParts) {
        md += `- ${part}\n`;
      }
      md += `\n`;
    }

    return md;
  }
}