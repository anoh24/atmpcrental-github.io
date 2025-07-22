package com.example.rentalApp.RentalApplication.service;
import java.util.List;
import java.util.Optional;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
public interface UserClientValidationService {
    UserClientValidationResponseDto ValidateUserAccount(UserClientValidationResponseDto dto);

    UserClientValidationResponseDto ValidateUserAccount(UserClientValidation dto);

    UserClientValidationResponseDto ValidateUserAccount(UserClientValidationDto dto);
}
