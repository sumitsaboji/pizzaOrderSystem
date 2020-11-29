using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.VegPizza
{
    public class VegPizzaRepository : IVegPizzaRepository
    {
        IConfiguration _configuration;

        public VegPizzaRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<string> GetVegPizzaList()
        {   
            return await Task.Run(() =>
            {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:pizzaList"]));
                string pizzaJson = File.ReadAllText(filePath);
                return pizzaJson;
            });
        }

        public async Task<string> GetCustomisePizzaMaster()
        {
            return await Task.Run(() =>
            {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:customisePizzeMaster"]));
                string pizzaJson = File.ReadAllText(filePath);
                return pizzaJson;
            });
        }


        
    }
}
