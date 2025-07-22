package com.example.rentalApp.RentalApplication.service.implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.mapper.UserClientRegistrationForValidationMapper;
import com.example.rentalApp.RentalApplication.repository.UserClientRegistrationForValidationRepository;
import com.example.rentalApp.RentalApplication.service.UserClientRegistrationForValidationService;


@Service
public abstract class UserClientRegistrationForValidationImplementation implements UserClientRegistrationForValidationService {

    private final UserClientRegistrationForValidationRepository userClientRegistrationForValidationRepository;
    private final UserClientRegistrationForValidationMapper userClientRegistrationForValidationMapper;
    @Autowired
    public UserClientRegistrationForValidationImplementation(
        UserClientRegistrationForValidationRepository userClientRegistrationForValidationRepository,
        UserClientRegistrationForValidationMapper userClientRegistrationForValidationMapper
        
    ) {
        this.userClientRegistrationForValidationRepository = userClientRegistrationForValidationRepository;
        this.userClientRegistrationForValidationMapper = userClientRegistrationForValidationMapper;
    }

    @Override
    public UserClientRegistrationForValidationResponseDto saveClientUser(UserClientRegistrationForValidationDto dto){
        UserClientRegistrationForValidationEntity entity = userClientRegistrationForValidationMapper.toEntity(dto);
        UserClientRegistrationForValidationEntity saved = userClientRegistrationForValidationRepository.save(entity);
        return userClientRegistrationForValidationMapper.toDto(saved);
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
