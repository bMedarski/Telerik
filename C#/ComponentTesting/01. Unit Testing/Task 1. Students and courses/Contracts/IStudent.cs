﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1.Students_and_courses.Contracts
{
    public interface IStudent
    {
        string Name { get; set; }
        int Id { get; set; }
    }
}
