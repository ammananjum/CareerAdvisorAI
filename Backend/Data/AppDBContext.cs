using Microsoft.EntityFrameworkCore;
using CareerAdvisorAPI.Models;
using System.Collections.Generic;

namespace CareerAdvisorAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }

    }
}
