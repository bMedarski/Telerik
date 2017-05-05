using Bytes2you.Validation;
using ProjectManager.Common;
using ProjectManager.Common.Exceptions;
using ProjectManager.Contracts;
using System;

namespace ProjectManager
{
    internal class Engine : IEngine
    {
        private FileLogger logger;
        private CommandProcessor processor;

        public Engine(FileLogger logger, CommandProcessor processor)
        {
            // validate clauses
            Guard.WhenArgument(logger, "Engine Logger provider").IsNull().Throw();
            Guard.WhenArgument(processor, "Engine Processor provider").IsNull().Throw();

            this.logger = logger;
            this.processor = processor;
        }

        public void Start()
        {
            while (true)
            {
                // read from console
                var input = Console.ReadLine();

                if (input.ToLower() == "exit")
                {
                    Console.WriteLine("Program terminated.");
                    break;
                }

                try
                {
                    var executionResult = this.processor.Process(input);
                    Console.WriteLine(executionResult);
                }
                catch (UserValidationException exception)
                {
                    Console.WriteLine(exception.Message);
                }
                catch (Exception exception)
                {
                    Console.WriteLine("Opps, something happened. :(");
                    this.logger.Error(exception.Message);
                }
            }
        }
    }
}
