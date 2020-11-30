using Microsoft.IdentityModel.Tokens;
using PizzaOrderSystemRepository.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.Auth
{
    public interface IAuthRepository
    {
        Task<AuthViewModel> Login(AuthViewModel AuthViewModel);
        Task<AuthViewModel> Register(AuthViewModel AuthViewModel);

        string  GenerateJSONWebToken(AuthViewModel AuthViewModel);

        Guid GetUserId();
    }
}
