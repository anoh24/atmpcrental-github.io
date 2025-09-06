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
    @Size(min = 5, max = 200 , message = "Only 5 to 200 characters are allowed")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 2, max = 200, message = "Only 2 to 200 characters are allowed")
    private String password;

    @NotBlank(message = "You did not select branch")
    @Size(min = 1, max = 200 , message = "Only 1 to 200 characters are allowed")
    private String branch;
}
