package com.example.rentalApp.RentalApplication.controller;



import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientChangeProfilePhotoService;
import com.example.rentalApp.RentalApplication.service.UserClientUpdateProfileService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
@RestController
@RequestMapping("/apiUpdateUserClientProfile")
public class UserClientUpdateProfileController {

    private final UserClientUpdateProfileService userClientUpdateProfileService;
    private final UserClientChangeProfilePhotoService userClientChangeProfilePhotoService;

    public UserClientUpdateProfileController(UserClientUpdateProfileService userClientUpdateProfileService,
                                             UserClientChangeProfilePhotoService userClientChangeProfilePhotoService){
        this.userClientUpdateProfileService = userClientUpdateProfileService;
        this.userClientChangeProfilePhotoService = userClientChangeProfilePhotoService;
    }

    @PutMapping("/{customerid}")
    public ResponseEntity<UserClientUpdateProfileReponseDto>UpdateUserClientProfile(
            @PathVariable("customerid") Integer id,
            @Valid @RequestBody UserClientUpdateProfileDto dto){

        return new ResponseEntity<>(userClientUpdateProfileService.UpdateUserClientProfile(id, dto), HttpStatus.OK);

    }

    @PutMapping("/{customerid}/profile-photo")
    public ResponseEntity<UserClientChangeProfilePhotoResponseDto> updateProfile(
            @PathVariable("customerid") Integer id,
            @RequestParam("file") MultipartFile file) {

        UserClientChangeProfilePhotoResponseDto response = userClientChangeProfilePhotoService.updateProfile(id, file);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
