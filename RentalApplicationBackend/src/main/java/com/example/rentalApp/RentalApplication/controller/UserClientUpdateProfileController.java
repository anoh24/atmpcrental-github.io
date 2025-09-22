package com.example.rentalApp.RentalApplication.controller;



import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileDto;
import com.example.rentalApp.RentalApplication.dto.UserClientUpdateProfileReponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientChangeProfilePhotoService;
import com.example.rentalApp.RentalApplication.service.UserClientUpdateProfileService;
import com.example.rentalApp.RentalApplication.service.BranchAdminFetchRoomService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/apiUpdateUserClientProfile")
public class UserClientUpdateProfileController {

    private final UserClientUpdateProfileService userClientUpdateProfileService;
    private final UserClientChangeProfilePhotoService userClientChangeProfilePhotoService;
    private final BranchAdminFetchRoomService tableRoomService;
    public UserClientUpdateProfileController(UserClientUpdateProfileService userClientUpdateProfileService,
                                             UserClientChangeProfilePhotoService userClientChangeProfilePhotoService,
                                             BranchAdminFetchRoomService tableRoomService){
        this.userClientUpdateProfileService = userClientUpdateProfileService;
        this.userClientChangeProfilePhotoService = userClientChangeProfilePhotoService;
        this.tableRoomService = tableRoomService;
    }
    @GetMapping("/roomsavailable")
    public ResponseEntity<List<String>> getAllRoomsAvailable(){
       List<String> rooms = tableRoomService.getAllRoomsAvailable();
       return ResponseEntity.ok(rooms);
    }
    @GetMapping("/getAssignedRoom/{customerid}")
    public ResponseEntity<List<String>> getSpecificRoom(@PathVariable Integer customerid){
        List<String> room = tableRoomService.getSpecificRoom(customerid);
        return ResponseEntity.ok(room);
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
