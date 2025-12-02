// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/apply-effect',
  operationId: 'applyEffect',
};

export const tool: Tool = {
  name: 'apply_effect_image_operations',
  description: 'Creates a task to apply a specified visual effect to an image.',
  inputSchema: {
    type: 'object',
    properties: {
      effect: {
        type: 'string',
        description: 'The effect to apply to the image',
        enum: ['grayscale', 'scanner', 'black-background'],
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
      name: {
        type: 'string',
        description: 'The name of the file',
      },
    },
    required: ['effect', 'input'],
  },
  annotations: {},
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.imageOperations.applyEffect(body));
  } catch (error) {
    if (error instanceof ScanDocuments.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
