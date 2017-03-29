namespace DefineClasses1
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    class Gsm
    {
        private string model;
        private string manufacturer;
        private double? price;
        private string owner;
        private Battery battery;
        private Display display;
        private List<Call> callhistory = new List<Call>();
        public static Gsm IphoneGsm = new Gsm("IPhone 4S", "Samsung", 750,"Tosho",new Battery("new"),new Display(15,265));

        public Gsm(string model, string manufacturer, double? price, string owner, Battery battery, Display display)
        {
            this.Model = model;
            this.Manufacturer = manufacturer;
            this.Price = price;
            this.Owner = owner;
            this.Battery = battery;
            this.Display = display;
        }
        public Gsm(string model, string manufacturer)
        {
            this.Model = model;
            this.Manufacturer = manufacturer;
            this.Price = null;
            this.Owner = null;
            this.Battery = null;
            this.Display = null;
        }
        public string Model 
        {
            get { return this.model; }
            set { this.model = value; }
        }
        public string Manufacturer
        {
            get { return this.manufacturer; }
            set { this.manufacturer = value; }
        }
        public double? Price
        {
            get { return this.price; }
            set { this.price = value; }
        }
        public string Owner
        {
            get { return this.owner; }
            set { this.owner = value; }
        }
        public Battery Battery
        {
            get { return this.battery; }
            set { this.battery = value; }
        }
        public Display Display
        {
            get { return this.display; }
            set { this.display = value; }
        }
        public void AddCall(Call call)
        {
            this.callhistory.Add(call);
        }
        public void RemoveCall(Call call)
        {
            this.callhistory.Remove(call);
        }
        public void ClearAll()
        {
            this.callhistory.Clear();
        }
        public void PrintCallHistory()
        {
            foreach (var item in this.callhistory)
            {
                Console.WriteLine(item);
            }
        }
        public void TotalPriceOfCall(double callPrice)
        {
            double sum = 0;
            foreach (var call in this.callhistory)
            {
                sum += callPrice * call.Duration / 60;
            }
            Console.WriteLine("Total Price of Calls: {0}",sum);
        }
        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();
            if (this.Model!=null)
            {
                builder.Append("Model: ").Append(this.Model).Append("\r\n");
            }
            if (this.Manufacturer!=null)
            {
                builder.Append("Manufacturer: ").Append(this.Manufacturer).Append("\r\n");
            }
            if (this.Price!=null)
            {
                builder.Append("Price: ").Append(this.Price).Append("\r\n");
            }
            if (this.Owner!=null)
            {
                builder.Append("Owner: ").Append(this.Owner).Append("\r\n");
            }
            if (this.Battery!=null&&this.Battery.BatteryType!=null)
            {
                builder.Append("Battery type: ").Append(this.Battery.Model).Append("\r\n");
            }
            if (this.Battery != null && this.Battery.BatteryType != null)
            {
                builder.Append("Battery model: ").Append(this.Battery.Model).Append("\r\n");
            }
            if (this.Battery != null && this.Battery.HoursTalk != null)
            {
                builder.Append("Battery hours talk: ").Append(this.Battery.HoursTalk).Append("\r\n");
            }
            if (this.Battery != null && this.Battery.HoursIdle != null)
            {
                builder.Append("Battery idle: ").Append(this.Battery.HoursIdle).Append("\r\n");
            }
            if (this.Display != null && this.Display.Size != null)
            {
                builder.Append("Dispay size: ").Append(this.Display.Size).Append("\r\n");
            }
            if (this.Display != null && this.Display.Colors != null)
            {
                builder.Append("Dispay colors: ").Append(this.Display.Colors).Append("\r\n");
            }

            return builder.ToString();
        }

    }
}
