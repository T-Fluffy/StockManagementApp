using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockManagement.Domain.Entities;
using StockManagement.Infrastructure.Data;

namespace StockManagement.Api.Controllers;

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
    public async Task<ActionResult<IEnumerable<Supplier>>> GetSuppliers()
    {
        // We include Bills so the frontend can calculate total debts
        return await _context.Suppliers.Include(s => s.Bills).ToListAsync();
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

    [HttpPost]
    public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplier)
    {
        _context.Suppliers.Add(supplier);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetSupplier), new { id = supplier.Id }, supplier);
    }

    // FEATURE: Add a bill to a supplier
    [HttpPost("{id}/bills")]
    public async Task<IActionResult> AddBill(int id, Bill bill)
    {
        var supplier = await _context.Suppliers.FindAsync(id);
        if (supplier == null) return NotFound();

        bill.SupplierId = id;
        _context.Bills.Add(bill);
        await _context.SaveChangesAsync();

        return Ok(bill);
    }
}