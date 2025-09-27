package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BranchAdminAccountRegistrationDto {
    private Integer adminid;
    @NotBlank(message = "Username is required")
    @Email(message = "Invalid format")
    @Size(min = 5, max = 200 , message = "Only 5 to 200 characters are allowed")
    private String email;
    @NotBlank(message = "Password is required")
    @Size(min = 5, max = 200 , message = "Only 5 to 200 characters are allowed")
    private String password;
    @NotBlank(message = "Branch is required")
    @Size(min = 5, max = 200 , message = "Only 1 to 200 characters are allowed")
    private String branch;
}
