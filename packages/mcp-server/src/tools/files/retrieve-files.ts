// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scan-documents-mcp/filtering';
import { asTextContentResult } from 'scan-documents-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ScanDocuments from 'scan-documents';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/files/{id}',
  operationId: 'getFile',
};

export const tool: Tool = {
  name: 'retrieve_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the data for a specific file by its ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file',\n  $defs: {\n    file: {\n      anyOf: [        {\n          type: 'object',\n          title: 'Image Response',\n          description: 'The response for an image file',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The id of the file'\n            },\n            created_at: {\n              type: 'string',\n              description: 'The creation date of the file in ISO format'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            properties: {\n              type: 'object',\n              properties: {\n                height: {\n                  type: 'number',\n                  description: 'The height of the image in pixels'\n                },\n                size: {\n                  type: 'number',\n                  description: 'The size of the image in bytes'\n                },\n                width: {\n                  type: 'number',\n                  description: 'The width of the image in pixels'\n                }\n              },\n              required: [                'height',\n                'size',\n                'width'\n              ]\n            },\n            task_id: {\n              type: 'string',\n              description: 'The id of the task that generated this file, if any'\n            },\n            type: {\n              type: 'string',\n              description: 'The MIME type of the file',\n              enum: [                'image/png',\n                'image/jpeg',\n                'image/webp'\n              ]\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'name',\n            'properties',\n            'task_id',\n            'type'\n          ]\n        },\n        {\n          type: 'object',\n          title: 'Document Response',\n          description: 'The response for a document file',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The id of the file'\n            },\n            created_at: {\n              type: 'string',\n              description: 'The creation date of the file in ISO format'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            properties: {\n              type: 'object',\n              properties: {\n                page_count: {\n                  type: 'number',\n                  description: 'The number of pages in the document'\n                },\n                size: {\n                  type: 'number',\n                  description: 'The size of the document in bytes'\n                }\n              },\n              required: [                'page_count',\n                'size'\n              ]\n            },\n            task_id: {\n              type: 'string',\n              description: 'The id of the task that generated this file, if any'\n            },\n            type: {\n              type: 'string',\n              description: 'The MIME type of the file',\n              enum: [                'application/pdf'\n              ]\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'name',\n            'properties',\n            'task_id',\n            'type'\n          ]\n        }\n      ],\n      title: 'File Response',\n      description: 'The response for a file. Properties depend on the file type.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ScanDocuments, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.files.retrieve(id)));
};

export default { metadata, tool, handler };
