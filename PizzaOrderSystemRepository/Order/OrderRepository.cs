using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using PizzaOrderSystemRepository.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.Order
{
    public class OrderRepository : IOrderRepository
    {
        IConfiguration _configuration;

        public OrderRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<string> PlaceOrder(OrderViewModel OrderViewModel)
        {
            return await Task.Run(() =>
            {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:order"]));
                string JsonOrder = JsonConvert.SerializeObject(OrderViewModel);
                using (StreamWriter writer = File.AppendText(filePath))
                {
                    writer.WriteLine(JsonOrder);
                }
                return JsonOrder
                ;
            });
        }

        public async Task<List<OrderViewModel>> GetOrder(Guid UserId)
        {
            return await Task.Run(() =>
            {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:order"]));

                IEnumerable<string> lines = File.ReadAllLines(filePath);
                List<OrderViewModel> lits = new List<OrderViewModel>();
                foreach (var item in lines)
                {
                    OrderViewModel obj = JsonConvert.DeserializeObject<OrderViewModel>(item);
                    lits.Add(obj);
                }

                return lits.Where(a => a.UserId == UserId).ToList();
            });
        }
    }
}
