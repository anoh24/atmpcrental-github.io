package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;


public interface UserClientValidationService {
    UserClientValidationResponseDto ValidateUserAccount(Integer id, UserClientValidationDto dto);

    UserClientValidationResponseDto ValidateUserAccount(UserClientValidationDto dto);
}
