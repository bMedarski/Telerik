using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Students_and_courses
{
    static public class Validator
    {


        public static void ValidateNull(object value, string message)
        {
            if (value == null)
            {
                throw new ArgumentNullException(message);
            }
        }
        public static void ValidateRange(int value, int min, int max, string message)
        {
            if (value<min || value> max)
            {
                throw new ArgumentOutOfRangeException(message);
            }
        }
    }
}
