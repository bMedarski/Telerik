using ProjectManager.Common.Exceptions;
using ProjectManager.Contracts;
using ProjectManager.Data;

namespace ProjectManager.Commands
{
    public class CommandsFactory : ICommandsFactory
    {
        private IDatabase database;
        private IModelsFactory factory;

        public CommandsFactory(IDatabase database, IModelsFactory factory)
        {
            this.Database = database;
            this.Factory = factory;
        }

        public IDatabase Database
        {
            get { return this.database; }
            set { this.database = value; }
        }

        public IModelsFactory Factory
        {
            get { return this.factory; }
            set { this.factory = value; }
        }

        public ICommand CreateCommandFromString(string commandName)
        {
            var command = commandName.ToLower();

            switch (command)
            {
                case "createproject": return new CreateProjectCommand(this.Database, this.Factory);
                case "createtask": return new CreateTaskCommand();
                case "createuser": return new CreateUserCommand();
                case "listprojects": return new ListProjectsCommand(this.Database);
                default: throw new UserValidationException("The passed command is not valid!");
            }
        }
    }
}