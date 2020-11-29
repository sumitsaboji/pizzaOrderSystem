using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.VegPizza
{
    public  interface IVegPizzaRepository
    {
        Task<string>  GetVegPizzaList();
        Task<string> GetCustomisePizzaMaster();
        
    }
}
