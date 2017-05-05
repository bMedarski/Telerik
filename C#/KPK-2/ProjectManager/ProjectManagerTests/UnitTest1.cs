using System.Collections;
using System.Collections.Generic;
using Moq;
using NUnit.Framework;
using ProjectManager.Common.Exceptions;
using ProjectManager.Contracts;

namespace ProjectManagerTests
{
    [TestFixture]
    public class UnitTest1
    {
        [Test]
        public void TestMethod1()
        {

            IList parameters = new List<string>();
            parameters.Add('1');
            parameters.Add('2');
            parameters.Add('3');
            parameters.Add('4');
            parameters.Add('5');
            parameters.Add('6');

            Mock<ICommand> myMock = new Mock<ICommand>();

            //Assert.Throws<UserValidationException>(() => myMock.Execute(parameters));
        }
    }
}