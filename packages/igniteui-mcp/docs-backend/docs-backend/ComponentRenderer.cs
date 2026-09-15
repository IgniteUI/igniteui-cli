using System.Text;

namespace docs_backend;

/// <summary>
/// Port of the MCP server's <c>src/tools/render-components.ts</c>. The two must
/// produce byte-identical text for the same rows — the shared fixtures under
/// <c>packages/igniteui-mcp/shared-fixtures/list-components/</c> are what pins
/// that. Newlines are written as "\n" explicitly: StringBuilder.AppendLine uses
/// Environment.NewLine, which is CRLF on Windows and would diverge on every line.
/// </summary>
public static class ComponentRenderer
{
    /// <summary>Docs beyond this many lose their per-doc summaries, to keep a filtered response small.</summary>
    public const int SummaryThreshold = 25;

    public sealed record DocRow(string Filename, string? TocName, string? Summary, bool Premium);

    public sealed record GroupedDocRow(string Filename, string? TocName, string? Summary, bool Premium, string GroupKey, long Ord);

    public sealed record GroupRow(string GroupKey, string? Summary);

    private static string DocName(string filename) =>
        filename.EndsWith(".md", StringComparison.Ordinal) ? filename[..^3] : filename;

    private static string DocEntry(string filename, string? tocName, string? summary, bool premium)
    {
        var name = DocName(filename);
        var sb = new StringBuilder();
        sb.Append("- **").Append(string.IsNullOrEmpty(tocName) ? name : tocName).Append("** (`").Append(name).Append("`)");
        if (!string.IsNullOrEmpty(summary)) sb.Append("\n  ").Append(summary);
        if (premium) sb.Append("\n  ⭐ Premium");
        return sb.ToString();
    }

    /// <summary>
    /// A doc reachable from two TOC paths that land in the same group appears
    /// twice; keep the earliest. A doc cross-listed in two different groups is
    /// kept in each — that is editorial intent, not duplication.
    /// </summary>
    private static List<GroupedDocRow> Dedupe(IEnumerable<GroupedDocRow> rows)
    {
        // Keyed by the pair itself: concatenating with a separator would be
        // ambiguous the moment either half could contain it.
        var best = new Dictionary<(string GroupKey, string Filename), GroupedDocRow>();
        foreach (var row in rows)
        {
            var key = (row.GroupKey, row.Filename);
            if (!best.TryGetValue(key, out var existing) || row.Ord < existing.Ord) best[key] = row;
        }
        return best.Values.OrderBy(r => r.Ord).ToList();
    }

    public static string RenderFlat(string framework, IReadOnlyList<DocRow> rows, string? filter)
    {
        var matching = string.IsNullOrEmpty(filter) ? "" : $" matching \"{filter}\"";
        if (rows.Count == 0) return $"No components found for framework \"{framework}\"{matching}.";

        var entries = rows.Select(r => DocEntry(r.Filename, r.TocName, r.Summary, r.Premium));
        return $"Found {rows.Count} components for **{framework}**{matching}:\n\n" + string.Join("\n", entries);
    }

    public static string RenderGroupedIndex(
        string framework,
        IReadOnlyList<GroupRow> groups,
        IReadOnlyList<GroupedDocRow> rows,
        string? filter)
    {
        var matching = string.IsNullOrEmpty(filter) ? "" : $" matching \"{filter}\"";
        var deduped = Dedupe(rows);
        if (deduped.Count == 0) return $"No components found for framework \"{framework}\"{matching}.";

        var byGroup = new Dictionary<string, List<GroupedDocRow>>(StringComparer.Ordinal);
        foreach (var row in deduped)
        {
            if (!byGroup.TryGetValue(row.GroupKey, out var list))
            {
                list = [];
                byGroup[row.GroupKey] = list;
            }
            list.Add(row);
        }

        var total = deduped.Select(r => r.Filename).Distinct(StringComparer.Ordinal).Count();
        var withSummaries = total <= SummaryThreshold;

        var blocks = new List<string>();
        foreach (var group in groups)
        {
            if (!byGroup.TryGetValue(group.GroupKey, out var members) || members.Count == 0) continue;

            var block = new StringBuilder();
            block.Append("## ").Append(group.GroupKey).Append(" (").Append(members.Count).Append(')');
            if (!string.IsNullOrEmpty(group.Summary)) block.Append('\n').Append(group.Summary);
            block.Append('\n');

            block.Append(withSummaries
                ? string.Join("\n", members.Select(m => DocEntry(m.Filename, m.TocName, m.Summary, m.Premium)))
                : string.Join(", ", members.Select(m => DocName(m.Filename) + (m.Premium ? " ⭐" : ""))));

            blocks.Add(block.ToString());
        }

        var header =
            $"Found {total} component doc(s) for **{framework}**{matching} in {blocks.Count} group(s). " +
            "Pass `group` with any heading below to get that group's docs with summaries" +
            (withSummaries ? "" : "; ⭐ marks premium docs") + ".";

        return header + "\n\n" + string.Join("\n\n", blocks);
    }

    public static string RenderGroup(
        string framework,
        GroupRow group,
        IReadOnlyList<GroupedDocRow> rows,
        string? filter)
    {
        var matching = string.IsNullOrEmpty(filter) ? "" : $" matching \"{filter}\"";
        var members = Dedupe(rows).Where(r => string.Equals(r.GroupKey, group.GroupKey, StringComparison.Ordinal)).ToList();
        if (members.Count == 0)
            return $"No components found in group \"{group.GroupKey}\" for framework \"{framework}\"{matching}.";

        var header = $"Found {members.Count} component doc(s) in **{framework}** > {group.GroupKey}{matching}:";
        var summary = string.IsNullOrEmpty(group.Summary) ? "" : "\n" + group.Summary + "\n";
        var entries = string.Join("\n", members.Select(m => DocEntry(m.Filename, m.TocName, m.Summary, m.Premium)));

        return header + "\n" + summary + "\n" + entries;
    }

    public static string RenderUnknownGroup(string framework, string group, IReadOnlyList<GroupRow> groups)
    {
        var keys = string.Join("\n", groups.Select(g => "- " + g.GroupKey));
        return $"No group \"{group}\" in **{framework}**. Valid groups:\n\n{keys}\n\n" +
               "Omit `group` for the full grouped index, or pass `filter` to search across groups.";
    }
}
