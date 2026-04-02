# Implementation Plan: OpenAI Batch API for Compression Pipeline

**Status: IMPLEMENTED**

## Context

The compression step currently processes ~300 files per framework **sequentially** — one API call at a time with a 0.5s delay between calls. This takes **2-4 hours per platform**. The bottleneck is not compute but API latency and rate limiting.

OpenAI's Batch API offers:
- **50% cost reduction** on all models
- **All ~300 requests submitted at once** — no sequential waiting, no delay management
- Typical completion for this workload: **minutes to ~1 hour** (24h SLA guarantee)
- Same model, same quality, same parameters — only difference is async processing

## Approach: New `--batch` Flag on Existing Scripts

Add a `--batch` mode to each existing compress script. This keeps all platform-specific logic (system prompts, paths, validation) in one place.

The batch flow has 3 phases:

```
compress:react --batch submit    → uploads JSONL, creates batch, saves batch ID
compress:react --batch poll      → polls until complete, downloads results, writes files
compress:react --batch retry     → re-submits failed/invalid files via a second batch
```

## Files to Modify

| File | Change |
|------|--------|
| `scripts/compress-react-docs.ts` | Add `--batch` mode (implement first) |
| `scripts/compress-angular-docs.ts` | Port `--batch` mode |
| `scripts/compress-wc-docs.ts` | Port `--batch` mode |
| `scripts/compress-blazor-docs.ts` | Port `--batch` mode |
| `package.json` | Add `compress:batch:*` convenience scripts |

## CLI Interface

```bash
# Sequential (existing behavior, unchanged)
npm run compress:react

# Batch mode — 3 steps
npm run compress:react -- --batch submit          # Step 1: submit batch
npm run compress:react -- --batch poll             # Step 2: poll & download
npm run compress:react -- --batch retry            # Step 3: retry failures (optional)

# Existing flags still work with --batch submit:
npm run compress:react -- --batch submit --model gpt-5-mini --only grid.md
```

## Step 1: `--batch submit`

1. Collect `.md` files from `INPUT_DIR` (same `collectMdFiles()`)
2. Apply `--only`, `--resume-from`, `--min-size` filters (same logic as sequential)
3. For each file, build a JSONL request line:
   ```jsonl
   {"custom_id":"grid.md","method":"POST","url":"/v1/chat/completions","body":{"model":"gpt-5-mini","messages":[{"role":"system","content":"<system prompt>"},{"role":"user","content":"Compress this documentation:\n\n<content>"}],"max_completion_tokens":32000}}
   ```
4. Write to `OUTPUT_DIR/_batch_input.jsonl`
5. Upload via `client.files.create({ file: createReadStream(path), purpose: "batch" })`
6. Create batch via `client.batches.create({ input_file_id, endpoint: "/v1/chat/completions", completion_window: "24h" })`
7. Save to `OUTPUT_DIR/_batch_state.json`:
   ```json
   {
     "batch_id": "batch_abc123",
     "input_file_id": "file-xyz",
     "status": "submitted",
     "submitted_at": "2026-02-23T10:00:00Z",
     "model": "gpt-5-mini",
     "file_count": 308,
     "files": ["accordion.md", "area-chart.md", "..."]
   }
   ```
8. Print batch ID and instructions to run poll

## Step 2: `--batch poll`

1. Read `_batch_state.json` to get `batch_id`
2. Poll `client.batches.retrieve(batchId)` every 30 seconds
3. Print progress: `[10:05:00Z] in_progress | 150/308 completed | 0 failed`
4. On terminal status (`completed`, `failed`, `expired`, `cancelled`):
   a. Download output file via `client.files.content(batch.output_file_id)`
   b. For each result JSONL line:
      - Extract `custom_id` (filename) and `response.body.choices[0].message.content`
      - Apply `stripResponseWrapper()`
      - Apply `validateStructure()` — track valid vs invalid
      - Count tokens with `enc.encode()`
      - Write valid files to `OUTPUT_DIR/<filename>`
   c. Download error file if `batch.error_file_id` exists, track failed files
   d. Write `_compression_stats.json` and `_compression_log.csv` (same format as sequential)
   e. Update `_batch_state.json`:
     ```json
     {
       "status": "completed",
       "completed_at": "...",
       "succeeded": 300,
       "failed": 5,
       "invalid": 3,
       "failed_files": ["file1.md"],
       "invalid_files": ["file3.md"]
     }
     ```
5. Print summary with succeeded/failed/invalid counts

## Step 3: `--batch retry`

