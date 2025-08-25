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
        responseDto.setToken(token);
        Optional.ofNullable(entity.getEmail()).ifPresent(responseDto::setEmail);

        return responseDto;
    }
}
