// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/v1/files/{id}',
    httpMethod: 'get',
    summary: 'Get file',
    description: 'Retrieves the data for a specific file by its ID.',
    stainlessPath: '(resource) files > (method) retrieve',
    qualified: 'client.files.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }",
    markdown:
      "## retrieve\n\n`client.files.retrieve(id: string): { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'application/pdf'; }`\n\n**get** `/v1/files/{id}`\n\nRetrieves the data for a specific file by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }`\n  The response for a file. Properties depend on the file type.\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst file = await client.files.retrieve('id');\n\nconsole.log(file);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/files',
    httpMethod: 'get',
    summary: 'List user files',
    description: 'Retrieves a paginated list of files belonging to the authenticated user.',
    stainlessPath: '(resource) files > (method) list',
    qualified: 'client.files.list',
    params: ['from?: string;', 'take?: number;'],
    response:
      "{ data: { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'application/pdf'; }[]; links: { next: string; previous: string; }; }",
    markdown:
      "## list\n\n`client.files.list(from?: string, take?: number): { data: file[]; links: object; }`\n\n**get** `/v1/files`\n\nRetrieves a paginated list of files belonging to the authenticated user.\n\n### Parameters\n\n- `from?: string`\n  The id of the file from which to start the search\n\n- `take?: number`\n  The number of elements to retrieve\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'application/pdf'; }[]; links: { next: string; previous: string; }; }`\n\n  - `data: { id: string; created_at: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }[]`\n  - `links: { next: string; previous: string; }`\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst files = await client.files.list();\n\nconsole.log(files);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/files/{id}',
    httpMethod: 'delete',
    summary: 'Delete a file',
    description: 'Deletes a specific file by its ID.',
    stainlessPath: '(resource) files > (method) delete',
    qualified: 'client.files.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.files.delete(id: string): void`\n\n**delete** `/v1/files/{id}`\n\nDeletes a specific file by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nawait client.files.delete('id')\n```",
  },
  {
    name: 'download',
    endpoint: '/v1/files/{id}/download',
    httpMethod: 'get',
    summary: 'Download file content',
    description: 'Downloads the content of a specific file by its ID.',
    stainlessPath: '(resource) files > (method) download',
    qualified: 'client.files.download',
    params: ['id: string;'],
    response: 'string',
    markdown:
      "## download\n\n`client.files.download(id: string): string`\n\n**get** `/v1/files/{id}/download`\n\nDownloads the content of a specific file by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst response = await client.files.download('id');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'upload',
    endpoint: '/v1/files',
    httpMethod: 'post',
    summary: 'Upload a new file',
    description: "Uploads a file to the user's storage. The file size is limited to 10MB.",
    stainlessPath: '(resource) files > (method) upload',
    qualified: 'client.files.upload',
    params: ['file: string;', 'name: string;'],
    response:
      "{ id: string; created_at: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }",
    markdown:
      "## upload\n\n`client.files.upload(file: string, name: string): { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: object; task_id: string; type: 'application/pdf'; }`\n\n**post** `/v1/files`\n\nUploads a file to the user's storage. The file size is limited to 10MB.\n\n### Parameters\n\n- `file: string`\n  The file to upload\n\n- `name: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; created_at: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }`\n  The response for a file. Properties depend on the file type.\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst file = await client.files.upload({ file: fs.createReadStream('path/to/file'), name: 'File Name' });\n\nconsole.log(file);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/tasks/{id}',
    httpMethod: 'get',
    summary: 'Get Task',
    description: 'Retrieves the data for a specific task by its ID.',
    stainlessPath: '(resource) tasks > (method) retrieve',
    qualified: 'client.tasks.retrieve',
    params: ['id: string;'],
    response:
      'object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object',
    markdown:
      "## retrieve\n\n`client.tasks.retrieve(id: string): { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**get** `/v1/tasks/{id}`\n\nRetrieves the data for a specific task by its ID.\n\n### Parameters\n\n- `id: string`\n  The id of the task to get.\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { documents: { bounding_box: bounding_box; file_id: string; vertices: coordinates_item[]; }[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { content: string; format: 'plain' | 'markdown' | 'html' | 'json'; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  Task response\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst taskResponse = await client.tasks.retrieve('task_euyrvozb9302uwhq');\n\nconsole.log(taskResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/tasks',
    httpMethod: 'get',
    summary: 'List tasks',
    description: 'Retrieves a paginated list of tasks belonging to the authenticated user.',
    stainlessPath: '(resource) tasks > (method) list',
    qualified: 'client.tasks.list',
    params: ['from?: string;', 'take?: number;'],
    response:
      '{ data: object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object[]; links: { next: string; previous: string; }; }',
    markdown:
      "## list\n\n`client.tasks.list(from?: string, take?: number): { data: task_response[]; links: object; }`\n\n**get** `/v1/tasks`\n\nRetrieves a paginated list of tasks belonging to the authenticated user.\n\n### Parameters\n\n- `from?: string`\n\n- `take?: number`\n\n### Returns\n\n- `{ data: { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'failed'; updated_at: string; }[]; links: { next: string; previous: string; }; }`\n  Paginated list of tasks\n\n  - `data: { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { documents: { bounding_box: bounding_box; file_id: string; vertices: coordinates_item[]; }[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { content: string; format: 'plain' | 'markdown' | 'html' | 'json'; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }[]`\n  - `links: { next: string; previous: string; }`\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/events',
    httpMethod: 'get',
    summary: 'List events',
    description: 'Retrieves a paginated list of events belonging to the authenticated user.',
    stainlessPath: '(resource) events > (method) list',
    qualified: 'client.events.list',
    params: ['from?: string;', 'take?: number;'],
    response:
      "{ data: { id: string; data: object | object; timestamp: string; type: 'file.created'; } | { id: string; data: object; timestamp: string; type: 'file.deleted'; } | { id: string; data: object; timestamp: string; type: 'task.created'; } | { id: string; data: object | object | object | object | object | object | object | object | object; timestamp: string; type: 'task.completed'; } | { id: string; data: object; timestamp: string; type: 'task.deleted'; } | { id: string; data: object; timestamp: string; type: 'task.failed'; }[]; links: { next: string; previous: string; }; }",
    markdown:
      "## list\n\n`client.events.list(from?: string, take?: number): { data: object | object | object | object | object | object[]; links: object; }`\n\n**get** `/v1/events`\n\nRetrieves a paginated list of events belonging to the authenticated user.\n\n### Parameters\n\n- `from?: string`\n\n- `take?: number`\n\n### Returns\n\n- `{ data: { id: string; data: { id: string; name: string; properties: object; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; name: string; properties: object; task_id: string; type: 'application/pdf'; }; timestamp: string; type: 'file.created'; } | { id: string; data: { id: string; name: string; type: 'image/png' | 'image/jpeg' | 'image/webp' | 'application/pdf'; }; timestamp: string; type: 'file.deleted'; } | { id: string; data: { id: string; operation: string; }; timestamp: string; type: 'task.created'; } | { id: string; data: { id: string; operation: 'apply-effect'; result: object; } | { id: string; operation: 'detect-documents'; result: object; } | { id: string; operation: 'warp'; result: object; } | { id: string; operation: 'extract-text'; result: object; } | { id: string; operation: 'convert'; result: object; } | { id: string; operation: 'render'; result: object; } | { id: string; operation: 'split'; result: object; } | { id: string; operation: 'merge'; result: object; } | { id: string; operation: 'extract-pages'; result: object; }; timestamp: string; type: 'task.completed'; } | { id: string; data: { id: string; operation: string; }; timestamp: string; type: 'task.deleted'; } | { id: string; data: { id: string; operation: string; result: object; }; timestamp: string; type: 'task.failed'; }[]; links: { next: string; previous: string; }; }`\n\n  - `data: { id: string; data: { id: string; name: string; properties: { height: number; size: number; width: number; }; task_id: string; type: 'image/png' | 'image/jpeg' | 'image/webp'; } | { id: string; name: string; properties: { page_count: number; size: number; }; task_id: string; type: 'application/pdf'; }; timestamp: string; type: 'file.created'; } | { id: string; data: { id: string; name: string; type: 'image/png' | 'image/jpeg' | 'image/webp' | 'application/pdf'; }; timestamp: string; type: 'file.deleted'; } | { id: string; data: { id: string; operation: string; }; timestamp: string; type: 'task.created'; } | { id: string; data: { id: string; operation: 'apply-effect'; result: { generated_files: object[]; }; } | { id: string; operation: 'detect-documents'; result: { documents: { bounding_box: bounding_box; file_id: string; vertices: coordinates_item[]; }[]; }; } | { id: string; operation: 'warp'; result: { generated_files: object[]; }; } | { id: string; operation: 'extract-text'; result: { content: string; format: 'plain' | 'markdown' | 'html' | 'json'; }; } | { id: string; operation: 'convert'; result: { generated_files: object[]; }; } | { id: string; operation: 'render'; result: { generated_files: object[]; }; } | { id: string; operation: 'split'; result: { generated_files: object[]; }; } | { id: string; operation: 'merge'; result: { generated_files: object[]; }; } | { id: string; operation: 'extract-pages'; result: { generated_files: object[]; }; }; timestamp: string; type: 'task.completed'; } | { id: string; data: { id: string; operation: string; }; timestamp: string; type: 'task.deleted'; } | { id: string; data: { id: string; operation: string; result: { details: object; error: string; }; }; timestamp: string; type: 'task.failed'; }[]`\n  - `links: { next: string; previous: string; }`\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst events = await client.events.list();\n\nconsole.log(events);\n```",
  },
  {
    name: 'apply_effect',
    endpoint: '/v1/image-operations/apply-effect',
    httpMethod: 'post',
    summary: 'Apply an effect to an image',
    description: 'Creates a task to apply a specified visual effect to an image.',
    stainlessPath: '(resource) image_operations > (method) apply_effect',
    qualified: 'client.imageOperations.applyEffect',
    params: [
      "effect: 'grayscale' | 'scanner' | 'black-background';",
      'input: string;',
      'callback_url?: string;',
      'name?: string;',
    ],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## apply_effect\n\n`client.imageOperations.applyEffect(effect: 'grayscale' | 'scanner' | 'black-background', input: string, callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/apply-effect`\n\nCreates a task to apply a specified visual effect to an image.\n\n### Parameters\n\n- `effect: 'grayscale' | 'scanner' | 'black-background'`\n  The effect to apply to the image\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'apply-effect'; parameters: { effect: 'grayscale' | 'scanner' | 'black-background'; input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an apply-effect task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst applyEffectResponse = await client.imageOperations.applyEffect({ effect: 'grayscale', input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(applyEffectResponse);\n```",
  },
  {
    name: 'convert',
    endpoint: '/v1/image-operations/convert',
    httpMethod: 'post',
    summary: 'Convert image format',
    description: 'Creates a task to convert an image file to a different format.',
    stainlessPath: '(resource) image_operations > (method) convert',
    qualified: 'client.imageOperations.convert',
    params: [
      "convert_request?: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; };",
    ],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: { generated_files: image_from_task_response[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## convert\n\n`client.imageOperations.convert(convert_request?: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }): { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/convert`\n\nCreates a task to convert an image file to a different format.\n\n### Parameters\n\n- `convert_request?: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }`\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an convert task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst convertResponse = await client.imageOperations.convert();\n\nconsole.log(convertResponse);\n```",
  },
  {
    name: 'detect_documents',
    endpoint: '/v1/image-operations/detect-documents',
    httpMethod: 'post',
    summary: 'Detect documents in an image',
    description: 'Creates a task to detect document boundaries within an image.',
    stainlessPath: '(resource) image_operations > (method) detect_documents',
    qualified: 'client.imageOperations.detectDocuments',
    params: ['input: string;', 'callback_url?: string;'],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: { documents: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: object | object | object; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## detect_documents\n\n`client.imageOperations.detectDocuments(input: string, callback_url?: string): { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: convert_request; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/detect-documents`\n\nCreates a task to detect document boundaries within an image.\n\n### Parameters\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { documents: { bounding_box: bounding_box; file_id: string; vertices: coordinates_item[]; }[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'convert'; parameters: { input: string; target_format: 'image/png'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/jpeg'; callback_url?: string; name?: string; } | { input: string; quality: number; target_format: 'image/webp'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of the detect-documents operation\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst detectDocumentsResponse = await client.imageOperations.detectDocuments({ input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(detectDocumentsResponse);\n```",
  },
  {
    name: 'extract_text',
    endpoint: '/v1/image-operations/extract-text',
    httpMethod: 'post',
    summary: 'Extract text from an image',
    description: 'Creates a task to extract text from a specified image file.',
    stainlessPath: '(resource) image_operations > (method) extract_text',
    qualified: 'client.imageOperations.extractText',
    params: [
      "extract_text_request?: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: { description?: string; example?: object; format?: string; items?: json_schema_spec; properties?: object; required?: string[]; type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'; }; callback_url?: string; };",
    ],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: object | object | object | object; result: { content: string; format: 'plain' | 'markdown' | 'html' | 'json'; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: object | object | object | object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: object | object | object | object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: object | object | object | object; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## extract_text\n\n`client.imageOperations.extractText(extract_text_request?: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }): { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: extract_text_request; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/extract-text`\n\nCreates a task to extract text from a specified image file.\n\n### Parameters\n\n- `extract_text_request?: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: { description?: string; example?: object; format?: string; items?: json_schema_spec; properties?: object; required?: string[]; type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'; }; callback_url?: string; }`\n  Extract text from an image in various formats.\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { content: string; format: 'plain' | 'markdown' | 'html' | 'json'; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-text'; parameters: { format: 'plain'; input: string; callback_url?: string; } | { format: 'markdown'; input: string; callback_url?: string; } | { format: 'html'; input: string; callback_url?: string; } | { format: 'json'; input: string; schema: json_schema_spec; callback_url?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an extract-text task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst extractTextResponse = await client.imageOperations.extractText();\n\nconsole.log(extractTextResponse);\n```",
  },
  {
    name: 'scan',
    endpoint: '/v1/image-operations/scan',
    httpMethod: 'post',
    summary: 'Scan an image',
    description:
      'Creates a task to scan an image file. \nThis is an equivalent operation for `detect-documents` and `warp` combined, additionally it can apply effects to the scanned image.',
    stainlessPath: '(resource) image_operations > (method) scan',
    qualified: 'client.imageOperations.scan',
    params: [
      "effect: 'none' | 'grayscale' | 'scanner' | 'black-background';",
      'input: string;',
      "scan_mode: 'none' | 'standard';",
      'callback_url?: string;',
      'name?: string;',
    ],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'failed'; updated_at: string; }",
    markdown:
      "## scan\n\n`client.imageOperations.scan(effect: 'none' | 'grayscale' | 'scanner' | 'black-background', input: string, scan_mode: 'none' | 'standard', callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/scan`\n\nCreates a task to scan an image file. \nThis is an equivalent operation for `detect-documents` and `warp` combined, additionally it can apply effects to the scanned image.\n\n### Parameters\n\n- `effect: 'none' | 'grayscale' | 'scanner' | 'black-background'`\n  The effect to apply to the image\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `scan_mode: 'none' | 'standard'`\n  Mode for detecting documents in the image. Available modes are:\n- **none**: No document detection is performed.\n- **standard**: Using a quick algorithm. Document is detected in the image, and the image is cropped to the detected document area fixing the perspective to match the document's shape.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'scan'; parameters: { effect: 'none' | 'grayscale' | 'scanner' | 'black-background'; input: string; scan_mode: 'none' | 'standard'; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an scan task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst scanResponse = await client.imageOperations.scan({\n  effect: 'none',\n  input: 'file_avyrvozb9302uwhq',\n  scan_mode: 'standard',\n});\n\nconsole.log(scanResponse);\n```",
  },
  {
    name: 'warp',
    endpoint: '/v1/image-operations/warp',
    httpMethod: 'post',
    summary: 'Warp (perspective correct) an image',
    description:
      'Creates a task to apply perspective correction (warp) to an image based on detected document boundaries.',
    stainlessPath: '(resource) image_operations > (method) warp',
    qualified: 'client.imageOperations.warp',
    params: ['input: string;', 'vertices: object[];', 'callback_url?: string;', 'name?: string;'],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## warp\n\n`client.imageOperations.warp(input: string, vertices: object[], callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: warp_request; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/image-operations/warp`\n\nCreates a task to apply perspective correction (warp) to an image based on detected document boundaries.\n\n### Parameters\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `vertices: object[]`\n  Coordinates of the 4 vertices of the quadrilateral to warp the image to.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'warp'; parameters: { input: string; vertices: object[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an warp task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst warpResponse = await client.imageOperations.warp({ input: 'file_avyrvozb9302uwhq', vertices: [{ x: 0, y: 0 }, { x: 100, y: 10 }, { x: 100, y: 100 }, { x: 0, y: 90 }] });\n\nconsole.log(warpResponse);\n```",
  },
  {
    name: 'extract_pages',
    endpoint: '/v1/pdf-operations/extract-pages',
    httpMethod: 'post',
    summary: 'Extract pages from a PDF file',
    description: 'Creates a task to extract specific pages from a PDF file into a new PDF file.',
    stainlessPath: '(resource) pdf_operations > (method) extract_pages',
    qualified: 'client.pdfOperations.extractPages',
    params: ['input: string;', 'pages: string;', 'callback_url?: string;', 'name?: string;'],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## extract_pages\n\n`client.pdfOperations.extractPages(input: string, pages: string, callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/pdf-operations/extract-pages`\n\nCreates a task to extract specific pages from a PDF file into a new PDF file.\n\n### Parameters\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `pages: string`\n  Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7)  of pages.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'extract-pages'; parameters: { input: string; pages: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an extract task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst extractPages = await client.pdfOperations.extractPages({ input: 'file_avyrvozb9302uwhq', pages: '2-7' });\n\nconsole.log(extractPages);\n```",
  },
  {
    name: 'merge',
    endpoint: '/v1/pdf-operations/merge',
    httpMethod: 'post',
    summary: 'Merge files into PDF',
    description: 'Creates a task to merge multiple PDF and/or image files into a single PDF file.',
    stainlessPath: '(resource) pdf_operations > (method) merge',
    qualified: 'client.pdfOperations.merge',
    params: ['input: string[];', 'callback_url?: string;', 'name?: string;'],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## merge\n\n`client.pdfOperations.merge(input: string[], callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/pdf-operations/merge`\n\nCreates a task to merge multiple PDF and/or image files into a single PDF file.\n\n### Parameters\n\n- `input: string[]`\n  The list of ids of the files to be merged\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'merge'; parameters: { input: string[]; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an merge task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst merge = await client.pdfOperations.merge({ input: ['file_avyrvozb9302uwhq'] });\n\nconsole.log(merge);\n```",
  },
  {
    name: 'render',
    endpoint: '/v1/pdf-operations/render',
    httpMethod: 'post',
    summary: 'Render PDF pages as images',
    description: 'Creates a task to render specified pages of a PDF file as images.',
    stainlessPath: '(resource) pdf_operations > (method) render',
    qualified: 'client.pdfOperations.render',
    params: [
      'input: string;',
      'callback_url?: string;',
      'dpi?: number;',
      'name?: string;',
      'pages?: string;',
    ],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## render\n\n`client.pdfOperations.render(input: string, callback_url?: string, dpi?: number, name?: string, pages?: string): { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/pdf-operations/render`\n\nCreates a task to render specified pages of a PDF file as images.\n\n### Parameters\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `dpi?: number`\n  Dots per inch (DPI) for the rendered image. Default is 300.\n\n- `name?: string`\n  The name of the file\n\n- `pages?: string`\n  Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7)  of pages.\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'render'; parameters: { dpi: number; input: string; callback_url?: string; name?: string; pages?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an render task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst render = await client.pdfOperations.render({ input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(render);\n```",
  },
  {
    name: 'split',
    endpoint: '/v1/pdf-operations/split',
    httpMethod: 'post',
    summary: 'Split a PDF file',
    description: 'Creates a task to split a PDF file into multiple single-page PDF files.',
    stainlessPath: '(resource) pdf_operations > (method) split',
    qualified: 'client.pdfOperations.split',
    params: ['input: string;', 'callback_url?: string;', 'name?: string;'],
    response:
      "{ id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }",
    markdown:
      "## split\n\n`client.pdfOperations.split(input: string, callback_url?: string, name?: string): { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: object; result: object; status: 'failed'; updated_at: string; }`\n\n**post** `/v1/pdf-operations/split`\n\nCreates a task to split a PDF file into multiple single-page PDF files.\n\n### Parameters\n\n- `input: string`\n  The id of the file or task to operate on.\n\n- `callback_url?: string`\n  The URL to call when the task is completed or failed. If you want to receive events, you probably prefer to use `webhooks` instead.\n\n- `name?: string`\n  The name of the file\n\n### Returns\n\n- `{ id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { generated_files: object[]; }; status: 'completed'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'pending'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: object; status: 'processing'; updated_at: string; } | { id: string; callback_url: string; created_at: string; operation: 'split'; parameters: { input: string; callback_url?: string; name?: string; }; result: { details: object; error: string; }; status: 'failed'; updated_at: string; }`\n  The response of an split task\n\n### Example\n\n```typescript\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments();\n\nconst split = await client.pdfOperations.split({ input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(split);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
