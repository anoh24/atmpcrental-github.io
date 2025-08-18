package com.example.rentalApp.RentalApplication.service.implementation;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.UserClientValidationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.repository.UserClientValidationRepository;
import com.example.rentalApp.RentalApplication.mapper.UserClientValidationMapper;
import com.example.rentalApp.RentalApplication.service.UserClientValidationService;

@Service
public abstract class UserClientValidationImplementation implements UserClientValidationService {
    private final UserClientValidationRepository userclientvalidationrepository;
    private final UserClientValidationMapper userclientvalidationmapper;

    @Autowired
    public UserClientValidationImplementation(
            UserClientValidationRepository userclientvalidationrepository,
            UserClientValidationMapper userclientvalidationmapper
    ){
        this.userclientvalidationrepository = userclientvalidationrepository;
        this.userclientvalidationmapper = userclientvalidationmapper;
    }
    @Override
    public UserClientValidationResponseDto ValidateUserAccount(UserClientValidationDto dto){
        UserClientValidationEntity  entity = userclientvalidationmapper.toEntity(dto);
        UserClientValidationEntity saved = userclientvalidationrepository.save(entity);
        return userclientvalidationmapper.toDto(saved);
    }


}
