// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_files',
  description: 'Deletes a specific file by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.files.delete(id);
};

export default { metadata, tool, handler };
