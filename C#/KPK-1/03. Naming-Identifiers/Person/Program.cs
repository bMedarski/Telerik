namespace Person
{
    using System;

    class Program
    {
        static void Main(string[] args)
        {

        }
        public void PersonCreator(int personolIndentifier)
        {
            Person newPerson = new Person();
            newPerson.age = personolIndentifier;
            if (personolIndentifier % 2 == 0)
            {
                newPerson.name = "Батката";
                newPerson.sex = Gender.Male;
            }
            else
            {
                newPerson.name = "Мацето";
                newPerson.sex = Gender.Female;
            }
        }
    }
}
