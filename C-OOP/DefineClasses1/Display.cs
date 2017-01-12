namespace DefineClasses1
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class Display
    {
        private readonly double? size;
        private readonly int? colors;

        //public Display()
        //{
        //    this.Size = size;
        //    this.Colors = colors;
        //}
        public Display(double? size, int? colors)
        {
            this.size = size;
            this.colors = colors;
        }
        public double? Size
        {
            get { return this.size; }
            //set { this.size = value; }
        }
        public int? Colors
        {
            get { return this.colors; }
            //set { this.colors = value; }
        }
        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();

            if (this.Size!=null)
            {
                builder.Append("Battery Size: ").Append(this.Size).Append("\r\n");
            }
            if (this.Colors!=null)
            {
                builder.Append("Battery Colors: ").Append(this.Colors).Append("\r\n");
            }
        
            return builder.ToString();
        }
    }
}
