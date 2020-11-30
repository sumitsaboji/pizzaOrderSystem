using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaOrderSystem.Helper
{
    public class ExceptionFilter : IExceptionFilter
    {
        IConfiguration _configuration;
        public ExceptionFilter(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void OnException(ExceptionContext context)
        {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], "logs", _configuration["DBSettings:logs"]));
               filePath = filePath + "_" + DateTime.Now.Day.ToString() + "_" + DateTime.Now.Month.ToString() + "_" + DateTime.Now.Year.ToString() + ".txt";
                using (StreamWriter writer = File.AppendText(filePath))
                {
                    writer.WriteLine(context.Exception);
                    writer.WriteLine();

                }
        }
    }
}
