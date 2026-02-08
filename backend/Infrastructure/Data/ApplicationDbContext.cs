using Microsoft.EntityFrameworkCore;
using StockManagement.Domain.Entities;

namespace StockManagement.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
        : base(options) { }

    public DbSet<Product> Products { get; set; }
    public DbSet<Supplier> Suppliers { get; set; }
    public DbSet<Bill> Bills { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Precision for financial calculations (Recette/Benefit)
        modelBuilder.Entity<Product>()
            .Property(p => p.PurchasePrice)
            .HasPrecision(18, 2);

        modelBuilder.Entity<Product>()
            .Property(p => p.SellingPrice)
            .HasPrecision(18, 2);
            
        // One-to-Many Relationship
        modelBuilder.Entity<Product>()
            .HasOne(p => p.Supplier)
            .WithMany(s => s.Products)
            .HasForeignKey(p => p.SupplierId);

        modelBuilder.Entity<Bill>()
        .Property(b => b.TotalAmount)
        .HasPrecision(18, 2);

        modelBuilder.Entity<Bill>()
            .Property(b => b.AmountPaid)
            .HasPrecision(18, 2);

        modelBuilder.Entity<Bill>()
            .HasOne(b => b.Supplier)
            .WithMany(s => s.Bills)
            .HasForeignKey(b => b.SupplierId);
    }
}