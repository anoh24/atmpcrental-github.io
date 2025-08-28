package com.example.rentalApp.RentalApplication.dto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserClientLoginRequestResponseDto {
    private String token;
    private String email;

}
