using Bytes2you.Validation;
using ProjectManager.Common.Exceptions;
using ProjectManager.Contracts;
using ProjectManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProjectManager.Commands
{
    internal sealed class ListProjectsCommand : ICommand
    {
        private IDatabase database;

        public ListProjectsCommand(IDatabase database)
        {
            // guard clause
            Guard.WhenArgument(database, "ListProjectsCommand Database").IsNull().Throw();
            this.Database = database;
        }

        public IDatabase Database
        {
            get { return this.database; }
            set { this.database = value; }
        }

        public string Execute(IList<string> parameters)
        {
            if (parameters.Count != 0)
            {
                throw new UserValidationException("Invalid command parameters count!");
            }

            if (parameters.Any(x => x == string.Empty))
            {
                throw new UserValidationException("Some of the passed parameters are empty!");
            }

            return string.Join(Environment.NewLine, this.Database.Projects);
        }
    }
}