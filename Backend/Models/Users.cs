﻿using System.ComponentModel.DataAnnotations;

namespace CareerAdvisorAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = "";

        public string Email { get; set; } = "";

        public string Password { get; set; } = "";
    }
}
