using Microsoft.AspNetCore.Identity;

namespace StockManagement.Core.Entities
{
    // Inheriting from IdentityUser gives us Email, PasswordHash, etc. for free
    public class ApplicationUser : IdentityUser
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}