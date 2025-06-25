using Microsoft.AspNetCore.Mvc;
using CareerAdvisorAPI.Data;
using CareerAdvisorAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Text;

namespace CareerAdvisorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfilesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/profiles/get/{userId}
        [HttpGet("get/{userId}")]
        public IActionResult GetProfile(int userId)
        {
            var profile = _context.Profiles
                .Include(p => p.User)
                .FirstOrDefault(p => p.UserId == userId);

            if (profile == null)
                return NotFound(new { message = "Profile not found" });

            return Ok(profile);
        }

        // POST: api/profiles/create
        [HttpPost("create")]
        public IActionResult CreateProfile([FromBody] Profile profile)
        {
            if (profile.UserId <= 0 ||
                string.IsNullOrWhiteSpace(profile.Skills) ||
                string.IsNullOrWhiteSpace(profile.Interests))
            {
                return BadRequest("Missing required fields.");
            }

            string aiResult = RunPythonAI(profile.Cgpa, profile.Skills, profile.Interests);
            profile.MlOutput = aiResult;

            _context.Profiles.Add(profile);
            _context.SaveChanges();

            return Ok(new { message = "Profile saved successfully!", careerSuggestion = aiResult });
        }

        // PUT: api/profiles/update/{id}
        [HttpPut("update/{id}")]
        public IActionResult UpdateProfile(int id, [FromBody] Profile updatedProfile)
        {
            var existingProfile = _context.Profiles.Find(id);
            if (existingProfile == null)
                return NotFound(new { message = "Profile not found" });

            if (updatedProfile.UserId <= 0 ||
                string.IsNullOrWhiteSpace(updatedProfile.Skills) ||
                string.IsNullOrWhiteSpace(updatedProfile.Interests))
            {
                return BadRequest("Missing required fields.");
            }

            existingProfile.Skills = updatedProfile.Skills;
            existingProfile.Interests = updatedProfile.Interests;
            existingProfile.Cgpa = updatedProfile.Cgpa;

            string aiResult = RunPythonAI(updatedProfile.Cgpa, updatedProfile.Skills, updatedProfile.Interests);
            existingProfile.MlOutput = aiResult;

            _context.SaveChanges();

            return Ok(new { message = "Profile updated successfully!", careerSuggestion = aiResult });
        }

        // === Real AI Call to Python Script ===
        private string RunPythonAI(double cgpa, string skills, string interests)
        {
            try
            {
                string pythonExe = @"C:\Users\dell\AppData\Local\Programs\Python\Python313\python.exe";
                string scriptPath = @"C:\Users\dell\CareerApp\career_predictor.py";
                string workingDir = @"C:\Users\dell\CareerApp";

                string args = $"{cgpa} \"{skills}\" \"{interests}\"";

                var psi = new ProcessStartInfo
                {
                    FileName = pythonExe,
                    Arguments = $"\"{scriptPath}\" {args}",
                    WorkingDirectory = workingDir,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };

                var process = Process.Start(psi);
                if (process == null)
                {
                    return "AI Error: Could not start process.";
                }

                string output = process.StandardOutput.ReadToEnd();
                string error = process.StandardError.ReadToEnd();
                process.WaitForExit();

                
                if (!string.IsNullOrWhiteSpace(error) && string.IsNullOrWhiteSpace(output))
                {
                    return "AI Error: " + error;
                }


                var lines = output.Split(new[] { '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);
                string lastLine = lines.LastOrDefault() ?? "Unknown Career";

                return lastLine.Trim();
            }
            catch (Exception ex)
            {
                return "AI Error: " + ex.Message;
            }
        }


    }
}
