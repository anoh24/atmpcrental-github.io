package com.example.rentalApp.RentalApplication.mapper;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import java.util.Optional;
@Component
public class UserClientLoginRequestMapper {

    public UserClientLoginRequestResponseDto toUserClientLoginRequestResponseDto(UserClientRegistrationForValidationEntity entity, String token){
        UserClientLoginRequestResponseDto responseDto = new UserClientLoginRequestResponseDto();
        Optional.ofNullable(entity.getCustomerid()).ifPresent(responseDto::setCustomerid);
        Optional.ofNullable(entity.getFullname()).ifPresent(responseDto::setFullname);
        Optional.ofNullable(entity.getGender()).ifPresent(responseDto::setGender);
        Optional.ofNullable(entity.getBirthdate()).ifPresent(responseDto::setBirthdate);
        Optional.ofNullable(entity.getPhonumber()).ifPresent(responseDto::setPhonumber);
        Optional.ofNullable(entity.getOccupation()).ifPresent(responseDto::setOccupation);
        Optional.ofNullable(entity.getAddress()).ifPresent(responseDto::setAddress);
        Optional.ofNullable(entity.getContactname()).ifPresent(responseDto::setContactname);
        Optional.ofNullable(entity.getContactnumber()).ifPresent(responseDto::setContactnumber);
        Optional.ofNullable(entity.getRelationshipcontact()).ifPresent(responseDto::setRelationshipcontact);
        responseDto.setToken(token);
        Optional.ofNullable(entity.getEmail()).ifPresent(responseDto::setEmail);

        return responseDto;
    }
    public UserClientLoginRequestResponseDto toUserClientLoginRequestResponseDto(UserClientRegistrationForValidationEntity entity){
        return toUserClientLoginRequestResponseDto(entity,null);
    }

}
