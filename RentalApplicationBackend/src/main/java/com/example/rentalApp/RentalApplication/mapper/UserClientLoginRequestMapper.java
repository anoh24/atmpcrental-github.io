package com.example.rentalApp.RentalApplication.mapper;
import org.springframework.stereotype.Component;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import java.util.Optional;
@Component
public class UserClientLoginRequestMapper {

    public UserClientLoginRequestResponseDto toUserClientLoginRequestResponseDto(CustomerDetailsEntity entity, String token){
        UserClientLoginRequestResponseDto responseDto = new UserClientLoginRequestResponseDto();
     Optional.ofNullable(entity.getProfilephoto()).ifPresent(responseDto::setProfilephoto);
        Optional.ofNullable(entity.getCustomerid()).ifPresent(responseDto::setCustomerid);
        Optional.ofNullable(entity.getFullname()).ifPresent(responseDto::setFullname);
        Optional.ofNullable(entity.getGender()).ifPresent(responseDto::setGender);
        Optional.ofNullable(entity.getBirthdate()).ifPresent(responseDto::setBirthdate);
        Optional.ofNullable(entity.getPhonenumber()).ifPresent(responseDto::setPhonenumber);
        Optional.ofNullable(entity.getOccupation()).ifPresent(responseDto::setOccupation);
        Optional.ofNullable(entity.getAddress()).ifPresent(responseDto::setAddress);
        Optional.ofNullable(entity.getContactname()).ifPresent(responseDto::setContactname);
        Optional.ofNullable(entity.getContactnumber()).ifPresent(responseDto::setContactnumber);
        Optional.ofNullable(entity.getRelationshipcontact()).ifPresent(responseDto::setRelationshipcontact);
        responseDto.setToken(token);
        Optional.ofNullable(entity.getEmail()).ifPresent(responseDto::setEmail);

        return responseDto;
    }
    public UserClientLoginRequestResponseDto toUserClientLoginRequestResponseDto(CustomerDetailsEntity entity){
        return toUserClientLoginRequestResponseDto(entity,null);
    }

}
