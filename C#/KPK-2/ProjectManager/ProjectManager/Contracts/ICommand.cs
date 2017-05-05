using System.Collections.Generic;

namespace ProjectManager.Contracts
{
    public interface ICommand
    {
        string Execute(IList<string> parameters);
    }
}
