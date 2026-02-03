using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockManagement.Domain.Entities;
using StockManagement.Infrastructure.Data;

namespace StockManagement.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // FEATURE: Database of the products (List all)
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.Include(p => p.Supplier).ToListAsync();
    }

    // FEATURE: Initial stock / Add new product
    [HttpPost]
    public async Task<ActionResult<Product>> PostProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
    }

    // FEATURE: Stock Entrant (Simplified for now)
    [HttpPatch("{id}/add-stock")]
    public async Task<IActionResult> AddStock(int id, [FromBody] int quantity)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();

        product.CurrentStock += quantity;
        await _context.SaveChangesAsync();

        return Ok(new { product.Name, product.CurrentStock });
    }
}