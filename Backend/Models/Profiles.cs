using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CareerAdvisorAPI.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        public string Skills { get; set; } = "";

        public string Interests { get; set; } = "";

        public float Cgpa { get; set; }

        public string MlOutput { get; set; } = "";

        public User? User { get; set; }
    }
}
