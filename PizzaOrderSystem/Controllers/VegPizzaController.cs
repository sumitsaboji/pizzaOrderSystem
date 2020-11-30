using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PizzaOrderSystemRepository.VegPizza;

namespace PizzaOrderSystem.Controllers
{
    [Route("api/[controller]/{action}")]
    [ApiController]
    public class VegPizzaController : ControllerBase
    {
        IVegPizzaRepository _vegPizzaRepository;

        public VegPizzaController(IVegPizzaRepository vegPizzaRepository)
        {
            _vegPizzaRepository = vegPizzaRepository;
          
        }

        [HttpGet]
        public async Task<IActionResult> GetVegPizzaList()
        {
          
            return Ok(await _vegPizzaRepository.GetVegPizzaList());
        }
        [HttpGet]

        public async Task<IActionResult> GetCustomisePizzaMaster()
        {
            return Ok(await _vegPizzaRepository.GetCustomisePizzaMaster());
        }

    }
}