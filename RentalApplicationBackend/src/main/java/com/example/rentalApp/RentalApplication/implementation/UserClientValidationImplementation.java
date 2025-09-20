package com.example.rentalApp.RentalApplication.implementation;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.repository.UserClientValidationRepository;
import com.example.rentalApp.RentalApplication.mapper.UserClientValidationMapper;
import com.example.rentalApp.RentalApplication.service.UserClientValidationService;

@Service
public class UserClientValidationImplementation implements UserClientValidationService {
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
    public UserClientValidationResponseDto ValidateUserAccount(Integer id, UserClientValidationDto dto){
        CustomerDetailsEntity existing = userclientvalidationrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
        userclientvalidationmapper.updateEntityFromDto(dto, existing);
        CustomerDetailsEntity updated = userclientvalidationrepository.save(existing);
        UserClientValidationResponseDto responseDto = userclientvalidationmapper.toDto(updated);
        responseDto.setMessage("Account successfully validated...");
        return userclientvalidationmapper.toDto(updated);
    }


}
