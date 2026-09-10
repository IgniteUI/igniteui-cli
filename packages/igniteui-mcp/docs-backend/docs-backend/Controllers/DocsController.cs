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

    private static string? Str(SqliteDataReader r, string column)
    {
        var i = r.GetOrdinal(column);
        return r.IsDBNull(i) ? null : r.GetString(i);
    }

    /// <summary>
    /// The MCP package ships a prebuilt database and the committed copy can be
    /// updated independently, so this must tolerate a DB with no grouping tables,
    /// and one where only some frameworks have been migrated.
    /// </summary>
    private bool HasGroups(string framework)
    {
        var probe = db.CreateCommand();
        probe.CommandText =
            "SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name IN ('doc_toc', 'doc_groups')";
        if (Convert.ToInt64(probe.ExecuteScalar()) != 2) return false;

        var rows = db.CreateCommand();
        rows.CommandText = "SELECT COUNT(*) FROM doc_toc WHERE framework = @fw";
        rows.Parameters.AddWithValue("@fw", framework);
        return Convert.ToInt64(rows.ExecuteScalar()) > 0;
    }

    private List<ComponentRenderer.GroupRow> ReadGroups(string framework)
    {
        var cmd = db.CreateCommand();
        cmd.CommandText = "SELECT group_key, summary FROM doc_groups WHERE framework = @fw ORDER BY ord";
        cmd.Parameters.AddWithValue("@fw", framework);

        var groups = new List<ComponentRenderer.GroupRow>();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
            groups.Add(new ComponentRenderer.GroupRow(reader.GetString(0), Str(reader, "summary")));
        return groups;
    }

    /// <summary>
    /// Grouped mode also matches doc_toc.group_key, so a filter can select whole
    /// sections. Flat mode deliberately does not — see <see cref="ReadFlat"/>.
    /// </summary>
    private List<ComponentRenderer.GroupedDocRow> ReadGroupedRows(string framework, string? filter, string? group)
    {
        var cmd = db.CreateCommand();
        var where = new List<string> { "t.framework = @fw" };
        cmd.Parameters.AddWithValue("@fw", framework);

        if (group != null)
        {
            where.Add("t.group_key = @g");
            cmd.Parameters.AddWithValue("@g", group);
        }
        if (!string.IsNullOrWhiteSpace(filter))
        {
            where.Add("(d.filename LIKE @f OR d.component LIKE @f OR d.toc_name LIKE @f " +
                      "OR d.keywords LIKE @f OR d.summary LIKE @f OR t.group_key LIKE @f)");
            cmd.Parameters.AddWithValue("@f", $"%{filter}%");
        }

        cmd.CommandText =
            "SELECT d.filename, d.toc_name, d.premium, d.summary, t.group_key, t.ord " +
            "FROM doc_toc t JOIN docs d ON d.framework = t.framework AND d.filename = t.filename " +
            $"WHERE {string.Join(" AND ", where)} ORDER BY t.ord";

        var rows = new List<ComponentRenderer.GroupedDocRow>();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            rows.Add(new ComponentRenderer.GroupedDocRow(
                reader.GetString(reader.GetOrdinal("filename")),
                Str(reader, "toc_name"),
                Str(reader, "summary"),
                !reader.IsDBNull(reader.GetOrdinal("premium")) && reader.GetInt64(reader.GetOrdinal("premium")) != 0,
                reader.GetString(reader.GetOrdinal("group_key")),
                reader.GetInt64(reader.GetOrdinal("ord"))));
        }
        return rows;
    }

    /// <summary>
    /// Flat mode never reads through doc_toc: the join multiplies cross-listed
    /// docs and reorders by TOC position. Where <paramref name="group"/> narrows
    /// a flat listing, membership is resolved separately.
    /// </summary>
    private List<ComponentRenderer.DocRow> ReadFlat(string framework, string? filter, string? group)
    {
        var cmd = db.CreateCommand();
        var sql = "SELECT filename, component, toc_name, premium, keywords, summary FROM docs WHERE framework = @fw";
        cmd.Parameters.AddWithValue("@fw", framework);

        if (!string.IsNullOrWhiteSpace(filter))
        {
            sql += " AND (filename LIKE @f OR component LIKE @f OR toc_name LIKE @f OR keywords LIKE @f OR summary LIKE @f)";
            cmd.Parameters.AddWithValue("@f", $"%{filter}%");
        }
        cmd.CommandText = sql + " ORDER BY toc_name";

        var rows = new List<ComponentRenderer.DocRow>();
        using (var reader = cmd.ExecuteReader())
        {
            while (reader.Read())
            {
                rows.Add(new ComponentRenderer.DocRow(
                    reader.GetString(reader.GetOrdinal("filename")),
                    Str(reader, "toc_name"),
                    Str(reader, "summary"),
                    !reader.IsDBNull(reader.GetOrdinal("premium")) && reader.GetInt64(reader.GetOrdinal("premium")) != 0));
            }
        }

        if (group != null && HasGroups(framework))
        {
            var members = new HashSet<string>(StringComparer.Ordinal);
            var cmd2 = db.CreateCommand();
            cmd2.CommandText = "SELECT DISTINCT filename FROM doc_toc WHERE framework = @fw AND group_key = @g";
            cmd2.Parameters.AddWithValue("@fw", framework);
            cmd2.Parameters.AddWithValue("@g", group);
            using var reader2 = cmd2.ExecuteReader();
            while (reader2.Read()) members.Add(reader2.GetString(0));
            rows = rows.Where(r => members.Contains(r.Filename)).ToList();
        }

        return rows;
    }

    [HttpGet]
    public IActionResult List(
        [FromQuery] string framework,
        [FromQuery] string? filter,
        [FromQuery] string? detail = null,
        [FromQuery] string? group = null)
    {
        if (!IsValidFramework(framework, out var fw))
            return BadRequest($"Invalid framework \"{framework}\". Valid values: {string.Join(", ", ValidFrameworks.Keys)}");

        framework = fw;

        if (detail == "docs" || !HasGroups(framework))
            return Content(ComponentRenderer.RenderFlat(framework, ReadFlat(framework, filter, group), filter), "text/plain");

        var groups = ReadGroups(framework);

        if (group != null)
        {
            var match = groups.FirstOrDefault(g => string.Equals(g.GroupKey, group, StringComparison.Ordinal));
            var text = match is null
                ? ComponentRenderer.RenderUnknownGroup(framework, group, groups)
                : ComponentRenderer.RenderGroup(framework, match, ReadGroupedRows(framework, filter, group), filter);
            return Content(text, "text/plain");
        }

        return Content(
            ComponentRenderer.RenderGroupedIndex(framework, groups, ReadGroupedRows(framework, filter, null), filter),
            "text/plain");
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

        var results = new List<(int score, int idx, string filename, string? component, string? tocName, string? summary, string excerpt)>();
        var rowIdx = 0;
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

            results.Add((score, rowIdx++, filename, component, tocName, summary, excerpt));
        }

        var ranked = results
            .OrderByDescending(r => r.score)
            .ThenBy(r => r.idx)
            .Take(20);

        var sb = new StringBuilder();
        foreach (var r in ranked)
        {
            var docName = r.filename.EndsWith(".md") ? r.filename[..^3] : r.filename;
            var comp = !string.IsNullOrEmpty(r.component) ? $" [{r.component}]" : "";
            if (sb.Length > 0) sb.AppendLine().AppendLine();
            sb.Append($"**{docName}**{comp}\n{r.excerpt}");
        }

        var displayQuery = System.Text.RegularExpressions.Regex.Replace(query.Replace('"', ' ').Replace('*', ' '), @"\s+", " ").Trim();
        var text = sb.Length > 0 ? sb.ToString() : $"No results found for \"{displayQuery}\".";
        return Content(text, "text/plain");
    }
}
