package com.example.rentalApp.RentalApplication.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserClientValidationResponseDto {
    private String approval;
    private String status;
    private String message;
}
