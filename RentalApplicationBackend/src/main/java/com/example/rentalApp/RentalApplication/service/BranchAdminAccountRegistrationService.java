package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationResponseDto;


import java.util.Optional;


public interface BranchAdminAccountRegistrationService {
    BranchAdminAccountRegistrationResponseDto saveAdminAccount(BranchAdminAccountRegistrationDto dto);

}
