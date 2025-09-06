package com.example.rentalApp.RentalApplication.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientRegistrationForValidationService;
import jakarta.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/apiUserClientRegistration")
public class UserClientRegistrationForValidationController {
    private final UserClientRegistrationForValidationService userClientRegistrationForValidationService;

    public UserClientRegistrationForValidationController(UserClientRegistrationForValidationService userClientRegistrationForValidationService){
        this.userClientRegistrationForValidationService = userClientRegistrationForValidationService;
    }

     @PostMapping("/userclients")
     public ResponseEntity<UserClientRegistrationForValidationResponseDto> saveClientUser(@Valid @RequestBody UserClientRegistrationForValidationDto userClientRegistrationForValidationDto){
         UserClientRegistrationForValidationResponseDto savedClientUser = userClientRegistrationForValidationService.saveClientUser(userClientRegistrationForValidationDto);
         return new ResponseEntity<>(savedClientUser, HttpStatus.CREATED);
     }

     @GetMapping("/userclientslist/{customerid}")
     public ResponseEntity<UserClientRegistrationForValidationResponseDto> getUserById(@PathVariable Integer customerid){
         return userClientRegistrationForValidationService.getUserById(customerid)
             .map(ResponseEntity::ok)
             .orElse(ResponseEntity.notFound().build());
     }

     @GetMapping("/userclientslist")
     public ResponseEntity<List<UserClientRegistrationForValidationResponseDto>> getAllClientUser(){
         List<UserClientRegistrationForValidationResponseDto> userClient = userClientRegistrationForValidationService.getAllClientUser();
         return ResponseEntity.ok(userClient);
     }

}
