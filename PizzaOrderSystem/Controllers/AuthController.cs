using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PizzaOrderSystemRepository.Auth;
using PizzaOrderSystemRepository.Models;

namespace PizzaOrderSystem.Controllers
{
    [Route("api/[controller]/{action}")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        IAuthRepository _authRepository;
        public AuthController(IAuthRepository IAuthRepository)
        {
            _authRepository = IAuthRepository;
        }

        [HttpPost]
        public async Task<ActionResult> Login(AuthViewModel AuthViewModel)
        {
            var userDetails = await _authRepository.Login(AuthViewModel);
            if(userDetails != null)
            {
                var tokenData = _authRepository.GenerateJSONWebToken(userDetails);
                return Ok(new
                {
                    data = new
                    {
                        token = tokenData,
                        userName = userDetails.UserName,
                        Id = userDetails.UserId,
                     
                    },
                    isSuccess = true
                }); ;
            }
            return Ok(await _authRepository.Login(AuthViewModel));
        }

        [HttpPost]
        public async Task<ActionResult> Register(AuthViewModel AuthViewModel)
        {
            return Ok(await _authRepository.Register(AuthViewModel));
        }


    }
}