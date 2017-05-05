using ProjectManager.Models;

namespace ProjectManager.Contracts
{
    public interface IModelsFactory
    {
        IProject CreateProject(string name, string startingDate, string endingDate, string state);

        Task CreateTask(User owner, string name, string state);

        User CreateUser(string name, string email);
    }
}
