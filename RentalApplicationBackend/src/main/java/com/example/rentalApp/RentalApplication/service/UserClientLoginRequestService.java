package com.example.rentalApp.RentalApplication.service;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
public interface UserClientLoginRequestService {
    UserClientLoginRequestResponseDto login(UserClientLoginRequestDto loginRequestDto);
}
