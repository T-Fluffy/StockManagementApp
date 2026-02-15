using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StockManagement.Core.Entities;
using StockManagement.Api.Controllers.DTOs; 
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace StockManagement.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IConfiguration _configuration;

    public AccountController(UserManager<ApplicationUser> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    [HttpPost("register")]
public async Task<IActionResult> Register([FromBody] RegisterDto model)
{
    // Fix: We now assign FirstName and LastName which are 'required' in your Entity
    var user = new ApplicationUser 
    { 
        UserName = model.Email, 
        Email = model.Email,
        FirstName = model.FirstName,
        LastName = model.LastName
    };

    var result = await _userManager.CreateAsync(user, model.Password);

    if (!result.Succeeded) return BadRequest(result.Errors);

    // Assign Role
    await _userManager.AddToRoleAsync(user, model.Role);
    
    return Ok(new AuthResponseDto(true, "User created successfully!"));
}

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null || !await _userManager.CheckPasswordAsync(user, model.Password))
            return Unauthorized(new AuthResponseDto(false, "Invalid credentials"));

        var userRoles = await _userManager.GetRolesAsync(user);
        var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName!),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        foreach (var role in userRoles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, role));
        }

        var token = GenerateToken(authClaims);
        return Ok(new AuthResponseDto(true, "Login successful", token));
    }

    private string GenerateToken(IEnumerable<Claim> claims)
    {
        var jwtKey = _configuration["Jwt:Key"] ?? "YourSuperSecretKeyThatIsAtLeast32CharsLong!";
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        
        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            expires: DateTime.Now.AddHours(3),
            claims: claims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}