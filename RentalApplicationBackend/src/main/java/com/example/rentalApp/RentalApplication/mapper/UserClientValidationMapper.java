package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientValidationEntity;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;

import java.util.Optional;

@Component
public class UserClientValidationMapper {
    public void updateEntityFromDto(UserClientValidationDto dto, UserClientValidationEntity entity) {
        Optional.ofNullable(dto.getApproval()).ifPresent(entity::setApproval);
        Optional.ofNullable(dto.getStatus()).ifPresent(entity::setStatus);
    }

    public UserClientValidationResponseDto toDto(UserClientValidationEntity entity) {
        UserClientValidationResponseDto dto = new UserClientValidationResponseDto();
        Optional.ofNullable(entity.getApproval()).ifPresent(dto::setApproval);
        Optional.ofNullable(entity.getStatus()).ifPresent(dto::setStatus);
        dto.setMessage("Account successfully validated...");
        return dto;
    }


}
