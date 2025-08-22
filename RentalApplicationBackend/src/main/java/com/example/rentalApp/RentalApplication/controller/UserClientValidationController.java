package com.example.rentalApp.RentalApplication.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientValidationService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserClientValidationController {
    private final UserClientValidationService userClientValidationService;

    public UserClientValidationController(UserClientValidationService userClientValidationService)
    {
        this.userClientValidationService = userClientValidationService;
    }
    @PutMapping("/clients/{customerid}")
    public ResponseEntity<UserClientValidationResponseDto>ValidateUserAccount(
            @PathVariable("customerid") Integer id,
            @Valid @RequestBody UserClientValidationDto dto){
        return new ResponseEntity<>(userClientValidationService.ValidateUserAccount(id,dto), HttpStatus.OK);
    }

}
