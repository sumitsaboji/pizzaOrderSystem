using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PizzaOrderSystemRepository.Auth;
using PizzaOrderSystemRepository.Models;
using PizzaOrderSystemRepository.Order;

namespace PizzaOrderSystem.Controllers
{
    [Route("api/[controller]/{action}")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        IOrderRepository _orderrepository;
        IAuthRepository _authRepository;
        public OrderController(IOrderRepository orderrepository, IAuthRepository authRepository)
        {
            _orderrepository = orderrepository;
            _authRepository = authRepository;

        }

        [HttpPost]
        public async Task<ActionResult> PlaceOrder(OrderViewModel OrderViewModel)
        {
            return Ok(await _orderrepository.PlaceOrder(OrderViewModel));
        }


        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetOrders()
        {
            Guid guid = _authRepository.GetUserId();
            return Ok(await _orderrepository.GetOrder(guid));
        }



    }
}