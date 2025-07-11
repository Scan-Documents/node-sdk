// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'pdf_operations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/pdf-operations/merge',
  operationId: 'mergePdf',
};

export const tool: Tool = {
  name: 'merge_pdf_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a task to merge multiple PDF and/or image files into a single PDF file.",
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'array',
        description: 'The list of ids of the files to be merged',
        items: {
          type: 'string',
          description: 'The id of the file or task to operate on.',
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
  },
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pdfOperations.merge(body));
};

export default { metadata, tool, handler };
