using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using inforce_test_task.Database.Model;

namespace inforce_test_task.Database
{


    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ShortUrl> ShortUrls { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
