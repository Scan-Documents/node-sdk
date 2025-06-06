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
  httpPath: '/v1/pdf-operations/extract-pages',
  operationId: 'extractPdfPages',
};

export const tool: Tool = {
  name: 'extract_pages_pdf_operations',
  description: 'Creates a task to extract specific pages from a PDF file into a new PDF file.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'The id of the file to operate on.',
      },
      pages: {
        type: 'string',
        description: 'Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7)  of pages.',
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
  return asTextContentResult(await client.pdfOperations.extractPages(body));
};

export default { metadata, tool, handler };
