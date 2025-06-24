# Shared

Types:

- <code><a href="./src/resources/shared.ts">JsonSchemaSpec</a></code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> File</code>
- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /v1/files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> void</code>
- <code title="get /v1/files/{id}/download">client.files.<a href="./src/resources/files.ts">download</a>(id) -> Response</code>
- <code title="post /v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> File</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /v1/tasks/{id}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(id) -> TaskResponse</code>
- <code title="get /v1/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /v1/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponse</code>

# ImageOperations

Types:

- <code><a href="./src/resources/image-operations.ts">ApplyEffectResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">BoundingBox</a></code>
- <code><a href="./src/resources/image-operations.ts">ConvertRequest</a></code>
- <code><a href="./src/resources/image-operations.ts">ConvertResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">CoordinatesItem</a></code>
- <code><a href="./src/resources/image-operations.ts">DetectDocumentsResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">ExtractTextRequest</a></code>
- <code><a href="./src/resources/image-operations.ts">ExtractTextResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">ImageFromTaskResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">ScanResponse</a></code>
- <code><a href="./src/resources/image-operations.ts">WarpRequest</a></code>
- <code><a href="./src/resources/image-operations.ts">WarpResponse</a></code>

Methods:

- <code title="post /v1/image-operations/apply-effect">client.imageOperations.<a href="./src/resources/image-operations.ts">applyEffect</a>({ ...params }) -> ApplyEffectResponse</code>
- <code title="post /v1/image-operations/convert">client.imageOperations.<a href="./src/resources/image-operations.ts">convert</a>({ ...params }) -> ConvertResponse</code>
- <code title="post /v1/image-operations/detect-documents">client.imageOperations.<a href="./src/resources/image-operations.ts">detectDocuments</a>({ ...params }) -> DetectDocumentsResponse</code>
- <code title="post /v1/image-operations/extract-text">client.imageOperations.<a href="./src/resources/image-operations.ts">extractText</a>({ ...params }) -> ExtractTextResponse</code>
- <code title="post /v1/image-operations/scan">client.imageOperations.<a href="./src/resources/image-operations.ts">scan</a>({ ...params }) -> ScanResponse</code>
- <code title="post /v1/image-operations/warp">client.imageOperations.<a href="./src/resources/image-operations.ts">warp</a>({ ...params }) -> WarpResponse</code>

# PdfOperations

Types:

- <code><a href="./src/resources/pdf-operations.ts">DocumentFromTask</a></code>
- <code><a href="./src/resources/pdf-operations.ts">ExtractPages</a></code>
- <code><a href="./src/resources/pdf-operations.ts">Merge</a></code>
- <code><a href="./src/resources/pdf-operations.ts">Render</a></code>
- <code><a href="./src/resources/pdf-operations.ts">Split</a></code>

Methods:

- <code title="post /v1/pdf-operations/extract-pages">client.pdfOperations.<a href="./src/resources/pdf-operations.ts">extractPages</a>({ ...params }) -> ExtractPages</code>
- <code title="post /v1/pdf-operations/merge">client.pdfOperations.<a href="./src/resources/pdf-operations.ts">merge</a>({ ...params }) -> Merge</code>
- <code title="post /v1/pdf-operations/render">client.pdfOperations.<a href="./src/resources/pdf-operations.ts">render</a>({ ...params }) -> Render</code>
- <code title="post /v1/pdf-operations/split">client.pdfOperations.<a href="./src/resources/pdf-operations.ts">split</a>({ ...params }) -> Split</code>
