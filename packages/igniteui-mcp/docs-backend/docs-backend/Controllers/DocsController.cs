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

        var cmd = db.CreateCommand();
        cmd.CommandText = @"
            SELECT d.framework, d.filename, d.component, d.toc_name, d.premium,
                snippet(docs_fts, '>>>', '<<<', '...', -1, 32) AS excerpt
            FROM docs_fts JOIN docs d ON d.rowid = docs_fts.rowid
            WHERE docs_fts MATCH @q AND d.framework = @fw
            LIMIT 20";
        cmd.Parameters.AddWithValue("@q", query);
        cmd.Parameters.AddWithValue("@fw", framework);

        var sb = new StringBuilder();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            var filename = reader.GetString(reader.GetOrdinal("filename"));
            var docName = filename.EndsWith(".md") ? filename[..^3] : filename;
            var component = reader.IsDBNull(reader.GetOrdinal("component")) ? null : reader.GetString(reader.GetOrdinal("component"));
            var comp = !string.IsNullOrEmpty(component) ? $" [{component}]" : "";
            var excerpt = reader.GetString(reader.GetOrdinal("excerpt"));

            if (sb.Length > 0) sb.AppendLine().AppendLine();
            sb.Append($"**{docName}**{comp}\n{excerpt}");
        }

        var text = sb.Length > 0 ? sb.ToString() : $"No results found for \"{query}\".";
        return Content(text, "text/plain");
    }
}
