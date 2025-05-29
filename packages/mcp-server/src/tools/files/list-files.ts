// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files',
  operationId: 'listFiles',
};

export const tool: Tool = {
  name: 'list_files',
  description: 'Retrieves a paginated list of files belonging to the authenticated user.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'The id of the file from which to start the search',
      },
      take: {
        type: 'number',
        description: 'The number of elements to retrieve',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.files.list(body);
};

export default { metadata, tool, handler };
