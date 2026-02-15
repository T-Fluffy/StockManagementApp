namespace StockManagement.Api.Controllers.DTOs;

// Added FirstName and LastName to match your ApplicationUser requirements
public record RegisterDto(
    string Email, 
    string Password, 
    string FirstName, 
    string LastName, 
    string Role = "User"
);

public record LoginDto(string Email, string Password);

public record AuthResponseDto(bool IsSuccess, string Message, string Token = "");