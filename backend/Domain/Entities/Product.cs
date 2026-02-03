namespace StockManagement.Domain.Entities;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public ProductCategory Category { get; set; }
    
    // Stock Logic
    public int CurrentStock { get; set; }
    public int MiniStock { get; set; }      // Stock mini
    public int SecurityStock { get; set; }  // Stock de sécurité
    public int MaxStock { get; set; }       // Stock max
    
    // Pricing for Benefit calculation
    public decimal PurchasePrice { get; set; } // Cost from supplier
    public decimal SellingPrice { get; set; }  // Price for customer
    
    // Relationships
    public int SupplierId { get; set; }
    public Supplier? Supplier { get; set; }
    
    // Helper property for your Notification system
    public bool NeedsRestock => CurrentStock <= (MiniStock + SecurityStock);
    public bool IsOverstocked => CurrentStock > MaxStock;
}