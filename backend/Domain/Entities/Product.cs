using System.ComponentModel.DataAnnotations.Schema;

namespace StockManagement.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public ProductCategory Category { get; set; }

        // --- Stock Management ---
        public int CurrentStock { get; set; }
        public int MiniStock { get; set; }      // Threshold for "Stock Mini"
        public int SecurityStock { get; set; }  // Extra safety margin
        public int MaxStock { get; set; }       // Threshold for "Stock Max" alert

        // --- Financials ---
        [Column(TypeName = "decimal(18,2)")]
        public decimal PurchasePrice { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal SellingPrice { get; set; }

        // Logic: (SellingPrice - PurchasePrice)
        [NotMapped] 
        public decimal UnitBenefit => SellingPrice - PurchasePrice;

        // --- Supplier Info ---
        public int SupplierId { get; set; }
        public Supplier? Supplier { get; set; }

        // --- Tracking ---
        public DateTime? ExpiryDate { get; set; }
        public bool IsBrokenOrDamaged { get; set; }
        public int DamagedQuantity { get; set; }
    }
}