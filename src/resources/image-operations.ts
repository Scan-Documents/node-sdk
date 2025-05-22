// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ImageOperationsAPI from './image-operations';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ImageOperations extends APIResource {
  /**
   * Creates a task to apply a specified visual effect to an image.
   *
   * @example
   * ```ts
   * const applyEffectResponse =
   *   await client.imageOperations.applyEffect({
   *     effect: 'grayscale',
   *     input: 'file_avyrvozb9302uwhq',
   *   });
   * ```
   */
  applyEffect(
    body: ImageOperationApplyEffectParams,
    options?: RequestOptions,
  ): APIPromise<ApplyEffectResponse> {
    return this._client.post('/v1/image-operations/apply-effect', { body, ...options });
  }

  /**
   * Creates a task to convert an image file to a different format.
   *
   * @example
   * ```ts
   * const convertResponse =
   *   await client.imageOperations.convert({
   *     input: 'file_avyrvozb9302uwhq',
   *     target_format: 'image/png',
   *   });
   * ```
   */
  convert(body: ImageOperationConvertParams, options?: RequestOptions): APIPromise<ConvertResponse> {
    return this._client.post('/v1/image-operations/convert', { body, ...options });
  }

  /**
   * Creates a task to detect document boundaries within an image.
   *
   * @example
   * ```ts
   * const detectDocumentsResponse =
   *   await client.imageOperations.detectDocuments({
   *     input: 'file_avyrvozb9302uwhq',
   *   });
   * ```
   */
  detectDocuments(
    body: ImageOperationDetectDocumentsParams,
    options?: RequestOptions,
  ): APIPromise<DetectDocumentsResponse> {
    return this._client.post('/v1/image-operations/detect-documents', { body, ...options });
  }

  /**
   * Creates a task to extract text from a specified image file.
   *
   * @example
   * ```ts
   * const extractTextResponse =
   *   await client.imageOperations.extractText({
   *     format: 'plain',
   *     input: 'file_avyrvozb9302uwhq',
   *   });
   * ```
   */
  extractText(
    body: ImageOperationExtractTextParams,
    options?: RequestOptions,
  ): APIPromise<ExtractTextResponse> {
    return this._client.post('/v1/image-operations/extract-text', { body, ...options });
  }

  /**
   * Creates a task to apply perspective correction (warp) to an image based on
   * detected document boundaries.
   *
   * @example
   * ```ts
   * const warpResponse = await client.imageOperations.warp({
   *   input: 'file_avyrvozb9302uwhq',
   *   vertices: [
   *     { x: 0, y: 0 },
   *     { x: 100, y: 10 },
   *     { x: 100, y: 100 },
   *     { x: 0, y: 90 },
   *   ],
   * });
   * ```
   */
  warp(body: ImageOperationWarpParams, options?: RequestOptions): APIPromise<WarpResponse> {
    return this._client.post('/v1/image-operations/warp', { body, ...options });
  }
}

/**
 * The response of an apply-effect task
 */
export type ApplyEffectResponse =
  | ApplyEffectResponse.CompletedApplyEffectTaskResponse
  | ApplyEffectResponse.PendingApplyEffectTaskResponse
  | ApplyEffectResponse.ProcessingApplyEffectTaskResponse
  | ApplyEffectResponse.FailedApplyEffectTaskResponse;

export namespace ApplyEffectResponse {
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
}

/**
 * The rectangle that contains the document in the image
 */
export interface BoundingBox {
  /**
   * The height of the bounding box inside the image in pixels
   */
  height: number;

  /**
   * The position of the top-left corner of the bounding box inside the image in
   * pixels
   */
  left: number;

  /**
   * The position of the top-left corner of the bounding box inside the image in
   * pixels
   */
  top: number;

  /**
   * The width of the bounding box inside the image in pixels
   */
  width: number;
}

export type ConvertRequest =
  | ConvertRequest.PngOptions
  | ConvertRequest.JpegOptions
  | ConvertRequest.WebpOptions;

export namespace ConvertRequest {
  export interface PngOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/png';

    /**
     * The name of the file
     */
    name?: string;
  }

  export interface JpegOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * Image quality (1-100) for lossy formats like jpeg.
     */
    quality: number;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/jpeg';

    /**
     * The name of the file
     */
    name?: string;
  }

  export interface WebpOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * Image quality (1-100) for lossy formats like webp.
     */
    quality: number;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/webp';

    /**
     * The name of the file
     */
    name?: string;
  }
}

/**
 * The response of an convert task
 */
export type ConvertResponse =
  | ConvertResponse.CompletedConvertTaskResponse
  | ConvertResponse.PendingConvertTaskResponse
  | ConvertResponse.ProcessingConvertTaskResponse
  | ConvertResponse.FailedConvertTaskResponse;

export namespace ConvertResponse {
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
}

export interface CoordinatesItem {
  /**
   * The x coordinate of the vertex inside the image in pixels
   */
  x: number;

  /**
   * The y coordinate of the vertex inside the image in pixels
   */
  y: number;
}

/**
 * The response of the detect-documents operation
 */
export type DetectDocumentsResponse =
  | DetectDocumentsResponse.CompletedConvertTaskResponse
  | DetectDocumentsResponse.PendingConvertTaskResponse
  | DetectDocumentsResponse.ProcessingConvertTaskResponse
  | DetectDocumentsResponse.FailedConvertTaskResponse;

export namespace DetectDocumentsResponse {
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
}

/**
 * Extract text from an image in various formats.
 */
export type ExtractTextRequest =
  | ExtractTextRequest.Plain
  | ExtractTextRequest.Markdown
  | ExtractTextRequest.HTML
  | ExtractTextRequest.Json;

