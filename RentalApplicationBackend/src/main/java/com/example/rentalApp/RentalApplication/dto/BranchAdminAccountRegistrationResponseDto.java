package com.example.rentalApp.RentalApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BranchAdminAccountRegistrationResponseDto {
    private Integer adminid;
    private String email;
    private String password;
    private String branch;
    private String message;
}
