package com.example.rentalApp.RentalApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserClientRegistrationForValidationResponseDto {
    private Integer customerid;
    private String email;
    private String message;
    private String approval;
    private String status;

}
