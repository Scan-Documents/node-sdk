// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/extract-text',
  operationId: 'extractText',
};

export const tool: Tool = {
  name: 'extract_text_image_operations',
  description: 'Creates a task to extract text from a specified image file.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            description: 'The format of the text to be extracted.',
            enum: ['plain'],
          },
          input: {
            type: 'string',
            description: 'The id of the file or task to operate on.',
          },
          callback_url: {
            type: 'string',
            description:
              'The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.',
          },
        },
        required: ['format', 'input'],
      },
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            description: 'The format of the text to be extracted.',
            enum: ['markdown'],
          },
          input: {
            type: 'string',
            description: 'The id of the file or task to operate on.',
          },
          callback_url: {
            type: 'string',
            description:
              'The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.',
          },
        },
        required: ['format', 'input'],
      },
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            description: 'The format of the text to be extracted.',
            enum: ['html'],
          },
          input: {
            type: 'string',
            description: 'The id of the file or task to operate on.',
          },
          callback_url: {
            type: 'string',
            description:
              'The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.',
          },
        },
        required: ['format', 'input'],
      },
      {
        type: 'object',
        properties: {
          format: {
            type: 'string',
            description: 'The format of the text to be extracted.',
            enum: ['json'],
          },
          input: {
            type: 'string',
            description: 'The id of the file or task to operate on.',
          },
          schema: {
            $ref: '#/$defs/json_schema_spec',
          },
          callback_url: {
            type: 'string',
            description:
              'The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.',
          },
        },
        required: ['format', 'input', 'schema'],
      },
    ],
    $defs: {
      json_schema_spec: {
        type: 'object',
        description:
          "An OpenAPI schema object describing the expected JSON structure. Required if format is 'json'.",
        properties: {
          description: {
            type: 'string',
          },
          example: {
            type: 'object',
            additionalProperties: true,
          },
          format: {
            type: 'string',
          },
          items: {
            $ref: '#/$defs/json_schema_spec',
          },
          properties: {
            type: 'object',
            additionalProperties: true,
          },
          required: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          type: {
            type: 'string',
            enum: ['string', 'number', 'integer', 'boolean', 'array', 'object'],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.imageOperations.extractText(body));
};

export default { metadata, tool, handler };
