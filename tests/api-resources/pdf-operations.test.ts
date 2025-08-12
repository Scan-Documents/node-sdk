// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScanDocuments from 'scan-documents';

const client = new ScanDocuments({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pdfOperations', () => {
  // Prism tests are disabled
  test.skip('extractPages: only required params', async () => {
    const responsePromise = client.pdfOperations.extractPages({
      input: 'file_avyrvozb9302uwhq',
      pages: '2-7',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extractPages: required and optional params', async () => {
    const response = await client.pdfOperations.extractPages({
      input: 'file_avyrvozb9302uwhq',
      pages: '2-7',
      callback_url: 'https://example.com/callback',
      name: 'File Name',
    });
  });

  // Prism tests are disabled
  test.skip('merge: only required params', async () => {
    const responsePromise = client.pdfOperations.merge({ input: ['file_avyrvozb9302uwhq'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('merge: required and optional params', async () => {
    const response = await client.pdfOperations.merge({
      input: ['file_avyrvozb9302uwhq'],
      callback_url: 'https://example.com/callback',
      name: 'File Name',
    });
  });

  // Prism tests are disabled
  test.skip('render: only required params', async () => {
    const responsePromise = client.pdfOperations.render({ input: 'file_avyrvozb9302uwhq' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('render: required and optional params', async () => {
    const response = await client.pdfOperations.render({
      input: 'file_avyrvozb9302uwhq',
      callback_url: 'https://example.com/callback',
      dpi: 300,
      name: 'File Name',
      pages: '2-7',
    });
  });

  // Prism tests are disabled
  test.skip('split: only required params', async () => {
    const responsePromise = client.pdfOperations.split({ input: 'file_avyrvozb9302uwhq' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('split: required and optional params', async () => {
    const response = await client.pdfOperations.split({
      input: 'file_avyrvozb9302uwhq',
      callback_url: 'https://example.com/callback',
      name: 'File Name',
    });
  });
});
