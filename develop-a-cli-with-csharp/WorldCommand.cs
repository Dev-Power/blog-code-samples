using CliFx;
using CliFx.Attributes;
using CliFx.Infrastructure;

namespace develop_a_cli_with_csharp;

[Command("hello world")]
public class WorldCommand : ICommand
{
    public ValueTask ExecuteAsync(IConsole console)
    {
        console.Output.WriteLine("Hello, World!");
        return default;
    }
}