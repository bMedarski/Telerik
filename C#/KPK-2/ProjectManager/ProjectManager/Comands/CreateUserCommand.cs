using ProjectManager.Common.Exceptions;
using ProjectManager.Contracts;
using ProjectManager.Data;
using ProjectManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace ProjectManager.Commands
{
    public class CreateUserCommand : ICommand
    {
        private IDatabase database = new Database();
        private IModelsFactory factory = new ModelsFactory();

        public string Execute(IList<string> parameters)
        {
            if (parameters.Count != 3)
            {
                throw new UserValidationException("Invalid command parameters count!");
            }

            if (parameters.Any(x => x == string.Empty))
            {
                throw new UserValidationException("Some of the passed parameters are empty!");
            }

            if (this.database.Projects[int.Parse(parameters[0])].Users.Any() &&
                this.database.Projects[int.Parse(parameters[0])].Users.Any(x => x.Name == parameters[1]))
            {
                throw new UserValidationException("A user with that username already exists!");
            }

            this.database.Projects[int.Parse(parameters[0])].Users.Add(this.factory.CreateUser(parameters[1], parameters[2]));

            return "Successfully created a new user!";
        }
    }
}
