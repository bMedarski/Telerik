using ProjectManager.Common.Exceptions;
using ProjectManager.Common.Providers;
using ProjectManager.Contracts;
using System;
using ProjectManager.Enums;

namespace ProjectManager.Models
{
    public class ModelsFactory : IModelsFactory
    {
        private readonly Validator validator = new Validator();

        public IProject CreateProject(string name, string startingDate, string endingDate, string state)
        {
            DateTime starting;
            DateTime end;
            var startingDateSuccessful = DateTime.TryParse(startingDate, out starting);
            var endingDateSuccessful = DateTime.TryParse(endingDate, out end);
            ProjectState myStatus = (ProjectState)Enum.Parse(typeof(ProjectState), state, true);

            if (!startingDateSuccessful)
            {
                throw new UserValidationException("Failed to parse the passed starting date!");
            }

            if (!endingDateSuccessful)
            {
                throw new UserValidationException("Failed to parse the passed ending date!");
            }

            var project = new Project(name, starting, end, myStatus);
            this.validator.Validate(project);

            return project;
        }

        public Task CreateTask(User owner, string name, string state)
        {
            TaskState taskStatus = (TaskState)Enum.Parse(typeof(TaskState), state, true);
            var task = new Task(name, owner, taskStatus);
            this.validator.Validate(task);

            return task;
        }
     
        public User CreateUser(string name, string email)
        {
            var user = new User(name, email);
            this.validator.Validate(user);

            return user;
        }       
    }
}
