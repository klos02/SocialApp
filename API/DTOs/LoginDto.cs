using System;

namespace API.DTOs;

public class LoginDto
{
    public required string UserName { get; set; }
    public string Password { get; set; }

}
