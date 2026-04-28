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
    perLanguage: {
      typescript: {
        method: 'client.files.upload',
        example:
          "import fs from 'fs';\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.upload({\n  file: fs.createReadStream('path/to/file'),\n  name: 'File Name',\n});\n\nconsole.log(file);",
      },
      python: {
        method: 'files.upload',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.upload(\n    file=b"Example data",\n    name="File Name",\n)\nprint(file)',
      },
      http: {
        example:
          "curl https://api.scan-documents.com/v1/files \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"x-api-key: $SCAN_DOCUMENTS_API_KEY\" \\\n    -F 'file=@/path/to/file' \\\n    -F name='File Name'",
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.files.list',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst files = await client.files.list();\n\nconsole.log(files.data);",
      },
      python: {
        method: 'files.list',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nfiles = client.files.list()\nprint(files.data)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/files \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
  },
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
    perLanguage: {
      typescript: {
        method: 'client.files.retrieve',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.retrieve('id');\n\nconsole.log(file);",
      },
      python: {
        method: 'files.retrieve',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.retrieve(\n    "id",\n)\nprint(file)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/files/$ID \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.files.delete',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.files.delete('id');",
      },
      python: {
        method: 'files.delete',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nclient.files.delete(\n    "id",\n)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/files/$ID \\\n    -X DELETE \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.files.download',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.files.download('id');\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'files.download',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.files.download(\n    "id",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/files/$ID/download \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.tasks.retrieve',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst taskResponse = await client.tasks.retrieve('task_euyrvozb9302uwhq');\n\nconsole.log(taskResponse);",
      },
      python: {
        method: 'tasks.retrieve',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\ntask_response = client.tasks.retrieve(\n    "task_euyrvozb9302uwhq",\n)\nprint(task_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/tasks/$ID \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.tasks.list',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks.data);",
      },
      python: {
        method: 'tasks.list',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\ntasks = client.tasks.list()\nprint(tasks.data)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/tasks \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.events.list',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst events = await client.events.list();\n\nconsole.log(events.data);",
      },
      python: {
        method: 'events.list',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nevents = client.events.list()\nprint(events.data)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/events \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.extractText',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst extractTextResponse = await client.imageOperations.extractText({\n  format: 'plain',\n  input: 'file_avyrvozb9302uwhq',\n});\n\nconsole.log(extractTextResponse);",
      },
      python: {
        method: 'image_operations.extract_text',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nextract_text_response = client.image_operations.extract_text(\n    format="plain",\n    input="file_avyrvozb9302uwhq",\n)\nprint(extract_text_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/extract-text \\\n    -X POST \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.convert',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst convertResponse = await client.imageOperations.convert({\n  input: 'file_avyrvozb9302uwhq',\n  target_format: 'image/png',\n});\n\nconsole.log(convertResponse);",
      },
      python: {
        method: 'image_operations.convert',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nconvert_response = client.image_operations.convert(\n    input="file_avyrvozb9302uwhq",\n    target_format="image/png",\n)\nprint(convert_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/convert \\\n    -X POST \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.detectDocuments',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst detectDocumentsResponse = await client.imageOperations.detectDocuments({\n  input: 'file_avyrvozb9302uwhq',\n});\n\nconsole.log(detectDocumentsResponse);",
      },
      python: {
        method: 'image_operations.detect_documents',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\ndetect_documents_response = client.image_operations.detect_documents(\n    input="file_avyrvozb9302uwhq",\n)\nprint(detect_documents_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/detect-documents \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": "file_avyrvozb9302uwhq"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.warp',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst warpResponse = await client.imageOperations.warp({\n  input: 'file_avyrvozb9302uwhq',\n  vertices: [\n    { x: 0, y: 0 },\n    { x: 100, y: 10 },\n    { x: 100, y: 100 },\n    { x: 0, y: 90 },\n  ],\n});\n\nconsole.log(warpResponse);",
      },
      python: {
        method: 'image_operations.warp',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nwarp_response = client.image_operations.warp(\n    input="file_avyrvozb9302uwhq",\n    vertices=[{\n        "x": 0,\n        "y": 0,\n    }, {\n        "x": 100,\n        "y": 10,\n    }, {\n        "x": 100,\n        "y": 100,\n    }, {\n        "x": 0,\n        "y": 90,\n    }],\n)\nprint(warp_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/warp \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": "file_avyrvozb9302uwhq",\n          "vertices": [\n            {\n              "x": 0,\n              "y": 0\n            },\n            {\n              "x": 100,\n              "y": 10\n            },\n            {\n              "x": 100,\n              "y": 100\n            },\n            {\n              "x": 0,\n              "y": 90\n            }\n          ],\n          "name": "Example Image"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.applyEffect',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst applyEffectResponse = await client.imageOperations.applyEffect({\n  effect: 'grayscale',\n  input: 'file_avyrvozb9302uwhq',\n});\n\nconsole.log(applyEffectResponse);",
      },
      python: {
        method: 'image_operations.apply_effect',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\napply_effect_response = client.image_operations.apply_effect(\n    effect="grayscale",\n    input="file_avyrvozb9302uwhq",\n)\nprint(apply_effect_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/apply-effect \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "effect": "grayscale",\n          "input": "file_avyrvozb9302uwhq",\n          "name": "Example Image"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.imageOperations.scan',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst scanResponse = await client.imageOperations.scan({\n  effect: 'none',\n  input: 'file_avyrvozb9302uwhq',\n  scan_mode: 'standard',\n});\n\nconsole.log(scanResponse);",
      },
      python: {
        method: 'image_operations.scan',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nscan_response = client.image_operations.scan(\n    effect="none",\n    input="file_avyrvozb9302uwhq",\n    scan_mode="standard",\n)\nprint(scan_response)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/image-operations/scan \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "effect": "none",\n          "input": "file_avyrvozb9302uwhq",\n          "scan_mode": "standard",\n          "name": "Example Image"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.pdfOperations.render',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst render = await client.pdfOperations.render({ input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(render);",
      },
      python: {
        method: 'pdf_operations.render',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nrender = client.pdf_operations.render(\n    input="file_avyrvozb9302uwhq",\n)\nprint(render)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/pdf-operations/render \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": "file_avyrvozb9302uwhq",\n          "dpi": 300,\n          "name": "File Name",\n          "pages": "2-7"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.pdfOperations.split',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst split = await client.pdfOperations.split({ input: 'file_avyrvozb9302uwhq' });\n\nconsole.log(split);",
      },
      python: {
        method: 'pdf_operations.split',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nsplit = client.pdf_operations.split(\n    input="file_avyrvozb9302uwhq",\n)\nprint(split)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/pdf-operations/split \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": "file_avyrvozb9302uwhq",\n          "name": "File Name"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.pdfOperations.merge',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst merge = await client.pdfOperations.merge({ input: ['file_avyrvozb9302uwhq'] });\n\nconsole.log(merge);",
      },
      python: {
        method: 'pdf_operations.merge',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nmerge = client.pdf_operations.merge(\n    input=["file_avyrvozb9302uwhq"],\n)\nprint(merge)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/pdf-operations/merge \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": [\n            "file_avyrvozb9302uwhq"\n          ],\n          "name": "File Name"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.pdfOperations.extractPages',
        example:
          "import ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst extractPages = await client.pdfOperations.extractPages({\n  input: 'file_avyrvozb9302uwhq',\n  pages: '2-7',\n});\n\nconsole.log(extractPages);",
      },
      python: {
        method: 'pdf_operations.extract_pages',
        example:
          'import os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\nextract_pages = client.pdf_operations.extract_pages(\n    input="file_avyrvozb9302uwhq",\n    pages="2-7",\n)\nprint(extract_pages)',
      },
      http: {
        example:
          'curl https://api.scan-documents.com/v1/pdf-operations/extract-pages \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $SCAN_DOCUMENTS_API_KEY" \\\n    -d \'{\n          "input": "file_avyrvozb9302uwhq",\n          "pages": "2-7",\n          "name": "File Name"\n        }\'',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Scan Documents Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/scan_documents.svg?label=pypi%20(stable))](https://pypi.org/project/scan_documents/)\n\nThe Scan Documents Python library provides convenient access to the Scan Documents REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Scan Documents MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=scan-documents-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInNjYW4tZG9jdW1lbnRzLW1jcCJdLCJlbnYiOnsiU0NBTl9ET0NVTUVOVFNfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22scan-documents-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22scan-documents-mcp%22%5D%2C%22env%22%3A%7B%22SCAN_DOCUMENTS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [scan-documents.com](https://scan-documents.com/docs). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from this staging repo\npip install git+ssh://git@github.com/stainless-sdks/scan-documents-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install scan_documents`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\n\nfile = client.files.upload(\n    file=b"REPLACE_ME",\n    name="REPLACE_ME",\n)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `SCAN_DOCUMENTS_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncScanDocuments` instead of `ScanDocuments` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom scan_documents import AsyncScanDocuments\n\nclient = AsyncScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  file = await client.files.upload(\n      file=b"REPLACE_ME",\n      name="REPLACE_ME",\n  )\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from this staging repo\npip install \'scan_documents[aiohttp] @ git+ssh://git@github.com/stainless-sdks/scan-documents-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom scan_documents import DefaultAioHttpClient\nfrom scan_documents import AsyncScanDocuments\n\nasync def main() -> None:\n  async with AsyncScanDocuments(\n    api_key=os.environ.get("SCAN_DOCUMENTS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    file = await client.files.upload(\n        file=b"REPLACE_ME",\n        name="REPLACE_ME",\n    )\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments()\n\nextract_text_response = client.image_operations.extract_text(\n    format="json",\n    input="file_avyrvozb9302uwhq",\n    schema={},\n)\nprint(extract_text_response.schema)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments()\n\nclient.files.upload(\n    file=Path("/path/to/file"),\n    name="File Name",\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `scan_documents.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `scan_documents.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `scan_documents.APIError`.\n\n```python\nimport scan_documents\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments()\n\ntry:\n    client.files.upload(\n        file=b"REPLACE_ME",\n        name="REPLACE_ME",\n    )\nexcept scan_documents.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept scan_documents.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept scan_documents.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom scan_documents import ScanDocuments\n\n# Configure the default for all requests:\nclient = ScanDocuments(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).files.upload(\n    file=b"REPLACE_ME",\n    name="REPLACE_ME",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom scan_documents import ScanDocuments\n\n# Configure the default for all requests:\nclient = ScanDocuments(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = ScanDocuments(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).files.upload(\n    file=b"REPLACE_ME",\n    name="REPLACE_ME",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `SCAN_DOCUMENTS_LOG` to `info`.\n\n```shell\n$ export SCAN_DOCUMENTS_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom scan_documents import ScanDocuments\n\nclient = ScanDocuments()\nresponse = client.files.with_raw_response.upload(\n    file=b"REPLACE_ME",\n    name="REPLACE_ME",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nfile = response.parse()  # get the object that `files.upload()` would have returned\nprint(file)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stainless-sdks/scan-documents-python/tree/main/src/scan_documents/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stainless-sdks/scan-documents-python/tree/main/src/scan_documents/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.files.with_streaming_response.upload(\n    file=b"REPLACE_ME",\n    name="REPLACE_ME",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom scan_documents import ScanDocuments, DefaultHttpxClient\n\nclient = ScanDocuments(\n    # Or use the `SCAN_DOCUMENTS_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom scan_documents import ScanDocuments\n\nwith ScanDocuments() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/scan-documents-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport scan_documents\nprint(scan_documents.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Scan Documents TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/scan-documents.svg?label=npm%20(stable))](https://npmjs.org/package/scan-documents) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/scan-documents)\n\nThis library provides convenient access to the Scan Documents REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [scan-documents.com](https://scan-documents.com/docs). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Scan Documents MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=scan-documents-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInNjYW4tZG9jdW1lbnRzLW1jcCJdLCJlbnYiOnsiU0NBTl9ET0NVTUVOVFNfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22scan-documents-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22scan-documents-mcp%22%5D%2C%22env%22%3A%7B%22SCAN_DOCUMENTS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install scan-documents\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.upload({\n  file: fs.createReadStream('path/to/file'),\n  name: 'REPLACE_ME',\n});\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  apiKey: process.env['SCAN_DOCUMENTS_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: ScanDocuments.FileUploadParams = {\n  file: fs.createReadStream('path/to/file'),\n  name: 'REPLACE_ME',\n};\nconst file: ScanDocuments.File = await client.files.upload(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport ScanDocuments, { toFile } from 'scan-documents';\n\nconst client = new ScanDocuments();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.files.upload({ file: fs.createReadStream('/path/to/file'), name: 'File Name' });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.files.upload({ file: new File(['my bytes'], 'file'), name: 'File Name' });\n\n// You can also pass a `fetch` `Response`:\nawait client.files.upload({ file: await fetch('https://somesite/file'), name: 'File Name' });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.files.upload({\n  file: await toFile(Buffer.from('my bytes'), 'file'),\n  name: 'File Name',\n});\nawait client.files.upload({\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n  name: 'File Name',\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst file = await client.files\n  .upload({ file: fs.createReadStream('path/to/file'), name: 'REPLACE_ME' })\n  .catch(async (err) => {\n    if (err instanceof ScanDocuments.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new ScanDocuments({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.files.upload({ file: fs.createReadStream('path/to/file'), name: 'REPLACE_ME' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new ScanDocuments({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.files.upload({ file: fs.createReadStream('path/to/file'), name: 'REPLACE_ME' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new ScanDocuments();\n\nconst response = await client.files\n  .upload({ file: fs.createReadStream('path/to/file'), name: 'REPLACE_ME' })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: file, response: raw } = await client.files\n  .upload({ file: fs.createReadStream('path/to/file'), name: 'REPLACE_ME' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(file);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `SCAN_DOCUMENTS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport ScanDocuments from 'scan-documents';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new ScanDocuments({\n  logger: logger.child({ name: 'ScanDocuments' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.files.upload({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport ScanDocuments from 'scan-documents';\nimport fetch from 'my-fetch';\n\nconst client = new ScanDocuments({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport ScanDocuments from 'scan-documents';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new ScanDocuments({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport ScanDocuments from 'scan-documents';\n\nconst client = new ScanDocuments({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport ScanDocuments from 'npm:scan-documents';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new ScanDocuments({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/Scan-Documents/node-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

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
