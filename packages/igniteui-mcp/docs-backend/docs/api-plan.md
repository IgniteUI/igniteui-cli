# Plan: C# REST API Backend for Ignite UI Docs

## Context

The MCP server (`igniteui-doc-mcp/src/index.ts`) exposes 3 documentation tools over stdio using an in-memory SQLite DB with FTS4. We need a C# Web API in `docs-backend/` that serves the same data over HTTP REST endpoints, so the MCP server can optionally call these endpoints instead of loading the ~20MB DB directly.

## DB Schema (from `igniteui-doc-mcp/dist/igniteui-docs.db`)

```sql
CREATE TABLE docs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  framework TEXT NOT NULL,
  filename TEXT NOT NULL,
  component TEXT NOT NULL,
  toc_name TEXT,
  premium INTEGER DEFAULT 0,
  keywords TEXT,
  summary TEXT,
  content TEXT NOT NULL,
  UNIQUE(framework, filename)
);

CREATE VIRTUAL TABLE docs_fts USING fts4(
  component, toc_name, keywords, summary, content,
  content='docs', tokenize=porter, prefix="2,3"
);
```

## Endpoints (mirror the 3 documentation MCP tools)

### 1. `GET /api/docs?framework={fw}&filter={optional}`
Maps to `list_components`. Returns a plain text list matching the MCP format exactly:
```
accordion [IgxAccordionComponent]
avatar [IgxAvatarComponent]
grid-editing [IgxGridComponent, IgxColumnComponent]
```
Each line: `{filename without .md} [{component}]`. Content-Type: `text/plain`.

### 2. `GET /api/docs/{framework}/{name}`
Maps to `get_doc`. Returns the full markdown content as `text/plain`. 404 if not found.

### 3. `GET /api/docs/search?framework={fw}&query={text}`
Maps to `search_docs`. Returns plain text matching MCP format:
```
**accordion** [IgxAccordionComponent]
...excerpt with >>>highlights<<<...

**grid-editing** [IgxGridComponent]
...excerpt...
```
Results separated by blank lines. Content-Type: `text/plain`. Top 20 results via FTS4 MATCH + `snippet()`.

## Files to Modify/Create

| File | Action |
|------|--------|
| `docs-backend/docs-backend/docs-backend.csproj` | Add `Microsoft.Data.Sqlite` NuGet, add DB copy-to-output |
| `docs-backend/docs-backend/Program.cs` | Replace todo scaffold with docs API endpoints + SQLite setup |
| `docs-backend/docs-backend/appsettings.json` | Add `DbPath` config |
| `docs-backend/docs-backend/igniteui-docs.db` | Copy from `igniteui-doc-mcp/dist/igniteui-docs.db` (bundled with build) |

## Implementation Details

### `docs-backend.csproj`
- Add `<PackageReference Include="Microsoft.Data.Sqlite" Version="10.0.3" />`
- Keep AOT + InvariantGlobalization (Microsoft.Data.Sqlite supports AOT)

### `appsettings.json`
```json
{
  "DbPath": "igniteui-docs.db"
}
```

### DB Bundling

The `igniteui-docs.db` file is copied into the build output directory so it ships alongside the server executable. Add to `.csproj`:
```xml
<ItemGroup>
  <None Include="igniteui-docs.db" CopyToOutputDirectory="PreserveNewest" />
</ItemGroup>
```
The actual `.db` file is copied (or symlinked) from `igniteui-doc-mcp/dist/igniteui-docs.db` into the project root. This keeps the API self-contained — no external path dependencies at runtime.

### `Program.cs`

Replace the todo sample with:

1. **Startup**: Read `DbPath` from config, open a read-only `SqliteConnection` as a singleton
2. **Response format**: All endpoints return `text/plain` matching the exact MCP tool output format. No JSON response models needed — this keeps things simple and AOT-friendly.
3. **Endpoints**:

**`GET /api/docs`** — `?framework=angular&filter=grid`
```csharp
SELECT framework, filename, component, toc_name, premium, summary
FROM docs WHERE framework = @fw
AND (filename LIKE @f OR toc_name LIKE @f OR component LIKE @f OR keywords LIKE @f OR summary LIKE @f)
ORDER BY filename
```

**`GET /api/docs/{framework}/{name}`** — returns 200 with full doc or 404
```csharp
SELECT * FROM docs WHERE framework = @fw AND filename = @name
```
Appends `.md` if missing, returns `content` field.

**`GET /api/docs/search`** — `?framework=angular&query=grid filtering`
```csharp
SELECT d.framework, d.filename, d.component, d.toc_name, d.premium,
  snippet(docs_fts, '>>>', '<<<', '...', -1, 32) AS excerpt
FROM docs_fts JOIN docs d ON d.rowid = docs_fts.rowid
WHERE docs_fts MATCH @q AND d.framework = @fw
LIMIT 20
```

4. **CORS**: Add a permissive CORS policy so the MCP server (or any frontend) can call the API.

5. Remove the `AppJsonSerializerContext` and `Todo` record — no longer needed since all responses are `text/plain`.

### Connection Management

Use a singleton `SqliteConnection` opened read-only at startup (`Mode=ReadOnly` in connection string). SQLite read-only connections are safe for concurrent reads. The DB is a build artifact that doesn't change at runtime.

## Verification

1. Build: `cd docs-backend/docs-backend && dotnet build`
2. Run: `dotnet run`
3. Test endpoints:
   - `curl http://localhost:5277/api/docs?framework=angular` — should return list of ~281 docs
   - `curl http://localhost:5277/api/docs?framework=react&filter=grid` — filtered list
   - `curl http://localhost:5277/api/docs/angular/accordion` — full markdown content
   - `curl http://localhost:5277/api/docs/search?framework=angular&query=grid+filtering` — FTS results with excerpts
   - `curl http://localhost:5277/api/docs/react/nonexistent` — 404
