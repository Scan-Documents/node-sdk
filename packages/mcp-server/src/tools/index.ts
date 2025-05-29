// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScanDocuments from 'scan-documents';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_files from './files/retrieve-files';
import list_files from './files/list-files';
import delete_files from './files/delete-files';
import download_files from './files/download-files';
import upload_files from './files/upload-files';
import retrieve_tasks from './tasks/retrieve-tasks';
import list_tasks from './tasks/list-tasks';
import list_events from './events/list-events';
import apply_effect_image_operations from './image-operations/apply-effect-image-operations';
import convert_image_operations from './image-operations/convert-image-operations';
import detect_documents_image_operations from './image-operations/detect-documents-image-operations';
import extract_text_image_operations from './image-operations/extract-text-image-operations';
import warp_image_operations from './image-operations/warp-image-operations';
import extract_pages_pdf_operations from './pdf-operations/extract-pages-pdf-operations';
import merge_pdf_operations from './pdf-operations/merge-pdf-operations';
import render_pdf_operations from './pdf-operations/render-pdf-operations';
import split_pdf_operations from './pdf-operations/split-pdf-operations';

export type HandlerFunction = (
  client: ScanDocuments,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_files);
addEndpoint(list_files);
addEndpoint(delete_files);
addEndpoint(download_files);
addEndpoint(upload_files);
addEndpoint(retrieve_tasks);
addEndpoint(list_tasks);
addEndpoint(list_events);
addEndpoint(apply_effect_image_operations);
addEndpoint(convert_image_operations);
addEndpoint(detect_documents_image_operations);
addEndpoint(extract_text_image_operations);
addEndpoint(warp_image_operations);
addEndpoint(extract_pages_pdf_operations);
addEndpoint(merge_pdf_operations);
addEndpoint(render_pdf_operations);
addEndpoint(split_pdf_operations);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
