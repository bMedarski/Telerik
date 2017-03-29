using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Students_and_courses.Utils
{
    static class Constant
    {

        public const int MinNameLength = 4;
        public const int MaxNameLength = 20;

        public const string NameMustNotBeNull = "The Name cannot be null!";
        public const string StudenMustNotBeNull = "The student cannot be null!";
        public static string NameMustBeBetween = $"The name must be between {MinNameLength} and {MaxNameLength}!";
    }
}
