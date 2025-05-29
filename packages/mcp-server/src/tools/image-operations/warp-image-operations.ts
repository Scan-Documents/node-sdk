// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/warp',
  operationId: 'warpImage',
};

export const tool: Tool = {
  name: 'warp_image_operations',
  description:
    'Creates a task to apply perspective correction (warp) to an image based on detected document boundaries.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'The id of the file to operate on.',
      },
      vertices: {
        type: 'array',
        description: 'Coordinates of the 4 vertices of the quadrilateral to warp the image to.',
        items: {
          type: 'object',
        },
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
  return client.imageOperations.warp(body);
};

export default { metadata, tool, handler };
