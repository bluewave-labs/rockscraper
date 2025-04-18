export type RoutesType = 'dashboard' | 'playground' | 'logs-data' | 'settings';

export type NodesType = 'random' | 'continent' | 'country';

export interface CodeByLanguage {
  language: string;
  code: string;
}

// Type for schema property types
type SchemaPropertyType = {
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  properties?: {
    [key: string]: SchemaPropertyType;
  };
};

// Type for the schema itself
export type ExtractionSchema = {
  type: 'object';
  properties: {
    [key: string]: SchemaPropertyType;
  };
};

// Helper type to convert schema types to TypeScript types
type SchemaToType<T extends SchemaPropertyType> = T['type'] extends 'string'
  ? string
  : T['type'] extends 'number'
    ? number
    : T['type'] extends 'boolean'
      ? boolean
      : T['type'] extends 'array'
        ? string[]
        : T['type'] extends 'object'
          ? T['properties'] extends object
            ? { [K in keyof T['properties']]: SchemaToType<T['properties'][K]> }
            : never
          : never;

// Convert schema to a type
export type ExtractedFields<T extends ExtractionSchema> = {
  [K in keyof T['properties']]: SchemaToType<T['properties'][K]>;
};

export interface HeaderFieldInterface {
  key: string;
  value: string;
  id: string;
}

export interface Request<T extends ExtractionSchema = ExtractionSchema> {
  headers: HeaderFieldInterface[];
  cookies: string[];
  url: string;
  useAi: boolean;
  returnMarkdown: boolean;
  aiQuery: string;
  nodes: NodesType;
  region: string;
  apiKey: string;
  llmMarkdown: boolean;
  llmQuery: string;
  maxPages: number;
  maxDepth: number;
  ignoreImages: boolean;
  ignoreLinks: boolean;
  extractionSchema: T;
}

// Base interface for extracted content with required fields
interface BaseExtractedContent {
  content: string;
  error: boolean;
  index: number;
  tags: string[];
}

// Extended interface that allows for any additional dynamic fields
export interface ExtractedContent extends BaseExtractedContent {
  [key: string]: any; // Allow any additional dynamic fields
}

export interface QueryData {
  date: string;
  extracted_content: ExtractedContent[];
  html: string;
  id: number;
  markdown: string;
  url: string;
  user_id: number;
}

export interface Log {
  data: {
    current_page: number;
    items: QueryData[];
    pages: number;
    total: number;
  };
  success: boolean;
}

export interface Result {
  data: QueryData[];
  success: true;
}
