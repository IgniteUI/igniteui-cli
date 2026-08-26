using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using docs_backend.Controllers;

namespace tests_docs_backend;

/// <summary>
/// Renders the fixtures under packages/igniteui-mcp/shared-fixtures/ through this
/// backend and compares to the same expected.txt the MCP server's vitest suite
/// compares against. A change to either renderer that is not mirrored in the
/// other fails here or there. Comparison is ordinal with no line-ending
/// normalisation — the fixtures are pinned to LF by .gitattributes.
/// </summary>
public class ListFixtureTests
{
    private static string FixturesDir =>
        Path.Combine(AppContext.BaseDirectory, "shared-fixtures", "list-components");

    public static IEnumerable<string> FixtureNames()
    {
        if (!Directory.Exists(FixturesDir)) yield break;
        foreach (var dir in Directory.GetDirectories(FixturesDir).OrderBy(d => d, StringComparer.Ordinal))
            yield return Path.GetFileName(dir);
    }

    private static string? Text(JsonElement e, string name) =>
        e.TryGetProperty(name, out var v) && v.ValueKind != JsonValueKind.Null ? v.GetString() : null;

    private static long Num(JsonElement e, string name) =>
        e.TryGetProperty(name, out var v) && v.ValueKind == JsonValueKind.Number ? v.GetInt64() : 0;

    private static SqliteConnection BuildDb(JsonElement input)
    {
        var db = new SqliteConnection("Data Source=:memory:");
        db.Open();

        void Exec(string sql, params (string, object?)[] ps)
        {
            var cmd = db.CreateCommand();
            cmd.CommandText = sql;
            foreach (var (k, v) in ps) cmd.Parameters.AddWithValue(k, v ?? DBNull.Value);
            cmd.ExecuteNonQuery();
        }

        Exec(@"CREATE TABLE docs (
            id INTEGER PRIMARY KEY AUTOINCREMENT, framework TEXT NOT NULL, filename TEXT NOT NULL,
            component TEXT NOT NULL, toc_name TEXT, premium INTEGER DEFAULT 0, keywords TEXT,
            summary TEXT, content TEXT NOT NULL, UNIQUE(framework, filename))");
        Exec(@"CREATE TABLE doc_toc (framework TEXT NOT NULL, filename TEXT NOT NULL,
            group_key TEXT NOT NULL, section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '',
            path TEXT NOT NULL, ord INTEGER NOT NULL, landing INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY (framework, filename, path))");
        Exec(@"CREATE TABLE doc_groups (framework TEXT NOT NULL, group_key TEXT NOT NULL,
            section TEXT NOT NULL, group_label TEXT NOT NULL DEFAULT '', summary TEXT,
            doc_count INTEGER NOT NULL, ord INTEGER NOT NULL, PRIMARY KEY (framework, group_key))");

        foreach (var d in input.GetProperty("docs").EnumerateArray())
        {
            Exec(@"INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
                   VALUES (@fw, @file, @comp, @toc, @prem, @kw, @sum, 'body')",
                ("@fw", Text(d, "framework")), ("@file", Text(d, "filename")),
                ("@comp", Text(d, "component")), ("@toc", Text(d, "toc_name")),
                ("@prem", Num(d, "premium")), ("@kw", Text(d, "keywords") ?? ""),
                ("@sum", Text(d, "summary") ?? ""));
        }

        foreach (var t in input.GetProperty("docToc").EnumerateArray())
        {
            Exec(@"INSERT INTO doc_toc (framework, filename, group_key, section, group_label, path, ord, landing)
                   VALUES (@fw, @file, @key, @sec, @label, @path, @ord, @landing)",
                ("@fw", Text(t, "framework")), ("@file", Text(t, "filename")),
                ("@key", Text(t, "group_key")), ("@sec", Text(t, "section")),
                ("@label", Text(t, "group_label")), ("@path", Text(t, "path")),
                ("@ord", Num(t, "ord")), ("@landing", Num(t, "landing")));
        }

        foreach (var g in input.GetProperty("docGroups").EnumerateArray())
        {
            Exec(@"INSERT INTO doc_groups (framework, group_key, section, group_label, summary, doc_count, ord)
                   VALUES (@fw, @key, @sec, @label, @sum, @count, @ord)",
                ("@fw", Text(g, "framework")), ("@key", Text(g, "group_key")),
                ("@sec", Text(g, "section")), ("@label", Text(g, "group_label")),
                ("@sum", Text(g, "summary")), ("@count", Num(g, "doc_count")), ("@ord", Num(g, "ord")));
        }

        return db;
    }

    [Test]
    public void FixturesArePresent()
    {
        Assert.That(FixtureNames().ToList(), Is.Not.Empty,
            $"No shared fixtures found under {FixturesDir}. Check the Content include in the csproj.");
    }

    [TestCaseSource(nameof(FixtureNames))]
    public void RendersFixtureExactlyAsRecorded(string name)
    {
        var dir = Path.Combine(FixturesDir, name);
        using var doc = JsonDocument.Parse(File.ReadAllText(Path.Combine(dir, "input.json")));
        var input = doc.RootElement;

        using var db = BuildDb(input);
        var controller = new DocsController(db);
        var result = controller.List(
            input.GetProperty("framework").GetString()!,
            Text(input, "filter"),
            Text(input, "detail"),
            Text(input, "group")) as ContentResult;

        Assert.That(result, Is.Not.Null);
        var expected = File.ReadAllText(Path.Combine(dir, "expected.txt"));
        Assert.That(result!.Content, Is.EqualTo(expected).Using(StringComparer.Ordinal));
    }
}
