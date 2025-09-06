package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientLoginRequestDto {
    @NotBlank(message = "Email is required")
    @Size(min = 5, max = 299, message = "Only 5 to 200 characters are allowed")
    @Email(message="Invalid email format")
    private String email;
    private String password;

}
