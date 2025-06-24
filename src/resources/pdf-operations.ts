// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PdfOperationsAPI from './pdf-operations';
import * as ImageOperationsAPI from './image-operations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PdfOperations extends APIResource {
  /**
   * Creates a task to extract specific pages from a PDF file into a new PDF file.
   *
   * @example
   * ```ts
   * const extractPages =
   *   await client.pdfOperations.extractPages({
   *     input: 'file_avyrvozb9302uwhq',
   *     pages: '2-7',
   *   });
   * ```
   */
  extractPages(body: PdfOperationExtractPagesParams, options?: RequestOptions): APIPromise<ExtractPages> {
    return this._client.post('/v1/pdf-operations/extract-pages', { body, ...options });
  }

  /**
   * Creates a task to merge multiple PDF and/or image files into a single PDF file.
   *
   * @example
   * ```ts
   * const merge = await client.pdfOperations.merge({
   *   input: ['file_avyrvozb9302uwhq'],
   * });
   * ```
   */
  merge(body: PdfOperationMergeParams, options?: RequestOptions): APIPromise<Merge> {
    return this._client.post('/v1/pdf-operations/merge', { body, ...options });
  }

  /**
   * Creates a task to render specified pages of a PDF file as images.
   *
   * @example
   * ```ts
   * const render = await client.pdfOperations.render({
   *   input: 'file_avyrvozb9302uwhq',
   * });
   * ```
   */
  render(body: PdfOperationRenderParams, options?: RequestOptions): APIPromise<Render> {
    return this._client.post('/v1/pdf-operations/render', { body, ...options });
  }

  /**
   * Creates a task to split a PDF file into multiple single-page PDF files.
   *
   * @example
   * ```ts
   * const split = await client.pdfOperations.split({
   *   input: 'file_avyrvozb9302uwhq',
   * });
   * ```
   */
  split(body: PdfOperationSplitParams, options?: RequestOptions): APIPromise<Split> {
    return this._client.post('/v1/pdf-operations/split', { body, ...options });
  }
}

/**
 * The response for a document file from a task
 */
export interface DocumentFromTask {
  /**
   * The id of the file
   */
  id: string;

  /**
   * The creation date of the file in ISO format
   */
  created_at: string;

  /**
   * The name of the file
   */
  name: string;

  properties: DocumentFromTask.Properties;

  /**
   * The id of the task that generated this file
   */
  task_id: string;

  /**
   * The MIME type of the file
   */
  type: 'application/pdf';
}

export namespace DocumentFromTask {
  export interface Properties {
    /**
     * The number of pages in the document
     */
    page_count: number;

    /**
     * The size of the document in bytes
     */
    size: number;
  }
}

/**
 * The response of an extract task
 */
export type ExtractPages =
  | ExtractPages.CompletedExtractPagesTaskResponse
  | ExtractPages.PendingExtractPagesTaskResponse
  | ExtractPages.ProcessingExtractPagesTaskResponse
  | ExtractPages.FailedExtractPagesTaskResponse;

export namespace ExtractPages {
  export interface CompletedExtractPagesTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'extract-pages';

    parameters: CompletedExtractPagesTaskResponse.Parameters;

    result: CompletedExtractPagesTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedExtractPagesTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages: string;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
    }
  }

  export interface PendingExtractPagesTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'extract-pages';

    parameters: PendingExtractPagesTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'pending';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace PendingExtractPagesTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages: string;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface ProcessingExtractPagesTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'extract-pages';

    parameters: ProcessingExtractPagesTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'processing';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace ProcessingExtractPagesTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages: string;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface FailedExtractPagesTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'extract-pages';

    parameters: FailedExtractPagesTaskResponse.Parameters;

    result: FailedExtractPagesTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedExtractPagesTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages: string;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      details: { [key: string]: unknown };

      error: string;
    }
  }
}

/**
 * The response of an merge task
 */
export type Merge =
  | Merge.CompletedMergeTaskResponse
  | Merge.PendingMergeTaskResponse
  | Merge.ProcessingMergeTaskResponse
  | Merge.FailedMergeTaskResponse;

export namespace Merge {
  export interface CompletedMergeTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'merge';

    parameters: CompletedMergeTaskResponse.Parameters;

    result: CompletedMergeTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedMergeTaskResponse {
    export interface Parameters {
      /**
       * The list of ids of the files to be merged
       */
      input: Array<string>;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
    }
  }

  export interface PendingMergeTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'merge';

