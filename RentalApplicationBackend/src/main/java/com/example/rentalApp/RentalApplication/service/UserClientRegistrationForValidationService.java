package com.example.rentalApp.RentalApplication.service;
import java.util.List;
import java.util.Optional;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.repository.UserClientRegistrationForValidationRepository;


public interface UserClientRegistrationForValidationService {
    
    UserClientRegistrationForValidationResponseDto saveClientUser(UserClientRegistrationForValidationDto dto);
    Optional<UserClientRegistrationForValidationResponseDto> getUserById(Integer customerid);
    List<UserClientRegistrationForValidationResponseDto> getAllClientUser();



}
