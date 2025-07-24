// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a task to apply perspective correction (warp) to an image based on detected document boundaries.",
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'The id of the file or task to operate on.',
      },
      vertices: {
        type: 'array',
        description: 'Coordinates of the 4 vertices of the quadrilateral to warp the image to.',
        items: {
          type: 'object',
        },
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
    required: ['input', 'vertices'],
  },
  annotations: {},
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.imageOperations.warp(body));
};

export default { metadata, tool, handler };