    parameters: PendingMergeTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'pending';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace PendingMergeTaskResponse {
    export interface Parameters {
      /**
       * The list of ids of the files to be merged
       */
      input: Array<string>;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface ProcessingMergeTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'merge';

    parameters: ProcessingMergeTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'processing';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace ProcessingMergeTaskResponse {
    export interface Parameters {
      /**
       * The list of ids of the files to be merged
       */
      input: Array<string>;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface FailedMergeTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'merge';

    parameters: FailedMergeTaskResponse.Parameters;

    result: FailedMergeTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedMergeTaskResponse {
    export interface Parameters {
      /**
       * The list of ids of the files to be merged
       */
      input: Array<string>;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      details: { [key: string]: unknown };

      error: string;
    }
  }
}

/**
 * The response of an render task
 */
export type Render =
  | Render.CompletedRenderTaskResponse
  | Render.PendingRenderTaskResponse
  | Render.ProcessingRenderTaskResponse
  | Render.FailedRenderTaskResponse;

export namespace Render {
  export interface CompletedRenderTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'render';

    parameters: CompletedRenderTaskResponse.Parameters;

    result: CompletedRenderTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedRenderTaskResponse {
    export interface Parameters {
      /**
       * Dots per inch (DPI) for the rendered image. Default is 300.
       */
      dpi: number;

      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages?: string;
    }

    export interface Result {
      generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
    }
  }

  export interface PendingRenderTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'render';

    parameters: PendingRenderTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'pending';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace PendingRenderTaskResponse {
    export interface Parameters {
      /**
       * Dots per inch (DPI) for the rendered image. Default is 300.
       */
      dpi: number;

      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages?: string;
    }
  }

  export interface ProcessingRenderTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'render';

    parameters: ProcessingRenderTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'processing';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace ProcessingRenderTaskResponse {
    export interface Parameters {
      /**
       * Dots per inch (DPI) for the rendered image. Default is 300.
       */
      dpi: number;

      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages?: string;
    }
  }

  export interface FailedRenderTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'render';

    parameters: FailedRenderTaskResponse.Parameters;

    result: FailedRenderTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedRenderTaskResponse {
    export interface Parameters {
      /**
       * Dots per inch (DPI) for the rendered image. Default is 300.
       */
      dpi: number;

      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;

      /**
       * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
       */
      pages?: string;
    }

    export interface Result {
      details: { [key: string]: unknown };

      error: string;
    }
  }
}

/**
 * The response of an split task
 */
export type Split =
  | Split.CompletedSplitTaskResponse
  | Split.PendingSplitTaskResponse
  | Split.ProcessingSplitTaskResponse
  | Split.FailedSplitTaskResponse;

export namespace Split {
  export interface CompletedSplitTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'split';

    parameters: CompletedSplitTaskResponse.Parameters;

    result: CompletedSplitTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedSplitTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
    }
  }

  export interface PendingSplitTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'split';

    parameters: PendingSplitTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'pending';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace PendingSplitTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface ProcessingSplitTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'split';

    parameters: ProcessingSplitTaskResponse.Parameters;

    result: unknown;

    /**
     * The current status of the task.
     */
    status: 'processing';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace ProcessingSplitTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;
    }
  }

  export interface FailedSplitTaskResponse {
    /**
     * The unique identifier for the task.
     */
    id: string;

    /**
     * The creation date of the task in ISO format.
     */
    created_at: string;

    /**
     * The type of operation being performed by the task.
     */
    operation: 'split';

    parameters: FailedSplitTaskResponse.Parameters;

    result: FailedSplitTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedSplitTaskResponse {
    export interface Parameters {
      /**
       * The id of the file to operate on.
       */
      input: string;

      /**
       * The name of the file
       */
      name?: string;
    }

    export interface Result {
      details: { [key: string]: unknown };

      error: string;
    }
  }
}

export interface PdfOperationExtractPagesParams {
  /**
   * The id of the file to operate on.
   */
  input: string;

  /**
   * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
   */
  pages: string;

  /**
   * The name of the file
   */
  name?: string;
}

export interface PdfOperationMergeParams {
  /**
   * The list of ids of the files to be merged
   */
  input: Array<string>;

  /**
   * The name of the file
   */
  name?: string;
}

export interface PdfOperationRenderParams {
  /**
   * The id of the file to operate on.
   */
  input: string;

  /**
   * Dots per inch (DPI) for the rendered image. Default is 300.
   */
  dpi?: number;

  /**
   * The name of the file
   */
  name?: string;

  /**
   * Page range (e.g., 2-7), a comma-separated list (e.g., 2,3,7) of pages.
   */
  pages?: string;
}

export interface PdfOperationSplitParams {
  /**
   * The id of the file to operate on.
   */
  input: string;

  /**
   * The name of the file
   */
  name?: string;
}

export declare namespace PdfOperations {
  export {
    type DocumentFromTask as DocumentFromTask,
    type ExtractPages as ExtractPages,
    type Merge as Merge,
    type Render as Render,
    type Split as Split,
    type PdfOperationExtractPagesParams as PdfOperationExtractPagesParams,
    type PdfOperationMergeParams as PdfOperationMergeParams,
    type PdfOperationRenderParams as PdfOperationRenderParams,
    type PdfOperationSplitParams as PdfOperationSplitParams,
  };
}
