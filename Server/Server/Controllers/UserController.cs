using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using System.Text.Json;


namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public IActionResult Profile(UserModel user)
        {
            string jsonString = JsonSerializer.Serialize(user);
            System.IO.File.WriteAllText("user.json", jsonString);
            

            return Ok("Hello from UserController");
        }
    }
}
