using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses1
{
    class Call
    {
        //date, time, dialled phone number and duration (in seconds).
        private DateTime? date;
        private int? phoneNumber;
        private int duration;

        public Call() { }

        public Call(DateTime? date, int? phoneNumber, int duration)
        {
            this.Date = date;
            this.PhoneNumber = phoneNumber;
            this.Duration = duration;
        }
        public DateTime? Date
        {
            get { return this.date; }
            set { this.date = value; }
        }
        public int? PhoneNumber
        {
            get { return this.phoneNumber; }
            set { this.phoneNumber = value; }
        }
        public int Duration
        {
            get { return this.duration; }
            set { this.duration = value; }
        }
        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("Date: ").Append(this.Date).Append("\r\n");
            builder.Append("Dialled Phone Number: ").Append(this.PhoneNumber).Append("\r\n");
            builder.Append("Duration: ").Append(this.Duration).Append("\r\n");

            return builder.ToString();
        }

    }
}
