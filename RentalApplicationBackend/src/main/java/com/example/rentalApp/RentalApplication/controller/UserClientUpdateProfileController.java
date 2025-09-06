package com.example.rentalApp.RentalApplication.controller;


import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientUpdateProfileService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/apiUpdateUserClientProfile")
public class UserClientUpdateProfileController {

    private final UserClientUpdateProfileService userClientUpdateProfileService;

    public UserClientUpdateProfileController(UserClientUpdateProfileService userClientUpdateProfileService){
        this.userClientUpdateProfileService = userClientUpdateProfileService;
    }

    @PutMapping("/{customerid}")
    public ResponseEntity<UserClientUpdateProfileReponseDto>UpdateUserClientProfile(
            @PathVariable("customerid") Integer id,
            @Valid @RequestBody UserClientUpdateProfileDto dto){

        return new ResponseEntity<>(userClientUpdateProfileService.UpdateUserClientProfile(id, dto), HttpStatus.OK);

    }

}
