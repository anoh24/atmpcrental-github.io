package com.example.rentalApp.RentalApplication.controller;
import org.springframework.web.bind.annotation.*;
import com.example.rentalApp.RentalApplication.service.UserClientLoginRequestService;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
@RestController
@RequestMapping("/api/authentication")
public class UserClientLoginRequestController{
    private final  UserClientLoginRequestService userClientLoginRequestService;
    public UserClientLoginRequestController(UserClientLoginRequestService userClientLoginRequestService){
        this.userClientLoginRequestService = userClientLoginRequestService;
    }

    @PostMapping("/login")
    public UserClientLoginRequestResponseDto login(@RequestBody UserClientLoginRequestDto userClientLoginRequestDto ){
        return userClientLoginRequestService.login(userClientLoginRequestDto);
    }
}
