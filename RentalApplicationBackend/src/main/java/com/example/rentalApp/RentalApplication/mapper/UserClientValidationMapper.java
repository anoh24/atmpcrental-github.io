package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientValidationEntity;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
@Component
public class UserClientValidationMapper {
    //client user validation
    public UserClientValidationEntity toEntity(UserClientValidationDto dto){
        if(dto == null) return null;
        UserClientValidationEntity entity = new UserClientValidationEntity();
        entity.setApproval(dto.getApproval());
        return entity;
    }
    public UserClientValidationResponseDto toDto(UserClientValidationEntity entity){
        if(entity == null) return null;
        UserClientValidationResponseDto dto = new UserClientValidationResponseDto();
        dto.setApproval(entity.getApproval());
        dto.setMessage("Account successfully validating...");
        return dto;
    }


}
