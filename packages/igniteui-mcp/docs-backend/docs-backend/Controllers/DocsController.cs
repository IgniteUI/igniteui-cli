using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace docs_backend.Controllers;

public enum Framework
{
    Angular,
    React,
    Blazor,
    WebComponents
}

[ApiController]
[Route("api/docs")]
public class DocsController(SqliteConnection db) : ControllerBase
{
    private static readonly Dictionary<string, string> ValidFrameworks = Enum.GetValues<Framework>()
        .ToDictionary(f => f.ToString().ToLowerInvariant(), f => f.ToString().ToLowerInvariant());

    private static bool IsValidFramework(string framework, out string normalized)
    {
        return ValidFrameworks.TryGetValue(framework.ToLowerInvariant(), out normalized!);
    }

    [HttpGet]
    public IActionResult List([FromQuery] string framework, [FromQuery] string? filter)
    {
        if (!IsValidFramework(framework, out var fw))
            return BadRequest($"Invalid framework \"{framework}\". Valid values: {string.Join(", ", ValidFrameworks.Keys)}");

        framework = fw;
        var sql = "SELECT framework, filename, component, toc_name, premium, summary FROM docs WHERE framework = @fw";
        var cmd = db.CreateCommand();
        cmd.Parameters.AddWithValue("@fw", framework);

        if (!string.IsNullOrWhiteSpace(filter))
        {
            sql += " AND (filename LIKE @f OR toc_name LIKE @f OR component LIKE @f OR keywords LIKE @f OR summary LIKE @f)";
            cmd.Parameters.AddWithValue("@f", $"%{filter}%");
        }

        sql += " ORDER BY filename";
        cmd.CommandText = sql;

        var sb = new StringBuilder();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            var filename = reader.GetString(reader.GetOrdinal("filename"));
            var name = filename.EndsWith(".md") ? filename[..^3] : filename;
            var component = reader.IsDBNull(reader.GetOrdinal("component")) ? null : reader.GetString(reader.GetOrdinal("component"));
            var comp = !string.IsNullOrEmpty(component) ? $" [{component}]" : "";
            if (sb.Length > 0) sb.AppendLine();
            sb.Append($"{name}{comp}");
        }

        var text = sb.Length > 0 ? sb.ToString() : "No docs found.";
        return Content(text, "text/plain");
    }

    [HttpGet("{framework}/{name}")]
    public IActionResult Get(string framework, string name)
    {
        if (!IsValidFramework(framework, out var fw))
            return BadRequest($"Invalid framework \"{framework}\". Valid values: {string.Join(", ", ValidFrameworks.Keys)}");

        framework = fw;
        var filename = name.EndsWith(".md") ? name : name + ".md";
        var cmd = db.CreateCommand();
        cmd.CommandText = "SELECT content FROM docs WHERE framework = @fw AND filename = @name";
        cmd.Parameters.AddWithValue("@fw", framework);
        cmd.Parameters.AddWithValue("@name", filename);

        var content = cmd.ExecuteScalar() as string;
        if (content == null)
            return NotFound($"Doc \"{name}\" not found for framework \"{framework}\".");

        return Content(content, "text/plain");
    }

    [HttpGet("search")]
    public IActionResult Search([FromQuery] string framework, [FromQuery] string query)
    {
        if (!IsValidFramework(framework, out var fw))
            return BadRequest($"Invalid framework \"{framework}\". Valid values: {string.Join(", ", ValidFrameworks.Keys)}");

        framework = fw;
        if (string.IsNullOrWhiteSpace(query))
            return Content("Empty query.", "text/plain");

        // Field-weighted re-ranking: FTS4 BM25 treats all columns equally and ranks
        // by raw term frequency across the corpus, causing dedicated feature docs to
        // rank below generic docs that mention the same terms in passing.
        // We fix this by computing a field-boost score: a term match in the doc
        // title (toc_name) is worth far more than a match buried in body text.
        // This generalizes to any query — no per-feature heuristics needed.
        var terms = query
            .Replace("*", " ").Replace("\"", " ")
            .Split(' ', StringSplitOptions.RemoveEmptyEntries)
            .Where(t => t.Length > 2)
            .Select(t => t.ToLowerInvariant())
            .ToList();

        var cmd = db.CreateCommand();
        cmd.CommandText = @"
            SELECT d.filename, d.component, d.toc_name, d.keywords, d.summary,
                snippet(docs_fts, '>>>', '<<<', '...', -1, 32) AS excerpt
            FROM docs_fts JOIN docs d ON d.rowid = docs_fts.rowid
            WHERE docs_fts MATCH @q AND d.framework = @fw
            LIMIT 200";
        cmd.Parameters.AddWithValue("@q", query);
        cmd.Parameters.AddWithValue("@fw", framework);

        var results = new List<(int score, string filename, string? component, string? tocName, string? summary, string excerpt)>();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            var filename = reader.GetString(reader.GetOrdinal("filename"));
            var component = reader.IsDBNull(reader.GetOrdinal("component")) ? null : reader.GetString(reader.GetOrdinal("component"));
            var tocName   = reader.IsDBNull(reader.GetOrdinal("toc_name"))  ? null : reader.GetString(reader.GetOrdinal("toc_name"));
            var keywords  = reader.IsDBNull(reader.GetOrdinal("keywords"))  ? null : reader.GetString(reader.GetOrdinal("keywords"));
            var summary   = reader.IsDBNull(reader.GetOrdinal("summary"))   ? null : reader.GetString(reader.GetOrdinal("summary"));
            var excerpt   = reader.GetString(reader.GetOrdinal("excerpt"));

            var toc = (tocName  ?? "").ToLowerInvariant();
            var fn  = filename.ToLowerInvariant();
            var kw  = (keywords ?? "").ToLowerInvariant();
            var sm  = (summary  ?? "").ToLowerInvariant();

            var score = 0;
            foreach (var t in terms)
            {
                if (toc.Contains(t)) score += 10; // title match — strongest signal
                if (fn.Contains(t))  score += 4;  // filename contains the concept
                if (kw.Contains(t))  score += 5;  // curated keyword metadata
                if (sm.Contains(t))  score += 3;  // summary mentions the concept
                // content matches are already captured by FTS; no extra boost needed
            }

            results.Add((score, filename, component, tocName, summary, excerpt));
        }

        var ranked = results
            .OrderByDescending(r => r.score)
            .Take(20);

        var sb = new StringBuilder();
        foreach (var r in ranked)
        {
            var docName = r.filename.EndsWith(".md") ? r.filename[..^3] : r.filename;
            var comp = !string.IsNullOrEmpty(r.component) ? $" [{r.component}]" : "";
            if (sb.Length > 0) sb.AppendLine().AppendLine();
            sb.Append($"**{docName}**{comp}\n{r.excerpt}");
        }

        var text = sb.Length > 0 ? sb.ToString() : $"No results found for \"{query}\".";
        return Content(text, "text/plain");
    }
}
