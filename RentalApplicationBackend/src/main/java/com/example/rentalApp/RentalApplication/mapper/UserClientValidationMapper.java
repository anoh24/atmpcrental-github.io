package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientValidationEntity;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
@Component
public class UserClientValidationMapper {
    public void updateEntityFromDto(UserClientValidationDto dto, UserClientValidationEntity entity) {
        if (dto.getApproval() != null) {
            entity.setApproval(dto.getApproval());
        }
    }

    public UserClientValidationResponseDto toDto(UserClientValidationEntity entity) {
        if (entity == null) return null;
        UserClientValidationResponseDto dto = new UserClientValidationResponseDto();
        dto.setApproval(entity.getApproval());
        dto.setMessage("Account successfully validated...");
        return dto;
    }

}
