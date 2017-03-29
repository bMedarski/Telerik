using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DefineClasses1
{
    class GsmTest
    {
        Gsm one = new Gsm("Nokia S50", "Nokia", 350.5, "Pesho", new Battery("Nokia"), new Display(15, 256));
        Gsm two = new Gsm("Nokia S51", "Samsung", 450, "Tosho", new Battery("Samsung"), new Display(16, 9000));
        Gsm three = new Gsm("Nokia S52", "Lenivo", 550, "Gosho", new Battery("Lenivo"), new Display(17, 10));
        Gsm four = new Gsm("Nokia S53", "Alkatel", 100, "Kosyo", new Battery("Alkatel"), new Display(18, 3000));
        Gsm five = new Gsm("Nokia S54", "P", 5, "Misho", new Battery("P"), new Display(19, 654));
        
        public void DisplayPhones()
        {
            Console.WriteLine(one);
            Console.WriteLine(two);
            Console.WriteLine(three);
            Console.WriteLine(four);
            Console.WriteLine(five);
            Console.WriteLine(Gsm.IphoneGsm);
        }

    }
}
