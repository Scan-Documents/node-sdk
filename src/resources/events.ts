// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ImageOperationsAPI from './image-operations';
import * as PdfOperationsAPI from './pdf-operations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Retrieves a paginated list of events belonging to the authenticated user.
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/v1/events', { query, ...options });
  }
}

export interface EventListResponse {
  /**
   * The list of events
   */
  data: Array<
    | EventListResponse.FileCreatedEvent
    | EventListResponse.FileDeletedEvent
    | EventListResponse.TaskCreatedEvent
    | EventListResponse.TaskCompletedEvent
    | EventListResponse.TaskDeletedEvent
    | EventListResponse.TaskFailedEvent
  >;

  links: EventListResponse.Links;
}

export namespace EventListResponse {
  /**
   * Event emitted when a file is created
   */
  export interface FileCreatedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data: FileCreatedEvent.ImageData | FileCreatedEvent.DocumentData;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'file.created';
  }

  export namespace FileCreatedEvent {
    export interface ImageData {
      /**
       * The ID of the file
       */
      id: string;

      /**
       * The name of the file
       */
      name: string;

      properties: ImageData.Properties;

      /**
       * The id of the task that generated this file, if any
       */
      task_id: string | null;

      /**
       * The MIME type of the file
       */
      type: 'image/png' | 'image/jpeg' | 'image/webp';
    }

    export namespace ImageData {
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

    export interface DocumentData {
      /**
       * The ID of the file
       */
      id: string;

      /**
       * The name of the file
       */
      name: string;

      properties: DocumentData.Properties;

      /**
       * The id of the task that generated this file, if any
       */
      task_id: string | null;

      /**
       * The MIME type of the file
       */
      type: 'application/pdf';
    }

    export namespace DocumentData {
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

  /**
   * Event emitted when a file is deleted
   */
  export interface FileDeletedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data: FileDeletedEvent.Data;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'file.deleted';
  }

  export namespace FileDeletedEvent {
    /**
     * The data of the event
     */
    export interface Data {
      /**
       * The ID of the file
       */
      id: string;

      /**
       * The name of the file
       */
      name: string;

      /**
       * The type of the file that was deleted
       */
      type: 'image/png' | 'image/jpeg' | 'image/webp' | 'application/pdf';
    }
  }

  /**
   * Event emitted when a task is created
   */
  export interface TaskCreatedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data: TaskCreatedEvent.Data;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'task.created';
  }

  export namespace TaskCreatedEvent {
    /**
     * The data of the event
     */
    export interface Data {
      /**
       * The ID of the task
       */
      id: string;

      /**
       * The operation of the task
       */
      operation:
        | 'warp'
        | 'extract-text'
        | 'convert'
        | 'render'
        | 'split'
        | 'merge'
        | 'extract-pages'
        | 'detect-documents'
        | 'apply-effect';
    }
  }

  /**
   * Event emitted when a task is completed
   */
  export interface TaskCompletedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data:
      | TaskCompletedEvent.ApplyEffectCompletedData
      | TaskCompletedEvent.DetectDocumentCompletedData
      | TaskCompletedEvent.WarpCompletedData
      | TaskCompletedEvent.ExtractTextCompletedData
      | TaskCompletedEvent.ConvertCompletedData
      | TaskCompletedEvent.RenderCompletedData
      | TaskCompletedEvent.SplitCompletedData
      | TaskCompletedEvent.MergeCompletedData
      | TaskCompletedEvent.ExtractPagesCompletedData;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'task.completed';
  }

  export namespace TaskCompletedEvent {
    /**
     * Task Event Data
     */
    export interface ApplyEffectCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'apply-effect';

      result: ApplyEffectCompletedData.Result;
    }

    export namespace ApplyEffectCompletedData {
      export interface Result {
        generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
      }
    }

    /**
     * Task Event Data
     */
    export interface DetectDocumentCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'detect-documents';

      result: DetectDocumentCompletedData.Result;
    }

    export namespace DetectDocumentCompletedData {
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

    /**
     * Task Event Data
     */
    export interface WarpCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'warp';

      result: WarpCompletedData.Result;
    }

    export namespace WarpCompletedData {
      export interface Result {
        generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
      }
    }

    /**
     * Task Event Data
     */
    export interface ExtractTextCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'extract-text';

      result: ExtractTextCompletedData.Result;
    }

    export namespace ExtractTextCompletedData {
      export interface Result {
        content: string;

        format: 'plain' | 'markdown' | 'html' | 'json';
      }
    }

    /**
     * Task Event Data
     */
    export interface ConvertCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'convert';

      result: ConvertCompletedData.Result;
    }

    export namespace ConvertCompletedData {
      export interface Result {
        generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
      }
    }

    /**
     * Task Event Data
     */
    export interface RenderCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'render';

      result: RenderCompletedData.Result;
    }

    export namespace RenderCompletedData {
      export interface Result {
        generated_files: Array<ImageOperationsAPI.ImageFromTaskResponse>;
      }
    }

    /**
     * Task Event Data
     */
    export interface SplitCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'split';

      result: SplitCompletedData.Result;
    }

    export namespace SplitCompletedData {
      export interface Result {
        generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
      }
    }

    /**
     * Task Event Data
     */
    export interface MergeCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'merge';

      result: MergeCompletedData.Result;
    }

    export namespace MergeCompletedData {
      export interface Result {
        generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
      }
    }

    /**
     * Task Event Data
     */
    export interface ExtractPagesCompletedData {
      /**
       * The ID of the task
       */
      id: string;

      operation: 'extract-pages';

      result: ExtractPagesCompletedData.Result;
    }

    export namespace ExtractPagesCompletedData {
      export interface Result {
        generated_files: Array<PdfOperationsAPI.DocumentFromTask>;
      }
    }
  }

  /**
   * Event emitted when a task is deleted
   */
  export interface TaskDeletedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data: TaskDeletedEvent.Data;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'task.deleted';
  }

  export namespace TaskDeletedEvent {
    /**
     * The data of the event
     */
    export interface Data {
      /**
       * The ID of the task
       */
      id: string;

      /**
       * The operation of the task
       */
      operation:
        | 'warp'
        | 'extract-text'
        | 'convert'
        | 'render'
        | 'split'
        | 'merge'
        | 'extract-pages'
        | 'detect-documents'
        | 'apply-effect';
    }
  }

  /**
   * Event emitted when a task fails
   */
  export interface TaskFailedEvent {
    /**
     * The id of the event
     */
    id: string;

    /**
     * The data of the event
     */
    data: TaskFailedEvent.Data;

    /**
     * The timestamp of the moment when the event was created in ISO 8601 format
     */
    timestamp: string;

    /**
     * The type of the event
     */
    type: 'task.failed';
  }

  export namespace TaskFailedEvent {
    /**
     * The data of the event
     */
    export interface Data {
      /**
       * The ID of the task
       */
      id: string;

      /**
       * The operation of the task
       */
      operation:
        | 'warp'
        | 'extract-text'
        | 'convert'
        | 'render'
        | 'split'
        | 'merge'
        | 'extract-pages'
        | 'detect-documents'
        | 'apply-effect';

      result: Data.Result;
    }

    export namespace Data {
      export interface Result {
        /**
         * Additional details about the error
         */
        details: { [key: string]: unknown };

        /**
         * The error message
         */
        error: string;
      }
    }
  }

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

export interface EventListParams {
  from?: string;

  take?: number;
}

export declare namespace Events {
  export { type EventListResponse as EventListResponse, type EventListParams as EventListParams };
}
