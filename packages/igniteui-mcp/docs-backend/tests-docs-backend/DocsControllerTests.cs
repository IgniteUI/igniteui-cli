using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using docs_backend.Controllers;

namespace tests_docs_backend;

public class DocsControllerTests
{
    private SqliteConnection _db = null!;
    private DocsController _controller = null!;

    [OneTimeSetUp]
    public void Setup()
    {
        _db = new SqliteConnection("Data Source=:memory:");
        _db.Open();

        var cmd = _db.CreateCommand();
        cmd.CommandText = @"
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
                content='docs', tokenize=porter, prefix=""2,3""
            );

            INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
            VALUES
                ('angular', 'accordion.md', 'IgxAccordionComponent', 'Accordion', 0, 'accordion expand collapse', 'Accordion component overview', '# Accordion\nAccordion content here'),
                ('angular', 'grid-editing.md', 'IgxGridComponent, IgxColumnComponent', 'Grid Editing', 0, 'grid editing cell', 'Grid editing overview', '# Grid Editing\nGrid editing content'),
                ('angular', 'grid-filtering.md', 'IgxGridComponent', 'Grid Filtering', 1, 'grid filtering column', 'Grid filtering overview', '# Grid Filtering\nFiltering content for grid'),
                ('react', 'grid.md', 'IgrGrid', 'Grid', 0, 'grid data table', 'React grid overview', '# React Grid\nReact grid content'),
                ('angular', 'no-component.md', '', NULL, 0, NULL, NULL, '# No Component\nContent without component');

            INSERT INTO docs_fts (rowid, component, toc_name, keywords, summary, content)
            SELECT id, component, toc_name, keywords, summary, content FROM docs;
        ";
        cmd.ExecuteNonQuery();

