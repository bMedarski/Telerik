using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses2
{
    class Program
    {
        static void Main(string[] args)
        {
            Point3D point = new Point3D(2,2,30);
            //Console.WriteLine(Point3D.center);
            //Console.WriteLine(point);
            Distance.DistanceBetweenPoints(point,Point3D.center);
        }
    }
}
