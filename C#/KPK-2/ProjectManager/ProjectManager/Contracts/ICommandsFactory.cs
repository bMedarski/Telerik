namespace ProjectManager.Contracts
{
    public interface ICommandsFactory
    {
        ICommand CreateCommandFromString(string commandName);
    }
}
