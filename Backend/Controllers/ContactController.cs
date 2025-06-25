using CareerAdvisorAPI.Models;
using Microsoft.AspNetCore.Http;
using CareerAdvisorAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace CareerAdvisorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("send")]
        public async Task<IActionResult> Send([FromBody] ContactMessage message)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid message");

            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Message received successfully!" });
        }
    }

}
