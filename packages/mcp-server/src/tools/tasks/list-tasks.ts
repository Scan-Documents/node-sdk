// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks',
  operationId: 'listTasks',
};

export const tool: Tool = {
  name: 'list_tasks',
  description: 'Retrieves a paginated list of tasks belonging to the authenticated user.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
      },
      take: {
        type: 'number',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.list(body));
};

export default { metadata, tool, handler };
