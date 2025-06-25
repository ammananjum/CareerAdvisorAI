using Microsoft.AspNetCore.Mvc;
using CareerAdvisorAPI.Data;
using CareerAdvisorAPI.Models;

namespace CareerAdvisorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/users/register
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (string.IsNullOrWhiteSpace(user.Name) ||
                string.IsNullOrWhiteSpace(user.Email) ||
                string.IsNullOrWhiteSpace(user.Password))
            {
                return BadRequest("All fields are required.");
            }

            // Save user to database
            _context.Users.Add(user);
            _context.SaveChanges();

            
            return Ok(new
            {
                message = "User registered successfully!",
                userId = user.Id  
            });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Email and password are required.");
            }

            var user = _context.Users.FirstOrDefault(u =>
                u.Email == request.Email && u.Password == request.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password." });
            }

            return Ok(new
            {
                message = "Login successful",
                userId = user.Id,
                name = user.Name
            });
        }

    }

}
