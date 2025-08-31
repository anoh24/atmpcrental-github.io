package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;

import java.util.Optional;

@Component
public class UserClientValidationMapper {
    public void updateEntityFromDto(UserClientValidationDto dto, UserClientRegistrationForValidationEntity entity) {
        Optional.ofNullable(dto.getApproval()).ifPresent(approval ->{
            entity.setApproval(approval);
            if("Validated".equalsIgnoreCase(approval)){
                entity.setStatus("Active");
            }
            else{
                entity.setStatus("In Active");
            }
        });

    }

    public UserClientValidationResponseDto toDto(UserClientRegistrationForValidationEntity entity) {
        UserClientValidationResponseDto dto = new UserClientValidationResponseDto();
        Optional.ofNullable(entity.getApproval()).ifPresent(dto::setApproval);
        Optional.ofNullable(entity.getStatus()).ifPresent(dto::setStatus);

        return dto;
    }
}
