namespace Printer
{
    using System;

    public class BooleanPrinter
    {
        const int MaxCount = 6;

        public void Print(bool valueToPrint)
        {
            string convertedToString = valueToPrint.ToString();
            Console.WriteLine(convertedToString);
        }
    }
}