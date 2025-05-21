// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves the data for a specific file by its ID.
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/v1/files/${id}`, options);
  }

  /**
   * Retrieves a paginated list of files belonging to the authenticated user.
   *
   * @example
   * ```ts
   * const files = await client.files.list();
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/v1/files', { query, ...options });
  }

  /**
   * Deletes a specific file by its ID.
   *
   * @example
   * ```ts
   * await client.files.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/files/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Downloads the content of a specific file by its ID.
   *
   * @example
   * ```ts
   * const response = await client.files.download('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/files/${id}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a file to the user's storage. The file size is limited to 10MB.
   *
   * @example
   * ```ts
   * const file = await client.files.upload({
   *   file: fs.createReadStream('path/to/file'),
   *   name: 'File Name',
   * });
   * ```
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<File> {
    return this._client.post('/v1/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

/**
 * The response for a file. Properties depend on the file type.
 */
export type File = File.ImageResponse | File.DocumentResponse;

export namespace File {
  /**
   * The response for an image file
   */
  export interface ImageResponse {
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

    properties: ImageResponse.Properties;

    /**
     * The id of the task that generated this file, if any
     */
    task_id: string | null;

    /**
     * The MIME type of the file
     */
    type: 'image/png' | 'image/jpeg' | 'image/webp';
  }

  export namespace ImageResponse {
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
   * The response for a document file
   */
  export interface DocumentResponse {
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

    properties: DocumentResponse.Properties;

    /**
     * The id of the task that generated this file, if any
     */
    task_id: string | null;

    /**
     * The MIME type of the file
     */
    type: 'application/pdf';
  }

  export namespace DocumentResponse {
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
}

export interface FileListResponse {
  /**
   * The list of files
   */
  data: Array<File>;

  links: FileListResponse.Links;
}

export namespace FileListResponse {
  export interface Links {
    /**
     * The URL to the next page of results
     */
    next: string | null;

    /**
     * The URL to the previous page of results
     */
    previous: string | null;
  }
}

export interface FileListParams {
  /**
   * The id of the file from which to start the search
   */
  from?: string;

  /**
   * The number of elements to retrieve
   */
  take?: number;
}

export interface FileUploadParams {
  /**
   * The file to upload
   */
  file: Uploadable;

  /**
   * The name of the file
   */
  name: string;
}

export declare namespace Files {
  export {
    type File as File,
    type FileListResponse as FileListResponse,
    type FileListParams as FileListParams,
    type FileUploadParams as FileUploadParams,
  };
}
