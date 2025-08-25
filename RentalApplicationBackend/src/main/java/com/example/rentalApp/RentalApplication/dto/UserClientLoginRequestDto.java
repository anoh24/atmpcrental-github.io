package com.example.rentalApp.RentalApplication.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientLoginRequestDto {
    @NotBlank(message="Email is required")
    @Email(message="Invalid email format")
    private String email;
    private String password;

}
