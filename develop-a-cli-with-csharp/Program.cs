using CliFx;

public static class Program
{
    public static async Task<int> Main() =>
        await new CliApplicationBuilder()
            .AddCommandsFromThisAssembly()
            .SetExecutableName("mycli")
            .SetTitle("My CLI")
            .SetDescription("A useful CLI tool to demo")
            .Build()
            .RunAsync();
}