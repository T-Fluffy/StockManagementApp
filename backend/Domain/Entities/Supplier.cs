namespace StockManagement.Domain.Entities;

public class Supplier
{
    public int Id { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public string ContactEmail { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string PhysicalAddress { get; set; } = string.Empty;
    
    // Specific to your requirement: "type of product provided"
    public string ProvidedProductType { get; set; } = string.Empty; 

    // Navigation property for EF Core
    public ICollection<Product> Products { get; set; } = new List<Product>();
    
    // Track payments/advances mentioned in your features
    public decimal TotalAdvancesPaid { get; set; }
}