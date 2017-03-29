using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Task_1.Students_and_courses.Contracts;
using Task_1.Students_and_courses.Utils;

namespace Task_1.Students_and_courses
{
    public class School:ISchool
    {

        private string name;
        private ICollection<IStudent> studentsList;
        private ICollection<ICourse> coursesList;

        public School(string name)
        {
            this.Name = name;
            this.StudentList = new List<IStudent>();
            this.CoursesList = new List<ICourse>();
        }

        public string Name
        {
            get { return this.name; }
            set {
                if (value==null)
                {
                    throw new ArgumentNullException(Constant.NameMustNotBeNull);
                }
                else if (value.Length<Constant.MinNameLength||value.Length>Constant.MaxNameLength)
                {
                    throw new ArgumentOutOfRangeException(Constant.NameMustBeBetween);
                }
                this.name = value;
            }     
        }
        public ICollection<IStudent> StudentList
        {
            get { return this.studentsList; }
            private set { this.studentsList = value; }
        }
        public ICollection<ICourse> CoursesList
        {
            get { return this.coursesList; }
            private set { this.coursesList = value; }
        }

        public void AddAStudent(IStudent student)
        {
            if (student!=null)
            {
                student.Id = IdGenerator.GetId();
                studentsList.Add(student);
            }
            else
            {
                throw new ArgumentNullException(Constant.StudenMustNotBeNull);
            }
        }
    }
}
