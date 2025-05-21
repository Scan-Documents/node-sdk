// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
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
        description: 'The id of the file to operate on.',
      },
      name: {
        type: 'string',
        description: 'The name of the file',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.imageOperations.applyEffect(body);
};

export default { metadata, tool, handler };
