using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses2
{
    public class GenericList<T>
    {

        private const int defaulthCapacity = 4;
        private int capacity;
        private T[] list = new T[defaulthCapacity];

        public GenericList(int capacity)
        {
            list = new T[capacity];
            capacity = 0;
        }
        public GenericList()
            : this(defaulthCapacity)
        {
        }

        public int Capacity{ get; private set; }
       
        
    }
}
