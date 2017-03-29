namespace DefineClasses1
{
    using System;

    class StartUp
    {
        static void Main()
        {
            //Gsm mine = new Gsm("Nokia S50","Nokia",350.5,"Pesho",new Battery("Nokia"),new Display(15,256));
            //GsmTest test = new GsmTest();
            ////test.DisplayPhones();
            //Call one = new Call(new DateTime(), 0888777555, 500);
            //Call two = new Call(new DateTime(), 0888777555, 500);
            //mine.AddCall(one);        
            ////mine.TotalPriceOfCall(1);
            //mine.AddCall(two);
            //mine.TotalPriceOfCall(1);
            GSMCallHistoryTest.TestCallHistory();
        }
    }
}
