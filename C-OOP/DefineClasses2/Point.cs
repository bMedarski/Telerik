using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses2
{
    public struct Point3D
    {
        //private double x;
        //private double y;
        //private double z;
        public static readonly Point3D center;

        public Point3D(double x, double y, double z)
        {
            X = x;
            Y = y;
            Z = z;
        }
         static Point3D()
        {
            center = new Point3D(0, 0, 0);
        }
        public double X { get; set; }

        public double Y { get; set; }

        public double Z { get; set; }
        public override string ToString()
        {
            return string.Format($"({X}, {Y}, {Z})");
        }
    }
}
