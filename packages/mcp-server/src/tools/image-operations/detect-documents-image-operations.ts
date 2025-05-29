// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'image_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/image-operations/detect-documents',
  operationId: 'detectDocuments',
};

export const tool: Tool = {
  name: 'detect_documents_image_operations',
  description: 'Creates a task to detect document boundaries within an image.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'The id of the file to operate on.',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.imageOperations.detectDocuments(body);
};

export default { metadata, tool, handler };
