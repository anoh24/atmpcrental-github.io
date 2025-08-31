package com.example.rentalApp.RentalApplication.service;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;

import java.util.Optional;

public interface UserClientLoginRequestService {
    UserClientLoginRequestResponseDto login(UserClientLoginRequestDto loginRequestDto);
    Optional<UserClientLoginRequestResponseDto> getUserById(Integer customerid);
}
