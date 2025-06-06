// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files/{id}/download',
  operationId: 'downloadFile',
};

export const tool: Tool = {
  name: 'download_files',
  description: 'Downloads the content of a specific file by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.files.download(id));
};

export default { metadata, tool, handler };
