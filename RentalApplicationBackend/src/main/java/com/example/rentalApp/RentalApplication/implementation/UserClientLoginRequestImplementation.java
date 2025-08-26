package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.mapper.UserClientLoginRequestMapper;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.repository.UserClientLoginRequestRepository;
import com.example.rentalApp.RentalApplication.service.UserClientLoginRequestService;
import com.example.rentalApp.RentalApplication.config.JwtUtil;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class UserClientLoginRequestImplementation implements UserClientLoginRequestService {

    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final UserClientLoginRequestRepository userClientLoginRequestRepository;
    private final UserClientLoginRequestMapper userClientLoginRequestMapper;

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
        UserClientRegistrationForValidationEntity user = userClientLoginRequestRepository
                .findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User email not found"));

        // Use Optional to validate password
        Optional.ofNullable(user.getPassword())
                .filter(encodedPassword -> passwordEncoder.matches(loginRequest.getPassword(), encodedPassword))
                .orElseThrow(() -> new RuntimeException("Invalid password"));

        String token = jwtUtil.generateToken(user.getEmail()); // no role

        return userClientLoginRequestMapper.toUserClientLoginRequestResponseDto(user, token);
    }
}
