// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ScanDocuments } from '../client';

export abstract class APIResource {
  protected _client: ScanDocuments;

  constructor(client: ScanDocuments) {
    this._client = client;
  }
}
