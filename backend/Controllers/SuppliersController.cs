using Microsoft.AspNetCore.Authorization; // Add this
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockManagement.Domain.Entities;
using StockManagement.Infrastructure.Data;

namespace StockManagement.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class SuppliersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SuppliersController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<Supplier>>> GetSuppliers()
    {
        return await _context.Suppliers.Include(s => s.Bills).ToListAsync();
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplier)
    {
        _context.Suppliers.Add(supplier);
        await _context.SaveChangesAsync();
        // This line looks for the method named "GetSupplier" above
        return CreatedAtAction(nameof(GetSupplier), new { id = supplier.Id }, supplier);
    }

    [HttpPost("{id}/bills")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> AddBill(int id, Bill bill)
    {
        var supplier = await _context.Suppliers.FindAsync(id);
        if (supplier == null) return NotFound();

        bill.SupplierId = id;
        _context.Bills.Add(bill);
        await _context.SaveChangesAsync();

        return Ok(bill);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Supplier>> GetSupplier(int id)
    {
        var supplier = await _context.Suppliers
            .Include(s => s.Bills)
            .Include(s => s.Products)
            .FirstOrDefaultAsync(s => s.Id == id);

        if (supplier == null) return NotFound();
        return supplier;
    }
}