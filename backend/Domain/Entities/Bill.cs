using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StockManagement.Domain.Entities
{
    public class Bill
    {
        public int Id { get; set; }
        
        [Required]
        public string BillNumber { get; set; } = string.Empty; // e.g., "FAC-2026-001"
        
        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalAmount { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal AmountPaid { get; set; }

        // Logic: Is it fully paid?
        [NotMapped]
        public decimal RemainingBalance => TotalAmount - AmountPaid;

        public bool IsPaid => AmountPaid >= TotalAmount;

        // --- Relationship ---
        public int SupplierId { get; set; }
        public Supplier? Supplier { get; set; }
    }
}