using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses1
{
    class GSMCallHistoryTest
    {
        public static void TestCallHistory()
        {
            Gsm phone = new Gsm("Nokia S50", "Nokia", 350.5, "Pesho", new Battery("Nokia"), new Display(15, 256));

            Call one = new Call(new DateTime(), 0888777225, 300);
            Call two = new Call(new DateTime(), 0888777555, 500);
            Call three = new Call(new DateTime(), 0882347555, 1000);
            Call four = new Call(new DateTime(), 0888234555, 1);
            Call five = new Call(new DateTime(), 088545555, 250);
            phone.AddCall(one);
            phone.AddCall(two);
            phone.AddCall(three);
            phone.AddCall(four);
            phone.AddCall(five);
            phone.PrintCallHistory();
            double price = 0.37;
            phone.TotalPriceOfCall(price);
            phone.RemoveCall(three);
            phone.TotalPriceOfCall(price);
            phone.ClearAll();
            phone.TotalPriceOfCall(price);


        }
    }
}
