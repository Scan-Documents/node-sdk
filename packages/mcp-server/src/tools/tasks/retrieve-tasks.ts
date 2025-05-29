// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tasks/{id}',
  operationId: 'getTask',
};

export const tool: Tool = {
  name: 'retrieve_tasks',
  description: 'Retrieves the data for a specific task by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The id of the task to get.',
      },
    },
  },
};

export const handler = (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.tasks.retrieve(id);
};

export default { metadata, tool, handler };