1. Read `_batch_state.json` — combine `failed_files` + `invalid_files`
2. If empty, print "Nothing to retry" and exit
3. Build new JSONL with only those files
4. Submit new batch (same as step 1 for the subset)
5. Save new batch ID to `_batch_state.json` (as `retry_batch_id`)
6. User runs `--batch poll` again to collect retry results

## Code Changes

### parseArgs() — extend CliArgs

```typescript
interface CliArgs {
  // ... existing fields unchanged ...
  batch?: "submit" | "poll" | "retry";
}
// Add to switch:
case "--batch": opts.batch = args[++i] as "submit" | "poll" | "retry"; break;
```

### main() — branch on batch mode

```typescript
async function main() {
  const opts = parseArgs();
  if (opts.batch) {
    switch (opts.batch) {
      case "submit": return batchSubmit(opts);
      case "poll":   return batchPoll(opts);
      case "retry":  return batchRetry(opts);
    }
  }
  // ... existing sequential code unchanged ...
}
```

### New functions: `batchSubmit()`, `batchPoll()`, `batchRetry()`

These are new ~50-80 line functions added to each compress script. They reuse all existing helpers:
- `getSystemPrompt()` — unchanged
- `collectMdFiles()` — unchanged
- `validateStructure()` — applied post-download instead of inline
- `stripResponseWrapper()` — applied post-download instead of inline
- `fileName()` — unchanged
- Token counting via `encodingForModel("gpt-4o")` — same

### OpenAI SDK usage

The batch functions use `createReadStream` from `fs` (new import) and the existing `OpenAI` client:
```typescript
import { createReadStream } from "fs";

// Submit
const file = await client.files.create({ file: createReadStream(jsonlPath), purpose: "batch" });
const batch = await client.batches.create({ input_file_id: file.id, endpoint: "/v1/chat/completions", completion_window: "24h" });

// Poll
const batch = await client.batches.retrieve(batchId);

// Download results
const content = await client.files.content(batch.output_file_id);
const text = await content.text();
```

## package.json Scripts

```json
{
  "compress:batch:angular:submit": "npx tsx --env-file=.env scripts/compress-angular-docs.ts --batch submit",
  "compress:batch:angular:poll": "npx tsx --env-file=.env scripts/compress-angular-docs.ts --batch poll",
  "compress:batch:react:submit": "npx tsx --env-file=.env scripts/compress-react-docs.ts --batch submit",
  "compress:batch:react:poll": "npx tsx --env-file=.env scripts/compress-react-docs.ts --batch poll",
  "compress:batch:blazor:submit": "npx tsx --env-file=.env scripts/compress-blazor-docs.ts --batch submit",
  "compress:batch:blazor:poll": "npx tsx --env-file=.env scripts/compress-blazor-docs.ts --batch poll",
  "compress:batch:wc:submit": "npx tsx --env-file=.env scripts/compress-wc-docs.ts --batch submit",
  "compress:batch:wc:poll": "npx tsx --env-file=.env scripts/compress-wc-docs.ts --batch poll"
}
```

## Implementation Order

1. Implement in `compress-react-docs.ts` first (simplest: flat files, no nested dirs)
2. Test end-to-end: `--batch submit` → `--batch poll` → verify output matches sequential
3. Port to the other 3 scripts (copy batch functions, change path constants)
4. Add npm scripts to `package.json`
5. Update docs (CLAUDE.md, README.md, docs/progress.md)

## Verification

1. **Single file submit**: `npm run compress:react -- --batch submit --only accordion.md`
   - Creates `_batch_input.jsonl` (1 line) and `_batch_state.json`
2. **Poll**: `npm run compress:react -- --batch poll`
   - Polls until done, writes `accordion.md` to output, writes stats/log
3. **Full batch**: `npm run compress:react -- --batch submit` then `--batch poll`
   - Compare output files and stats with a previous sequential run
4. **Retry**: Manually add a file to `invalid_files` in `_batch_state.json`, run `--batch retry`
5. **Sequential unchanged**: `npm run compress:react` still works exactly as before

## OpenAI Batch API Reference

### Pricing

Flat **50% discount** on all models vs real-time API.

### Limits

| Limit | Value |
|-------|-------|
| Max requests per batch | 50,000 |
| Max input file size | 200 MB |
| Completion SLA | 24 hours (typically much faster) |

### Batch Statuses

```
validating → failed
           → in_progress → finalizing → completed
                                      → expired
                        → cancelling → cancelled
```

### Supported Features

Function calling, structured outputs, JSON mode, all model parameters — all supported. Only streaming is not available (irrelevant for this use case).

### Error Handling

Partial failures are handled gracefully — successful responses go to `output_file_id`, failed ones go to `error_file_id`. Each line includes `custom_id` for correlation.
