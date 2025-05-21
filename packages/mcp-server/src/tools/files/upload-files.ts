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
  name: 'upload_files',
  description: "Uploads a file to the user's storage. The file size is limited to 10MB.",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'The file to upload',
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
  return client.files.upload(body);
};

export default { metadata, tool, handler };
