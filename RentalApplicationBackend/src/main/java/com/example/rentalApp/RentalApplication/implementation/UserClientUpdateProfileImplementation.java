package com.example.rentalApp.RentalApplication.implementation;


import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import com.example.rentalApp.RentalApplication.mapper.UserClientUpdateProfileMapper;
import com.example.rentalApp.RentalApplication.repository.UserClientUpdateProfileRepository;
import com.example.rentalApp.RentalApplication.service.UserClientUpdateProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class UserClientUpdateProfileImplementation implements UserClientUpdateProfileService {

    private final UserClientUpdateProfileRepository userClientUpdateProfileRepository;
    private final UserClientUpdateProfileMapper userClientUpdateProfileMapper;


    @Autowired
    public UserClientUpdateProfileImplementation(
            UserClientUpdateProfileRepository userClientUpdateProfileRepository,
            UserClientUpdateProfileMapper userClientUpdateProfileMapper

    ){
        this.userClientUpdateProfileRepository = userClientUpdateProfileRepository;
        this.userClientUpdateProfileMapper = userClientUpdateProfileMapper;

    }

    @Override
    public UserClientUpdateProfileReponseDto UpdateUserClientProfile(Integer id, UserClientUpdateProfileDto dto){
        CustomerDetailsEntity existing = userClientUpdateProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
        userClientUpdateProfileMapper.UpdateEntityFromDto(dto, existing);
        CustomerDetailsEntity updated = userClientUpdateProfileRepository.save(existing);
        UserClientUpdateProfileReponseDto responseDto = userClientUpdateProfileMapper.toDto(updated);
        responseDto.setMessage("Your profile information has been saved successfully.");
        return userClientUpdateProfileMapper.toDto(updated);
    }

}
