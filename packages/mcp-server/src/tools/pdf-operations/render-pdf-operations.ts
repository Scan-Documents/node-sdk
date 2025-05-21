// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'pdf_operations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'render_pdf_operations',
  description: 'Creates a task to render specified pages of a PDF file as images.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description: 'The id of the file to operate on.',
      },
      dpi: {
        type: 'integer',
        description: 'Dots per inch (DPI) for the rendered image. Default is 300.',
      },
      name: {
        type: 'string',
        description: 'The name of the file',
      },
      pages: {
        type: 'string',
        description: 'Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7)  of pages.',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.pdfOperations.render(body);
};

export default { metadata, tool, handler };
