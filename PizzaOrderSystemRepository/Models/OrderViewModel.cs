using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaOrderSystemRepository.Models
{
    public class OrderViewModel
    {
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public long  MobileNo { get; set; }
        public Guid UserId { get; set; }
        public string  PizzaList { get; set; }

    }
}
