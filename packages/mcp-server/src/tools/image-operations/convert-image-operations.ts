// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/convert',
  operationId: 'convertImage',
};

export const tool: Tool = {
  name: 'convert_image_operations',
  description: 'Creates a task to convert an image file to a different format.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          input: {
            type: 'string',
            description: 'The id of the file to operate on.',
          },
          target_format: {
            type: 'string',
            description: 'The format to convert the image to.',
            enum: ['image/png'],
          },
          name: {
            type: 'string',
            description: 'The name of the file',
          },
        },
      },
      {
        type: 'object',
        properties: {
          input: {
            type: 'string',
            description: 'The id of the file to operate on.',
          },
          quality: {
            type: 'number',
            description: 'Image quality (1-100) for lossy formats like jpeg.',
          },
          target_format: {
            type: 'string',
            description: 'The format to convert the image to.',
            enum: ['image/jpeg'],
          },
          name: {
            type: 'string',
            description: 'The name of the file',
          },
        },
      },
      {
        type: 'object',
        properties: {
          input: {
            type: 'string',
            description: 'The id of the file to operate on.',
          },
          quality: {
            type: 'number',
            description: 'Image quality (1-100) for lossy formats like webp.',
          },
          target_format: {
            type: 'string',
            description: 'The format to convert the image to.',
            enum: ['image/webp'],
          },
          name: {
            type: 'string',
            description: 'The name of the file',
          },
        },
      },
    ],
  },
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.imageOperations.convert(body));
};

export default { metadata, tool, handler };
