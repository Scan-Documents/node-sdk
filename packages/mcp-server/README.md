# Scan Documents TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export SCAN_DOCUMENTS_API_KEY="My API Key"
npx -y scan-documents-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "scan_documents_api": {
      "command": "npx",
      "args": ["-y", "scan-documents-mcp", "--client=claude", "--tools=all"],
      "env": {
        "SCAN_DOCUMENTS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------- | ------------------------ | --------------- |
| `x-api-key` | `apiKey` | ApiKeyAuth |

A configuration JSON for this server might look like this:

```json
{
  "mcpServers": {
    "scan_documents_api": {
      "url": "http://localhost:3000", # or wherever the server is hosted
      "headers": {
        'x-api-key': 'My API Key'
      }
    }
  }
}
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "scan-documents-mcp/server";

// import a specific tool
import retrieveFiles from "scan-documents-mcp/tools/files/retrieve-files";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveFiles, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `files`:

- `retrieve_files` (`read`): Retrieves the data for a specific file by its ID.
- `list_files` (`read`): Retrieves a paginated list of files belonging to the authenticated user.
- `delete_files` (`write`): Deletes a specific file by its ID.
- `download_files` (`read`): Downloads the content of a specific file by its ID.
- `upload_files` (`write`): Uploads a file to the user's storage. The file size is limited to 10MB.

### Resource `tasks`:

- `retrieve_tasks` (`read`): Retrieves the data for a specific task by its ID.
- `list_tasks` (`read`): Retrieves a paginated list of tasks belonging to the authenticated user.

### Resource `events`:

- `list_events` (`read`): Retrieves a paginated list of events belonging to the authenticated user.

### Resource `image_operations`:

- `apply_effect_image_operations` (`write`): Creates a task to apply a specified visual effect to an image.
- `convert_image_operations` (`write`): Creates a task to convert an image file to a different format.
- `detect_documents_image_operations` (`write`): Creates a task to detect document boundaries within an image.
- `extract_text_image_operations` (`write`): Creates a task to extract text from a specified image file.
- `scan_image_operations` (`write`): Creates a task to scan an image file.
  This is an equivalent operation for `detect-documents` and `warp` combined, additionally it can apply effects to the scanned image.
- `warp_image_operations` (`write`): Creates a task to apply perspective correction (warp) to an image based on detected document boundaries.

### Resource `pdf_operations`:

- `extract_pages_pdf_operations` (`write`): Creates a task to extract specific pages from a PDF file into a new PDF file.
- `merge_pdf_operations` (`write`): Creates a task to merge multiple PDF and/or image files into a single PDF file.
- `render_pdf_operations` (`write`): Creates a task to render specified pages of a PDF file as images.
- `split_pdf_operations` (`write`): Creates a task to split a PDF file into multiple single-page PDF files.
