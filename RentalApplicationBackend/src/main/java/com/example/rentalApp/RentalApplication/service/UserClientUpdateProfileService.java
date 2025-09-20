package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;

import java.util.List;


public interface UserClientUpdateProfileService {
    UserClientUpdateProfileReponseDto UpdateUserClientProfile(Integer id, UserClientUpdateProfileDto dto);

}
