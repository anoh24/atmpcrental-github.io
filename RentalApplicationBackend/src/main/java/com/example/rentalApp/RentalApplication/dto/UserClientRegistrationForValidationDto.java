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
public class UserClientRegistrationForValidationDto {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(message = "Only 200 characters are allowed")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(message = "Only 200 characters are allowed")
    private String password;

    @NotBlank(message = "Branch is required")
    private String branch;
}
