package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler.EmailNotFoundException;
import com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler.InvalidPasswordException;
import com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler.InvalidatedLoginException;
import com.example.rentalApp.RentalApplication.mapper.UserClientLoginRequestMapper;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import com.example.rentalApp.RentalApplication.repository.UserClientLoginRequestRepository;
import com.example.rentalApp.RentalApplication.service.UserClientLoginRequestService;
import com.example.rentalApp.RentalApplication.config.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class UserClientLoginRequestImplementation implements UserClientLoginRequestService {

    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final UserClientLoginRequestRepository userClientLoginRequestRepository;
    private final UserClientLoginRequestMapper userClientLoginRequestMapper;
    @Autowired
    public UserClientLoginRequestImplementation(
            JwtUtil jwtUtil,
            PasswordEncoder passwordEncoder,
            UserClientLoginRequestRepository userClientLoginRequestRepository,
            UserClientLoginRequestMapper userClientLoginRequestMapper) {

        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userClientLoginRequestRepository = userClientLoginRequestRepository;
        this.userClientLoginRequestMapper = userClientLoginRequestMapper;
    }

    @Override
    public UserClientLoginRequestResponseDto login(UserClientLoginRequestDto loginRequest) {
        CustomerDetailsEntity user = userClientLoginRequestRepository
                .findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new EmailNotFoundException("Email not found"));


        Optional.ofNullable(user.getPassword())
                .filter(encodedPassword -> passwordEncoder.matches(loginRequest.getPassword(), encodedPassword))
                .orElseThrow(() -> new InvalidPasswordException("Invalid password"));

        Optional.ofNullable(user)
                .filter(u ->!"In Active".equalsIgnoreCase(u.getStatus()))
                .orElseThrow(() -> new InvalidatedLoginException("Your account is not yet approved."));
        String token = jwtUtil.generateToken(user.getEmail());

        return userClientLoginRequestMapper.toUserClientLoginRequestResponseDto(user, token);
    }
    @Override
    public Optional<UserClientLoginRequestResponseDto> getUserById(Integer customerid) {
        return userClientLoginRequestRepository.findById(customerid)
                .map(userClientLoginRequestMapper::toUserClientLoginRequestResponseDto);
    }

}
