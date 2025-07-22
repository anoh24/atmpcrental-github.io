package com.example.rentalApp.RentalApplication.dto;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientValidationDto {
    @Size(message="Only 200 characters are allowed")
    private String Approval;
}
