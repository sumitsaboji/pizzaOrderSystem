using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaOrderSystemRepository.Models
{
    public class AuthViewModel
    {
        public Guid  UserId { get; set; }
        public string UserName { get; set; }
        public long MobileNo { get; set; }
        public string  Password { get; set; }
    }
}
