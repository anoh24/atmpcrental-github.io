package com.example.rentalApp.RentalApplication.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.rentalApp.RentalApplication.service.UserClientLoginRequestService;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientLoginRequestDto;
@RestController
@RequestMapping("/api")
public class UserClientLoginRequestController{
    private final  UserClientLoginRequestService userClientLoginRequestService;
    public UserClientLoginRequestController(UserClientLoginRequestService userClientLoginRequestService){
        this.userClientLoginRequestService = userClientLoginRequestService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserClientLoginRequestResponseDto> login(@RequestBody UserClientLoginRequestDto userClientLoginRequestDto) {
        UserClientLoginRequestResponseDto response = userClientLoginRequestService.login(userClientLoginRequestDto);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/{customerid}")
    public ResponseEntity<UserClientLoginRequestResponseDto> getUserById(@PathVariable Integer customerid){
        return userClientLoginRequestService.getUserById(customerid)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
