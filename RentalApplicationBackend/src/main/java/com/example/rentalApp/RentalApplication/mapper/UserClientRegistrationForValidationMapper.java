package com.example.rentalApp.RentalApplication.mapper;
import org.springframework.stereotype.Component;

import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import java.util.Optional;


@Component
public class UserClientRegistrationForValidationMapper {
    //Client user registration
    public UserClientRegistrationForValidationEntity toEntity(UserClientRegistrationForValidationDto dto) {
        UserClientRegistrationForValidationEntity entity = new UserClientRegistrationForValidationEntity();
        Optional.ofNullable(dto.getEmail()).ifPresent(entity::setEmail);
        Optional.ofNullable(dto.getPassword()).ifPresent(entity::setPassword);
        entity.setApproval("Invalidated");
        entity.setStatus("In Active");
        return entity;
    }

    public UserClientRegistrationForValidationResponseDto toDto(UserClientRegistrationForValidationEntity entity) {
        UserClientRegistrationForValidationResponseDto dto = new UserClientRegistrationForValidationResponseDto();
        Optional.ofNullable(entity.getCustomerid()).ifPresent(dto::setCustomerid);
        Optional.ofNullable(entity.getEmail()).ifPresent(dto::setEmail);
        Optional.ofNullable(entity.getApproval()).ifPresent(dto::setApproval);
        Optional.ofNullable(entity.getStatus()).ifPresent(dto::setStatus);
        dto.setMessage("Account registered, we'll email you after your account is validated");
        return dto;
    }





}
