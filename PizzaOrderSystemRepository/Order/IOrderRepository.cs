using PizzaOrderSystemRepository.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.Order
{
    public interface IOrderRepository
    {
        Task<string> PlaceOrder(OrderViewModel OrderViewModel);
        Task<List<OrderViewModel>> GetOrder(Guid UserId);

    }
}
