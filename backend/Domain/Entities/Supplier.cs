using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockManagement.Domain.Entities
{
    public class Supplier
    {
        public int Id { get; set; }
        public ICollection<Bill> Bills { get; set; } = new List<Bill>();

        [Required]
        public string CompanyName { get; set; } = string.Empty;

        [EmailAddress]
        public string ContactEmail { get; set; } = string.Empty;

        [Required]
        public string PhoneNumber { get; set; } = string.Empty;

        [NotMapped]        
        public decimal TotalRemainingDebt => Bills.Sum(b => b.TotalAmount - b.AmountPaid);
        public string PhysicalAddress { get; set; } = string.Empty;


        // Example: "Drinks", "Charcoal", "Tobacco"
        public string ProvidedProductType { get; set; } = string.Empty;

        // Tracks total advances paid to this supplier
        public decimal TotalAdvancesPaid { get; set; } = 0;

        // Navigation property
        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}