using Microsoft.Data.Sqlite;

namespace docs_backend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateSlimBuilder(args);

        var dbPath = builder.Configuration["DbPath"] ?? "igniteui-docs.db";
        var connectionString = new SqliteConnectionStringBuilder
        {
            DataSource = dbPath,
            Mode = SqliteOpenMode.ReadOnly
        }.ToString();

        var connection = new SqliteConnection(connectionString);
        connection.Open();
        builder.Services.AddSingleton(connection);

        builder.Services.AddControllers();
        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(policy =>
                policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        });

        var app = builder.Build();
        app.UseCors();
        app.MapControllers();
        app.Run();
    }
}
