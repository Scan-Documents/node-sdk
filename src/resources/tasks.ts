// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ImageOperationsAPI from './image-operations';
import * as PdfOperationsAPI from './pdf-operations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Retrieves the data for a specific task by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TaskResponse> {
    return this._client.get(path`/v1/tasks/${id}`, options);
  }

  /**
   * Retrieves a paginated list of tasks belonging to the authenticated user.
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/v1/tasks', { query, ...options });
  }
}

/**
 * Task response
 */
export type TaskResponse =
  | TaskResponse.CompletedApplyEffectTaskResponse
  | TaskResponse.PendingApplyEffectTaskResponse
  | TaskResponse.ProcessingApplyEffectTaskResponse
  | TaskResponse.FailedApplyEffectTaskResponse
  | TaskResponse.CompletedConvertTaskResponse
  | TaskResponse.PendingConvertTaskResponse
  | TaskResponse.ProcessingConvertTaskResponse
  | TaskResponse.FailedConvertTaskResponse
  | TaskResponse.CompletedConvertTaskResponse
  | TaskResponse.PendingConvertTaskResponse
  | TaskResponse.ProcessingConvertTaskResponse
  | TaskResponse.FailedConvertTaskResponse
  | TaskResponse.CompletedExtractTextTaskResponse
  | TaskResponse.PendingExtractTextTaskResponse
  | TaskResponse.ProcessingExtractTextTaskResponse
  | TaskResponse.FailedExtractTextTaskResponse
  | TaskResponse.CompletedWarpTaskResponse
  | TaskResponse.PendingWarpTaskResponse
  | TaskResponse.ProcessingWarpTaskResponse
  | TaskResponse.FailedWarpTaskResponse
  | TaskResponse.CompletedExtractPagesTaskResponse
  | TaskResponse.PendingExtractPagesTaskResponse
  | TaskResponse.ProcessingExtractPagesTaskResponse
  | TaskResponse.FailedExtractPagesTaskResponse
  | TaskResponse.CompletedMergeTaskResponse
  | TaskResponse.PendingMergeTaskResponse
  | TaskResponse.ProcessingMergeTaskResponse
  | TaskResponse.FailedMergeTaskResponse
  | TaskResponse.CompletedRenderTaskResponse
  | TaskResponse.PendingRenderTaskResponse
  | TaskResponse.ProcessingRenderTaskResponse
  | TaskResponse.FailedRenderTaskResponse
  | TaskResponse.CompletedSplitTaskResponse
  | TaskResponse.PendingSplitTaskResponse
  | TaskResponse.ProcessingSplitTaskResponse
  | TaskResponse.FailedSplitTaskResponse;

export namespace TaskResponse {
  export interface CompletedApplyEffectTaskResponse {
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
    operation: 'apply-effect';

    parameters: CompletedApplyEffectTaskResponse.Parameters;

    result: CompletedApplyEffectTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedApplyEffectTaskResponse {
    export interface Parameters {
      /**
       * The effect to apply to the image
       */
      effect: 'grayscale' | 'scanner' | 'black-background';

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
      generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
    }
  }

  export interface PendingApplyEffectTaskResponse {
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
    operation: 'apply-effect';

    parameters: PendingApplyEffectTaskResponse.Parameters;

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

  export namespace PendingApplyEffectTaskResponse {
    export interface Parameters {
      /**
       * The effect to apply to the image
       */
      effect: 'grayscale' | 'scanner' | 'black-background';

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

  export interface ProcessingApplyEffectTaskResponse {
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
    operation: 'apply-effect';

    parameters: ProcessingApplyEffectTaskResponse.Parameters;

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

  export namespace ProcessingApplyEffectTaskResponse {
    export interface Parameters {
      /**
       * The effect to apply to the image
       */
      effect: 'grayscale' | 'scanner' | 'black-background';

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

  export interface FailedApplyEffectTaskResponse {
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
    operation: 'apply-effect';

    parameters: FailedApplyEffectTaskResponse.Parameters;

    result: FailedApplyEffectTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedApplyEffectTaskResponse {
    export interface Parameters {
      /**
       * The effect to apply to the image
       */
      effect: 'grayscale' | 'scanner' | 'black-background';

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
      details: Record<string, unknown>;

      error: string;
    }
  }

  export interface CompletedConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

    result: CompletedConvertTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedConvertTaskResponse {
    export interface Result {
      generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
    }
  }

  export interface PendingConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

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

  export interface ProcessingConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

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

