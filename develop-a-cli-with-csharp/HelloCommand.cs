using CliFx;
using CliFx.Attributes;
using CliFx.Infrastructure;

namespace develop_a_cli_with_csharp;

[Command("hello")]
public class HelloCommand : ICommand
{
    public ValueTask ExecuteAsync(IConsole console)
    {
        console.Output.WriteLine("Hello");
        return default;
    }
}