        _controller = new DocsController(_db);
    }

    [OneTimeTearDown]
    public void TearDown()
    {
        _db.Close();
        _db.Dispose();
    }

    // --- List endpoint tests ---

    // This fixture has no doc_toc/doc_groups, so it also covers the back-compat
    // guard: a legacy-schema database must render flat, exactly as it did before
    // grouping existed. ListFixtureTests covers the grouped modes.

    [Test]
    public void List_LegacySchema_FallsBackToFlat()
    {
        var result = _controller.List("angular", null) as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.StatusCode, Is.Null.Or.EqualTo(200));
        Assert.That(result.Content, Does.StartWith("Found 4 components for **angular**:"));
        Assert.That(result.Content, Does.Contain("- **Accordion** (`accordion`)"));
        Assert.That(result.Content, Does.Contain("  Accordion component overview"));
        Assert.That(result.Content, Does.Contain("  ⭐ Premium"));
    }

    [Test]
    public void List_WithFilter_ReturnsMatchingDocs()
    {
        var result = _controller.List("angular", "grid") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.StartWith("Found 2 components for **angular** matching \"grid\":"));
        Assert.That(result.Content, Does.Contain("(`grid-editing`)"));
        Assert.That(result.Content, Does.Contain("(`grid-filtering`)"));
    }

    [Test]
    public void List_WithNoResults_ReturnsNoDocsFound()
    {
        var result = _controller.List("angular", "nonexistent-xyz") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content,
            Is.EqualTo("No components found for framework \"angular\" matching \"nonexistent-xyz\"."));
    }

    [Test]
    public void List_InvalidFramework_ReturnsBadRequest()
    {
        var result = _controller.List("invalid", null);

        Assert.That(result, Is.InstanceOf<BadRequestObjectResult>());
    }

    [Test]
    public void List_FrameworkIsCaseInsensitive()
    {
        var result = _controller.List("Angular", null) as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.Contain("accordion"));
    }

    [Test]
    public void List_DocWithNoTocName_FallsBackToTheFilename()
    {
        var result = _controller.List("angular", "no-component") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content,
            Is.EqualTo("Found 1 components for **angular** matching \"no-component\":\n\n- **no-component** (`no-component`)"));
    }

    [Test]
    public void List_LegacySchema_IgnoresGroupAndDetail()
    {
        var grouped = _controller.List("angular", null) as ContentResult;
        var asked = _controller.List("angular", null, "groups", "Grids & Lists") as ContentResult;

        Assert.That(asked, Is.Not.Null);
        Assert.That(asked!.Content, Is.EqualTo(grouped!.Content));
    }

    // --- Get endpoint tests ---

    [Test]
    public void Get_ExistingDoc_ReturnsContent()
    {
        var result = _controller.Get("angular", "accordion") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.StartWith("# Accordion"));
        Assert.That(result.ContentType, Is.EqualTo("text/plain"));
    }

    [Test]
    public void Get_WithMdExtension_StillWorks()
    {
        var result = _controller.Get("angular", "accordion.md") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.StartWith("# Accordion"));
    }

    [Test]
    public void Get_NonexistentDoc_Returns404()
    {
        var result = _controller.Get("angular", "nonexistent");

        Assert.That(result, Is.InstanceOf<NotFoundObjectResult>());
    }

    [Test]
    public void Get_InvalidFramework_ReturnsBadRequest()
    {
        var result = _controller.Get("bogus", "accordion");

        Assert.That(result, Is.InstanceOf<BadRequestObjectResult>());
    }

    [Test]
    public void Get_WrongFramework_Returns404()
    {
        var result = _controller.Get("react", "accordion");

        Assert.That(result, Is.InstanceOf<NotFoundObjectResult>());
    }

    // --- Search endpoint tests ---

    [Test]
    public void Search_FindsMatchingDocs()
    {
        var result = _controller.Search("angular", "filtering") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.Contain("**grid-filtering**"));
        Assert.That(result.Content, Does.Contain(">>>"));
    }

    [Test]
    public void Search_NoResults_ReturnsMessage()
    {
        var result = _controller.Search("angular", "xyznonexistent") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.Contain("No results found"));
    }

    [Test]
    public void Search_EmptyQuery_ReturnsMessage()
    {
        var result = _controller.Search("angular", "") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Is.EqualTo("Empty query."));
    }

    [Test]
    public void Search_WhitespaceQuery_ReturnsMessage()
    {
        var result = _controller.Search("angular", "   ") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Is.EqualTo("Empty query."));
    }

    [Test]
    public void Search_InvalidFramework_ReturnsBadRequest()
    {
        var result = _controller.Search("bogus", "grid");

        Assert.That(result, Is.InstanceOf<BadRequestObjectResult>());
    }

    [Test]
    public void Search_ResultsIncludeComponent()
    {
        var result = _controller.Search("angular", "accordion") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.Contain("[IgxAccordionComponent]"));
    }

    [Test]
    public void Search_OnlyReturnsRequestedFramework()
    {
        var result = _controller.Search("react", "grid") as ContentResult;

        Assert.That(result, Is.Not.Null);
        Assert.That(result!.Content, Does.Contain("**grid**"));
        Assert.That(result.Content, Does.Not.Contain("grid-editing"));
        Assert.That(result.Content, Does.Not.Contain("grid-filtering"));
    }

    [Test]
    public void Search_TitleAndKeywordMatchesOutrankBodyOnlyMatch()
    {
        // Isolated DB: one doc has the query term in toc_name + keywords (dedicated feature doc),
        // the other only mentions it once in the body (generic doc that references it in passing).
        // Verifies that field-weighted re-ranking surfaces the dedicated doc first.
        using var rankDb = new SqliteConnection("Data Source=:memory:");
        rankDb.Open();

        void Exec(string sql) { var c = rankDb.CreateCommand(); c.CommandText = sql; c.ExecuteNonQuery(); }

        Exec(@"CREATE TABLE docs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            framework TEXT NOT NULL, filename TEXT NOT NULL, component TEXT NOT NULL,
            toc_name TEXT, premium INTEGER DEFAULT 0,
            keywords TEXT, summary TEXT, content TEXT NOT NULL,
            UNIQUE(framework, filename))");

        Exec(@"CREATE VIRTUAL TABLE docs_fts USING fts4(
            component, toc_name, keywords, summary, content,
            content='docs', tokenize=porter)");

        Exec(@"INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
            VALUES ('angular', 'grid-virtualization.md', 'IgxGridComponent',
                    'Virtualization and Performance', 0,
                    'virtualization, performance, scrolling',
                    'How grid virtualization works.',
                    'Virtualization improves rendering performance.')");

        Exec(@"INSERT INTO docs (framework, filename, component, toc_name, premium, keywords, summary, content)
            VALUES ('angular', 'grid-editing.md', 'IgxGridComponent',
                    'Grid Editing', 0,
                    'editing, cell',
                    'How to edit grid cells.',
                    'The grid uses virtualization internally for performance.')");

        Exec("INSERT INTO docs_fts (rowid, component, toc_name, keywords, summary, content) SELECT id, component, toc_name, keywords, summary, content FROM docs");

        var controller = new DocsController(rankDb);
        var result = controller.Search("angular", "\"virtualization\"") as ContentResult;

        Assert.That(result, Is.Not.Null);
        var content = result!.Content!;
        var dedicatedPos = content.IndexOf("**grid-virtualization**", StringComparison.Ordinal);
        var genericPos   = content.IndexOf("**grid-editing**",        StringComparison.Ordinal);

        Assert.That(dedicatedPos, Is.GreaterThanOrEqualTo(0), "grid-virtualization should appear in results");
        Assert.That(genericPos,   Is.GreaterThanOrEqualTo(0), "grid-editing should appear in results");
        Assert.That(dedicatedPos, Is.LessThan(genericPos),
            "grid-virtualization (title + keyword match) should rank before grid-editing (body-only match)");
    }
}
