using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Students_and_courses
{
    static class IdGenerator
    {

        static int id = 9999;
        private static IEnumerable<int> idNumbers;

        public static int GetId()
        {
            id++;
            return id;
        }

    }
}
