export interface TypeDocText {
  text: string;
}

export interface TypeDocBlockTag {
  tag: string;
  content?: TypeDocText[];
}

export interface TypeDocComment {
  summary?: TypeDocText[];
  blockTags?: TypeDocBlockTag[];
}

export interface TypeDocType {
  type?: string;
  name?: string;
  types?: TypeDocType[];
}

export interface TypeDocParameter {
  name: string;
  type?: TypeDocType;
}

export interface TypeDocSignature {
  parameters?: TypeDocParameter[];
  type?: TypeDocType;
}

export interface TypeDocCategory {
  title: string;
  children: number[];
}

export interface TypeDocReflection {
  id: number;
  name: string;
  kind: number;
  comment?: TypeDocComment;
  children?: TypeDocReflection[];
  type?: TypeDocType;
  signatures?: TypeDocSignature[];
  categories?: TypeDocCategory[];
}

export interface ReactDocEntry {
  name: string;
  type: string;
  summary: string;
  properties: Array<{ name: string; type: string; description: string }>;
  methods: Array<{ name: string; signature: string; description: string }>;
  events: Array<{ name: string; type: string; description: string }>;
  slots: string[];
  cssParts: string[];
}

export type ReactDocSection = 'properties' | 'methods' | 'events' | 'all';