export namespace ExtractTextRequest {
  export interface Plain {
    /**
     * The format of the text to be extracted.
     */
    format: 'plain';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface Markdown {
    /**
     * The format of the text to be extracted.
     */
    format: 'markdown';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface HTML {
    /**
     * The format of the text to be extracted.
     */
    format: 'html';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface Json {
    /**
     * The format of the text to be extracted.
     */
    format: 'json';

    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * An OpenAPI schema object describing the expected JSON structure. Required if
     * format is 'json'.
     */
    schema: Shared.JsonSchemaSpec;
  }
}

/**
 * The response of an extract-text task
 */
export type ExtractTextResponse =
  | ExtractTextResponse.CompletedExtractTextTaskResponse
  | ExtractTextResponse.PendingExtractTextTaskResponse
  | ExtractTextResponse.ProcessingExtractTextTaskResponse
  | ExtractTextResponse.FailedExtractTextTaskResponse;

export namespace ExtractTextResponse {
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
}

/**
 * The response for an image file from a task
 */
export interface ImageFromTaskResponse {
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

  properties: ImageFromTaskResponse.Properties;

  /**
   * The id of the task that generated this file
   */
  task_id: string;

  /**
   * The MIME type of the file
   */
  type: 'image/png' | 'image/jpeg' | 'image/webp';
}

export namespace ImageFromTaskResponse {
  export interface Properties {
    /**
     * The height of the image in pixels
     */
    height: number;

    /**
     * The size of the image in bytes
     */
    size: number;

    /**
     * The width of the image in pixels
     */
    width: number;
  }
}

/**
 * Transform an image by warping it to a quadrilateral.
 */
export interface WarpRequest {
  /**
   * The id of the file to operate on.
   */
  input: string;

  /**
   * Coordinates of the 4 vertices of the quadrilateral to warp the image to.
   */
  vertices: Array<unknown>;

  /**
   * The name of the file
   */
  name?: string;
}

/**
 * The response of an warp task
 */
export type WarpResponse =
  | WarpResponse.CompletedWarpTaskResponse
  | WarpResponse.PendingWarpTaskResponse
  | WarpResponse.ProcessingWarpTaskResponse
  | WarpResponse.FailedWarpTaskResponse;

export namespace WarpResponse {
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
}

export interface ImageOperationApplyEffectParams {
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

export type ImageOperationConvertParams =
  | ImageOperationConvertParams.PngOptions
  | ImageOperationConvertParams.JpegOptions
  | ImageOperationConvertParams.WebpOptions;

export declare namespace ImageOperationConvertParams {
  export interface PngOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/png';

    /**
     * The name of the file
     */
    name?: string;
  }

  export interface JpegOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * Image quality (1-100) for lossy formats like jpeg.
     */
    quality: number;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/jpeg';

    /**
     * The name of the file
     */
    name?: string;
  }

  export interface WebpOptions {
    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * Image quality (1-100) for lossy formats like webp.
     */
    quality: number;

    /**
     * The format to convert the image to.
     */
    target_format: 'image/webp';

    /**
     * The name of the file
     */
    name?: string;
  }
}

export interface ImageOperationDetectDocumentsParams {
  /**
   * The id of the file to operate on.
   */
  input: string;
}

export type ImageOperationExtractTextParams =
  | ImageOperationExtractTextParams.Plain
  | ImageOperationExtractTextParams.Markdown
  | ImageOperationExtractTextParams.HTML
  | ImageOperationExtractTextParams.Json;

export declare namespace ImageOperationExtractTextParams {
  export interface Plain {
    /**
     * The format of the text to be extracted.
     */
    format: 'plain';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface Markdown {
    /**
     * The format of the text to be extracted.
     */
    format: 'markdown';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface HTML {
    /**
     * The format of the text to be extracted.
     */
    format: 'html';

    /**
     * The id of the file to operate on.
     */
    input: string;
  }

  export interface Json {
    /**
     * The format of the text to be extracted.
     */
    format: 'json';

    /**
     * The id of the file to operate on.
     */
    input: string;

    /**
     * An OpenAPI schema object describing the expected JSON structure. Required if
     * format is 'json'.
     */
    schema: Shared.JsonSchemaSpec;
  }
}

export interface ImageOperationWarpParams {
  /**
   * The id of the file to operate on.
   */
  input: string;

  /**
   * Coordinates of the 4 vertices of the quadrilateral to warp the image to.
   */
  vertices: Array<unknown>;

  /**
   * The name of the file
   */
  name?: string;
}

export declare namespace ImageOperations {
  export {
    type ApplyEffectResponse as ApplyEffectResponse,
    type BoundingBox as BoundingBox,
    type ConvertRequest as ConvertRequest,
    type ConvertResponse as ConvertResponse,
    type CoordinatesItem as CoordinatesItem,
    type DetectDocumentsResponse as DetectDocumentsResponse,
    type ExtractTextRequest as ExtractTextRequest,
    type ExtractTextResponse as ExtractTextResponse,
    type ImageFromTaskResponse as ImageFromTaskResponse,
    type WarpRequest as WarpRequest,
    type WarpResponse as WarpResponse,
    type ImageOperationApplyEffectParams as ImageOperationApplyEffectParams,
    type ImageOperationConvertParams as ImageOperationConvertParams,
    type ImageOperationDetectDocumentsParams as ImageOperationDetectDocumentsParams,
    type ImageOperationExtractTextParams as ImageOperationExtractTextParams,
    type ImageOperationWarpParams as ImageOperationWarpParams,
  };
}
