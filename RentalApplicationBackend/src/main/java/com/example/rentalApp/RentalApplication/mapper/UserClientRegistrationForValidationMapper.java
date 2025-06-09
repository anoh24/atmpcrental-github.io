package com.example.rentalApp.RentalApplication.mapper;
import org.springframework.stereotype.Component;

import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;


@Component
public class UserClientRegistrationForValidationMapper {

    public UserClientRegistrationForValidationEntity toEntity(UserClientRegistrationForValidationDto dto){
        if(dto == null) return null;
        UserClientRegistrationForValidationEntity entity = new UserClientRegistrationForValidationEntity();
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        return entity;

    }
    public UserClientRegistrationForValidationResponseDto toDto(UserClientRegistrationForValidationEntity entity){
        if(entity == null) return null;
        UserClientRegistrationForValidationResponseDto dto = new UserClientRegistrationForValidationResponseDto();
        dto.setCustomerid(entity.getCustomerid());
        dto.setEmail(entity.getEmail());
        return dto;
    }

}
