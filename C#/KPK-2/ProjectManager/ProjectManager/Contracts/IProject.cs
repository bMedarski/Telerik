using System;
using System.Collections.Generic;

namespace ProjectManager.Models
{
    public interface IProject
    {
        string Name { get; set; }

        DateTime StartingDate { get; set; }

        DateTime EndingDate { get; set; }

        ProjectState State { get; set; }

        IList<User> Users { get; set; }

        IList<Task> Tasks { get; set; }
    }
}
