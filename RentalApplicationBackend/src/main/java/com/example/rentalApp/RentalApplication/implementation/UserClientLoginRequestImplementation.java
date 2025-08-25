package com.example.rentalApp.RentalApplication.implementation;
import com.example.rentalApp.RentalApplication.mapper.UserClientValidationMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.rentalApp.RentalApplication.mapper.UserClientLoginRequestMapper;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.repository.UserClientLoginRequestRepository;
import com.example.rentalApp.RentalApplication.service.UserClientLoginRequestService;
@Service
public class UserClientLoginRequestImplementation implements UserClientLoginRequestService{
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final UserClientLoginRequestRepository userClientLoginRequestRepository;
    private final UserClientLoginRequestMapper userClientLoginRequestMapper;

    public UserClientLoginResquestImplementaion(JwtUtil jwtUtil, PasswordEncoder passwordEncoder,
            UserClientLoginRequestRepository userClientLoginRequestRepository,
            UserClientLoginRequestMapper userClientLoginRequestMapper
            )
    {
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userClientLoginRequestRepository = userClientLoginRequestRepository;
        this.userClientLoginRequestMapper = userClientLoginRequestMapper;
    }

}
