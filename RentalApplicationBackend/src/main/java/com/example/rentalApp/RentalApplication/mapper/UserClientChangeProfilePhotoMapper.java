package com.example.rentalApp.RentalApplication.mapper;

import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoDto;
import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import org.springframework.stereotype.Component;


@Component
public class UserClientChangeProfilePhotoMapper {

    public UserClientChangeProfilePhotoResponseDto toDto(UserClientRegistrationForValidationEntity entity) {
        UserClientChangeProfilePhotoResponseDto dto = new UserClientChangeProfilePhotoResponseDto();
        dto.setProfilephoto("/userClientProfilePhoto/" + entity.getProfilephoto());
        return dto;
    }
}
