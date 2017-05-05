using ProjectManager.Contracts;
using System.Linq;

namespace ProjectManager.Common
{
    internal class CommandProcessor
    {
        private ICommandsFactory factory;

        public CommandProcessor(ICommandsFactory factory)
        {
            this.Factory = factory;
        }

        public ICommandsFactory Factory
        {
            get { return this.factory; }
            set { this.factory = value; }
        }

        public string Process(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                throw new Exceptions.UserValidationException("No command has been provided!");
            }

            var command = this.factory.CreateCommandFromString(input.Split(' ')[0]);
            return command.Execute(input.Split(' ').Skip(1).ToList());
        }
    }
}