// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/scan',
  operationId: 'scanImage',
};

export const tool: Tool = {
  name: 'scan_image_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a task to scan an image file. \nThis is an equivalent operation for `detect-documents` and `warp` combined, additionally it can apply effects to the scanned image.",
  inputSchema: {
    type: 'object',
    properties: {
      effect: {
        type: 'string',
        description: 'The effect to apply to the image',
        enum: ['none', 'grayscale', 'scanner', 'black-background'],
      },
      input: {
        type: 'string',
        description: 'The id of the file or task to operate on.',
      },
      scan_mode: {
        type: 'string',
        description:
          "Mode for detecting documents in the image. Available modes are:\n- **none**: No document detection is performed.\n- **standard**: Using a quick algorithm. Document is detected in the image, and the image is cropped to the detected document area fixing the perspective to match the document's shape.",
        enum: ['none', 'standard'],
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
    required: ['effect', 'input', 'scan_mode'],
  },
  annotations: {},
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.imageOperations.scan(body));
};

export default { metadata, tool, handler };