  export interface FailedConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

    result: FailedConvertTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedConvertTaskResponse {
    export interface Result {
      details: Record<string, unknown>;

      error: string;
    }
  }

  export interface CompletedConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

    result: CompletedConvertTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedConvertTaskResponse {
    export interface Result {
      /**
       * The list of documents detected in the image
       */
      documents: Array<Result.Document>;
    }

    export namespace Result {
      export interface Document {
        /**
         * The rectangle that contains the document in the image
         */
        bounding_box: ImageOperationsAPI.BoundingBox;

        /**
         * The coordinates of the vertex inside the image
         */
        vertices: Array<ImageOperationsAPI.CoordinatesItem>;
      }
    }
  }

  export interface PendingConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

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

  export interface ProcessingConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

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

  export interface FailedConvertTaskResponse {
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
    operation: 'convert';

    parameters: ImageOperationsAPI.ConvertRequest;

    result: FailedConvertTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedConvertTaskResponse {
    export interface Result {
      details: Record<string, unknown>;

      error: string;
    }
  }

  export interface CompletedExtractTextTaskResponse {
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
    operation: 'extract-text';

    /**
     * Extract text from an image in various formats.
     */
    parameters: ImageOperationsAPI.ExtractTextRequest;

    result: CompletedExtractTextTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedExtractTextTaskResponse {
    export interface Result {
      content: string;

      format: 'plain' | 'markdown' | 'html' | 'json';
    }
  }

  export interface PendingExtractTextTaskResponse {
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
    operation: 'extract-text';

    /**
     * Extract text from an image in various formats.
     */
    parameters: ImageOperationsAPI.ExtractTextRequest;

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

  export interface ProcessingExtractTextTaskResponse {
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
    operation: 'extract-text';

    /**
     * Extract text from an image in various formats.
     */
    parameters: ImageOperationsAPI.ExtractTextRequest;

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

  export interface FailedExtractTextTaskResponse {
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
    operation: 'extract-text';

    /**
     * Extract text from an image in various formats.
     */
    parameters: ImageOperationsAPI.ExtractTextRequest;

    result: FailedExtractTextTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedExtractTextTaskResponse {
    export interface Result {
      details: Record<string, unknown>;

      error: string;
    }
  }

  export interface CompletedWarpTaskResponse {
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
    operation: 'warp';

    /**
     * Transform an image by warping it to a quadrilateral.
     */
    parameters: ImageOperationsAPI.WarpRequest;

    result: CompletedWarpTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'completed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace CompletedWarpTaskResponse {
    export interface Result {
      generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
    }
  }

  export interface PendingWarpTaskResponse {
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
    operation: 'warp';

    /**
     * Transform an image by warping it to a quadrilateral.
     */
    parameters: ImageOperationsAPI.WarpRequest;

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

  export interface ProcessingWarpTaskResponse {
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
    operation: 'warp';

    /**
     * Transform an image by warping it to a quadrilateral.
     */
    parameters: ImageOperationsAPI.WarpRequest;

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

  export interface FailedWarpTaskResponse {
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
    operation: 'warp';

    /**
     * Transform an image by warping it to a quadrilateral.
     */
    parameters: ImageOperationsAPI.WarpRequest;

    result: FailedWarpTaskResponse.Result;

    /**
     * The current status of the task.
     */
    status: 'failed';

    /**
     * The last update date of the task in ISO format.
     */
    updated_at: string;
  }

  export namespace FailedWarpTaskResponse {
    export interface Result {
      details: Record<string, unknown>;

      error: string;
    }
  }

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
      details: Record<string, unknown>;

      error: string;
    }
  }

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
      details: Record<string, unknown>;

      error: string;
    }
  }

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
      details: Record<string, unknown>;

      error: string;
    }
  }

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
      details: Record<string, unknown>;

      error: string;
    }
  }
}

/**
 * Paginated list of tasks
 */
export interface TaskListResponse {
  /**
   * Array of task responses
   */
  data: Array<TaskResponse>;

  links: TaskListResponse.Links;
}

export namespace TaskListResponse {
  export interface Links {
    /**
     * Next page link
     */
    next: string | null;

    /**
     * Previous page link
     */
    previous: string | null;
  }
}

export interface TaskListParams {
  from?: string;

  take?: number;
}

export declare namespace Tasks {
  export {
    type TaskResponse as TaskResponse,
    type TaskListResponse as TaskListResponse,
    type TaskListParams as TaskListParams,
  };
}
