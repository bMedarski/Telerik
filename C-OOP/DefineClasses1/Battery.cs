namespace DefineClasses1
{
    using System.Text;
    class Battery
    {
        private string model;
        private int? hoursIdle;
        private int? hoursTalk;
        private BatteryType? batteryType;

        public Battery(string model)
        {
            this.Model = model;
            this.HoursIdle = hoursIdle;
            this.HoursTalk = hoursTalk;
            this.BatteryType = batteryType;

        }
        public BatteryType? BatteryType
        {
            get { return this.batteryType; }
            set { this.batteryType = value; }
        }
        public string Model
        {
            get { return this.model; }
            set { this.model = value; }
        }
        public int? HoursIdle
        {
            get { return this.hoursIdle; }
            set { this.hoursIdle = value; }
        }
        public int? HoursTalk
        {
            get { return this.hoursTalk; }
            set { this.hoursTalk = value; }
        }
        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();
            if (this.HoursIdle!=null)
            {
                builder.Append("Battery Hours Idle: ").Append(this.HoursIdle).Append("\r\n");
            }
            if (this.HoursTalk!=null)
            {
                builder.Append("Battery Hours Talk: ").Append(this.HoursTalk).Append("\r\n");
            }
            if (this.Model!=null)
            {
                builder.Append("Battery Model: ").Append(this.Model).Append("\r\n");
            }
            if (this.BatteryType!=null)
            {
                builder.Append("Battery Type: ").Append(this.BatteryType).Append("\r\n");
            }
                return builder.ToString();
        }

    }
}
