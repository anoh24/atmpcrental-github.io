package com.example.rentalApp.RentalApplication.mapper;
import org.springframework.stereotype.Component;

import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import java.util.Optional;


@Component
public class UserClientRegistrationForValidationMapper {
    //Client user registration
    public CustomerDetailsEntity toEntity(UserClientRegistrationForValidationDto dto) {
        CustomerDetailsEntity entity = new CustomerDetailsEntity();
        Optional.ofNullable(dto.getEmail()).ifPresent(entity::setEmail);
        Optional.ofNullable(dto.getPassword()).ifPresent(entity::setPassword);
        entity.setApproval("Invalidated");
        entity.setStatus("In Active");
        Optional.ofNullable(dto.getBranch()).ifPresent(entity::setBranch);
        return entity;
    }

    public UserClientRegistrationForValidationResponseDto toDto(CustomerDetailsEntity entity) {
        UserClientRegistrationForValidationResponseDto dto = new UserClientRegistrationForValidationResponseDto();
        Optional.ofNullable(entity.getCustomerid()).ifPresent(dto::setCustomerid);
        Optional.ofNullable(entity.getEmail()).ifPresent(dto::setEmail);
        Optional.ofNullable(entity.getApproval()).ifPresent(dto::setApproval);
        Optional.ofNullable(entity.getStatus()).ifPresent(dto::setStatus);
        Optional.ofNullable(entity.getBranch()).ifPresent(dto::setBranch);
        Optional.ofNullable(entity.getFullname()).ifPresent(dto::setFullname);
        Optional.ofNullable(entity.getGender()).ifPresent(dto::setGender);
        Optional.ofNullable(entity.getBirthdate()).ifPresent(dto::setBirthdate);
       Optional.ofNullable(entity.getPhonenumber()).ifPresent(dto::setPhonenumber);
        Optional.ofNullable(entity.getOccupation()).ifPresent(dto::setOccupation);
        Optional.ofNullable(entity.getAddress()).ifPresent(dto::setAddress);
        Optional.ofNullable(entity.getContactname()).ifPresent(dto::setContactname);
        Optional.ofNullable(entity.getContactnumber()).ifPresent(dto::setContactnumber);
        Optional.ofNullable(entity.getRelationshipcontact()).ifPresent(dto::setRelationshipcontact);
        Optional.ofNullable(entity.getApproval()).ifPresent(dto::setApproval);
        Optional.ofNullable(entity.getStatus()).ifPresent(dto::setStatus);
        dto.setProfilephoto("/userClientProfilePhoto/" + entity.getProfilephoto());
    return dto;
    }





}
