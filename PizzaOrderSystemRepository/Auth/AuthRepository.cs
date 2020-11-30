using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using PizzaOrderSystemRepository.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PizzaOrderSystemRepository.Auth
{
    public class AuthRepository : IAuthRepository
    {

        IConfiguration _configuration;
        private IHttpContextAccessor httpContextAccessor;


        public AuthRepository(IConfiguration configuration, IHttpContextAccessor _httpContextAccessor)
        {
            _configuration = configuration;
            httpContextAccessor = _httpContextAccessor;

        }

        public async Task<AuthViewModel> Login(AuthViewModel Auth)
        {

            return await Task.Run(() =>
            {
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:loginDetails"]));
                IEnumerable<string> lines = File.ReadAllLines(filePath);
                List<AuthViewModel> AuthViewModel = new List<AuthViewModel>();
                foreach(var item in lines)
                {
                    AuthViewModel obj = JsonConvert.DeserializeObject<AuthViewModel>(item);
                    AuthViewModel.Add(obj);
                }

                return AuthViewModel.Where(a => a.MobileNo == Auth.MobileNo && a.Password == Auth.Password).FirstOrDefault();
            });
        }

        public async Task<AuthViewModel> Register(AuthViewModel auth)
        {
            auth.UserId = Guid.NewGuid(); 
            return await Task.Run(() =>
            {
                string JsonRegister = JsonConvert.SerializeObject(auth);
                string filePath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..\\..\\..\\..\\", _configuration["DBSettings:DBPath"], _configuration["DBSettings:loginDetails"]));

                using (StreamWriter writer = File.AppendText(filePath))
                {
                    writer.WriteLine(JsonRegister);
                }
                return auth;
            });
        }

        public string GenerateJSONWebToken(AuthViewModel auth)
        {
            //ClaimsIdentity claims  = new ClaimsIdentity(new Claim[]
            //{
            //            new Claim("MobileNo", auth.MobileNo.ToString()),
            //            new Claim("UserName", auth.UserName),
            //            new Claim("Id", auth.UserId.ToString()),

            //});

            //var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["Jwt:Secret"]));
            //var tokenDescriptor = new SecurityTokenDescriptor
            //{
            //    Expires = DateTime.UtcNow.AddDays(7),
            //    SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            //};


            //var tokenHandler = new JwtSecurityTokenHandler();
            //return tokenHandler.CreateToken(tokenDescriptor);

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
               new Claim("MobileNo", auth.MobileNo.ToString()),
                        new Claim("UserName", auth.UserName),
                        new Claim("Id", auth.UserId.ToString()),
            };

            var token = new JwtSecurityToken(_configuration["JWT:Issuer"],
                _configuration["JWT:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);


        }

        public Guid GetUserId()
        {
            return Guid.Parse(httpContextAccessor.HttpContext.User.Claims.FirstOrDefault(x => x.Type == "Id").Value);
        }


    }
}
