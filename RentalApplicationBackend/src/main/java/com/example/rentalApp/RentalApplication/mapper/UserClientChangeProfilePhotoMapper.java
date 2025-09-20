package com.example.rentalApp.RentalApplication.mapper;

import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import org.springframework.stereotype.Component;


@Component
public class UserClientChangeProfilePhotoMapper {

    public UserClientChangeProfilePhotoResponseDto toDto(CustomerDetailsEntity entity) {
        UserClientChangeProfilePhotoResponseDto dto = new UserClientChangeProfilePhotoResponseDto();
        dto.setProfilephoto("/userClientProfilePhoto/" + entity.getProfilephoto());
        return dto;
    }
}
