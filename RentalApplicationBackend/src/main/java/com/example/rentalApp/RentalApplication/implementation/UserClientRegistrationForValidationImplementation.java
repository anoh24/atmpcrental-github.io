package com.example.rentalApp.RentalApplication.implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.mapper.UserClientRegistrationForValidationMapper;
import com.example.rentalApp.RentalApplication.repository.UserClientRegistrationForValidationRepository;
import com.example.rentalApp.RentalApplication.service.UserClientRegistrationForValidationService;


@Service
public class UserClientRegistrationForValidationImplementation implements UserClientRegistrationForValidationService {

    private final UserClientRegistrationForValidationRepository userClientRegistrationForValidationRepository;
    private final UserClientRegistrationForValidationMapper userClientRegistrationForValidationMapper;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserClientRegistrationForValidationImplementation(
        UserClientRegistrationForValidationRepository userClientRegistrationForValidationRepository,
        UserClientRegistrationForValidationMapper userClientRegistrationForValidationMapper,
        PasswordEncoder passwordEncoder

    ) {
        this.userClientRegistrationForValidationRepository = userClientRegistrationForValidationRepository;
        this.userClientRegistrationForValidationMapper = userClientRegistrationForValidationMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserClientRegistrationForValidationResponseDto saveClientUser(UserClientRegistrationForValidationDto dto){

        UserClientRegistrationForValidationEntity entity = userClientRegistrationForValidationMapper.toEntity(dto);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        UserClientRegistrationForValidationEntity saved = userClientRegistrationForValidationRepository.save(entity);
        UserClientRegistrationForValidationResponseDto responseDto = userClientRegistrationForValidationMapper.toDto(saved);
        responseDto.setMessage("Account registered, we'll email you after your account is validated");
        return responseDto;
    }

    @Override
    public Optional<UserClientRegistrationForValidationResponseDto> getUserById(Integer customerid){
        return userClientRegistrationForValidationRepository.findById(customerid)
                .map(userClientRegistrationForValidationMapper::toDto);

    }

    @Override
    public List<UserClientRegistrationForValidationResponseDto> getAllClientUser(){
        return userClientRegistrationForValidationRepository.findAll()
            .stream()
            .map(userClientRegistrationForValidationMapper::toDto)
            .collect(Collectors.toList());
    }


}
