// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * An OpenAPI schema object describing the expected JSON structure. Required if
 * format is 'json'.
 */
export interface JsonSchemaSpec {
  description?: string;

  example?: unknown;

  format?: string;

  /**
   * An OpenAPI schema object describing the expected JSON structure. Required if
   * format is 'json'.
   */
  items?: JsonSchemaSpec;

  properties?: { [key: string]: JsonSchemaSpec };

  required?: Array<string>;

  type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';

  [k: string]: unknown;
}
