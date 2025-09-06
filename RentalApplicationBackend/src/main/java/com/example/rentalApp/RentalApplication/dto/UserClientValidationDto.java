package com.example.rentalApp.RentalApplication.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientValidationDto {
    @NotBlank(message = "You did not select a validation")
    @Size(min = 1, max = 200, message="Only 1 to 200 characters are allowed")
    private String approval;
    private  String status;
}

