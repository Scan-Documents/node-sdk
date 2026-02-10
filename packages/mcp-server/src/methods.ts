import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/files/{id}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/v1/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/v1/files/{id}',
  },
  {
    clientCallName: 'client.files.download',
    fullyQualifiedName: 'files.download',
    httpMethod: 'get',
    httpPath: '/v1/files/{id}/download',
  },
  {
    clientCallName: 'client.files.upload',
    fullyQualifiedName: 'files.upload',
    httpMethod: 'post',
    httpPath: '/v1/files',
  },
  {
    clientCallName: 'client.tasks.retrieve',
    fullyQualifiedName: 'tasks.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/tasks/{id}',
  },
  {
    clientCallName: 'client.tasks.list',
    fullyQualifiedName: 'tasks.list',
    httpMethod: 'get',
    httpPath: '/v1/tasks',
  },
  {
    clientCallName: 'client.events.list',
    fullyQualifiedName: 'events.list',
    httpMethod: 'get',
    httpPath: '/v1/events',
  },
  {
    clientCallName: 'client.imageOperations.applyEffect',
    fullyQualifiedName: 'imageOperations.applyEffect',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/apply-effect',
  },
  {
    clientCallName: 'client.imageOperations.convert',
    fullyQualifiedName: 'imageOperations.convert',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/convert',
  },
  {
    clientCallName: 'client.imageOperations.detectDocuments',
    fullyQualifiedName: 'imageOperations.detectDocuments',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/detect-documents',
  },
  {
    clientCallName: 'client.imageOperations.extractText',
    fullyQualifiedName: 'imageOperations.extractText',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/extract-text',
  },
  {
    clientCallName: 'client.imageOperations.scan',
    fullyQualifiedName: 'imageOperations.scan',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/scan',
  },
  {
    clientCallName: 'client.imageOperations.warp',
    fullyQualifiedName: 'imageOperations.warp',
    httpMethod: 'post',
    httpPath: '/v1/image-operations/warp',
  },
  {
    clientCallName: 'client.pdfOperations.extractPages',
    fullyQualifiedName: 'pdfOperations.extractPages',
    httpMethod: 'post',
    httpPath: '/v1/pdf-operations/extract-pages',
  },
  {
    clientCallName: 'client.pdfOperations.merge',
    fullyQualifiedName: 'pdfOperations.merge',
    httpMethod: 'post',
    httpPath: '/v1/pdf-operations/merge',
  },
  {
    clientCallName: 'client.pdfOperations.render',
    fullyQualifiedName: 'pdfOperations.render',
    httpMethod: 'post',
    httpPath: '/v1/pdf-operations/render',
  },
  {
    clientCallName: 'client.pdfOperations.split',
    fullyQualifiedName: 'pdfOperations.split',
    httpMethod: 'post',
    httpPath: '/v1/pdf-operations/split',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
