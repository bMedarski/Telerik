﻿using System.ComponentModel.DataAnnotations;
using System.Text;
using ProjectManager.Enums;

namespace ProjectManager.Models
{
    public class Task
    {
        public Task(string name, User owner, TaskState state)
        {
            this.Name = name;
            this.Owner = owner;
            this.State = state;
        }

        [Required(ErrorMessage = "Task Name is required!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Task Owner is required")]
        public User Owner { get; set; }

        public TaskState State { get; set; }

        public override string ToString()
        {
            var builder = new StringBuilder();

            builder.AppendLine("    Name: " + this.Name);
            builder.Append("    State: " + this.State);

            return builder.ToString();
        }       
    }
}