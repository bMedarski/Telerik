using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Task_1.Students_and_courses.Utils;

namespace Task_1.Students_and_courses
{
    public class Student
    {
        private string name;
        private int id;

        public Student(string name)
        {
            this.Name = name;
        }
        public int Id
        {
            get { return this.id; }
            set { this.id = value; }
        }

        public string Name
        {
            get { return this.name; }
            set
            {
                if (value == null)
                {
                    throw new ArgumentNullException(Constant.NameMustNotBeNull);
                }
                else if (value.Length < Constant.MinNameLength || value.Length > Constant.MaxNameLength)
                {
                    throw new ArgumentOutOfRangeException(Constant.NameMustBeBetween);
                }
                this.name = value;
            }
        }



    }
}
