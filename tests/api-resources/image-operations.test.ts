// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScanDocuments from 'scan-documents';

const client = new ScanDocuments({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource imageOperations', () => {
  // Mock server tests are disabled
  test.skip('applyEffect: only required params', async () => {
    const responsePromise = client.imageOperations.applyEffect({
      effect: 'grayscale',
      input: 'file_avyrvozb9302uwhq',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('applyEffect: required and optional params', async () => {
    const response = await client.imageOperations.applyEffect({
      effect: 'grayscale',
      input: 'file_avyrvozb9302uwhq',
      callback_url: 'https://example.com/callback',
      name: 'Example Image',
    });
  });

  // Mock server tests are disabled
  test.skip('convert: only required params', async () => {
    const responsePromise = client.imageOperations.convert({
      input: 'file_avyrvozb9302uwhq',
      target_format: 'image/png',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('convert: required and optional params', async () => {
    const response = await client.imageOperations.convert({
      input: 'file_avyrvozb9302uwhq',
      target_format: 'image/png',
      callback_url: 'https://example.com/callback',
      name: 'Example Image',
    });
  });

  // Mock server tests are disabled
  test.skip('detectDocuments: only required params', async () => {
    const responsePromise = client.imageOperations.detectDocuments({ input: 'file_avyrvozb9302uwhq' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('detectDocuments: required and optional params', async () => {
    const response = await client.imageOperations.detectDocuments({
      input: 'file_avyrvozb9302uwhq',
      callback_url: 'https://example.com/callback',
    });
  });

  // Mock server tests are disabled
  test.skip('extractText: only required params', async () => {
    const responsePromise = client.imageOperations.extractText({
      format: 'plain',
      input: 'file_avyrvozb9302uwhq',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractText: required and optional params', async () => {
    const response = await client.imageOperations.extractText({
      format: 'plain',
      input: 'file_avyrvozb9302uwhq',
      callback_url: 'https://example.com/callback',
    });
  });

  // Mock server tests are disabled
  test.skip('scan: only required params', async () => {
    const responsePromise = client.imageOperations.scan({
      effect: 'none',
      input: 'file_avyrvozb9302uwhq',
      scan_mode: 'standard',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('scan: required and optional params', async () => {
    const response = await client.imageOperations.scan({
      effect: 'none',
      input: 'file_avyrvozb9302uwhq',
      scan_mode: 'standard',
      callback_url: 'https://example.com/callback',
      name: 'Example Image',
    });
  });

  // Mock server tests are disabled
  test.skip('warp: only required params', async () => {
    const responsePromise = client.imageOperations.warp({
      input: 'file_avyrvozb9302uwhq',
      vertices: [
        { x: 0, y: 0 },
        { x: 100, y: 10 },
        { x: 100, y: 100 },
        { x: 0, y: 90 },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('warp: required and optional params', async () => {
    const response = await client.imageOperations.warp({
      input: 'file_avyrvozb9302uwhq',
      vertices: [
        { x: 0, y: 0 },
        { x: 100, y: 10 },
        { x: 100, y: 100 },
        { x: 0, y: 90 },
      ],
      callback_url: 'https://example.com/callback',
      name: 'Example Image',
    });
  });
});
