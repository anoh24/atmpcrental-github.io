package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class UserClientRegistrationForValidationDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;
}
