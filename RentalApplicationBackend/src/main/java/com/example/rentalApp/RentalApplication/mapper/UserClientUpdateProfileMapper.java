package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import java.util.Optional;

@Component
public class UserClientUpdateProfileMapper {


    public void UpdateEntityFromDto(UserClientUpdateProfileDto dto, UserClientRegistrationForValidationEntity entity) {
        Optional.ofNullable(dto.getFullname()).ifPresent(entity::setFullname);
        Optional.ofNullable(dto.getGender()).ifPresent(entity::setGender);
        Optional.ofNullable(dto.getBirthdate()).ifPresent(entity::setBirthdate);
        Optional.ofNullable(dto.getPhonenumber()).ifPresent(entity::setPhonenumber);
        Optional.ofNullable(dto.getOccupation()).ifPresent(entity::setOccupation);
        Optional.ofNullable(dto.getAddress()).ifPresent(entity::setAddress);
        Optional.ofNullable(dto.getContactname()).ifPresent(entity::setContactname);
        Optional.ofNullable(dto.getContactnumber()).ifPresent(entity::setContactnumber);
        Optional.ofNullable(dto.getRelationshipcontact()).ifPresent(entity::setRelationshipcontact);

    }

    public UserClientUpdateProfileReponseDto toDto(UserClientRegistrationForValidationEntity entity) {
        UserClientUpdateProfileReponseDto dto = new UserClientUpdateProfileReponseDto();
        Optional.ofNullable(entity.getFullname()).ifPresent(dto::setFullname);
        Optional.ofNullable(entity.getGender()).ifPresent(dto::setGender);
        Optional.ofNullable(entity.getBirthdate()).ifPresent(dto::setBirthdate);
        Optional.ofNullable(entity.getPhonenumber()).ifPresent(dto::setPhonenumber);
        Optional.ofNullable(entity.getOccupation()).ifPresent(dto::setOccupation);
        Optional.ofNullable(entity.getAddress()).ifPresent(dto::setAddress);
        Optional.ofNullable(entity.getContactname()).ifPresent(dto::setContactname);
        Optional.ofNullable(entity.getContactnumber()).ifPresent(dto::setContactnumber);
        Optional.ofNullable(entity.getRelationshipcontact()).ifPresent(dto::setRelationshipcontact);

        return dto;
    }
}
