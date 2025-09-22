package com.example.rentalApp.RentalApplication.controller;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.service.BranchAdminFetchRoomService;
import com.example.rentalApp.RentalApplication.service.BranchAdminRoomRegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/apiBranchAdminRoomList")
public class BranchAdminRoomRegistrationController {
     private final BranchAdminRoomRegistrationService branchAdminRoomRegistrationService;
    private final BranchAdminFetchRoomService branchAdminFetchRoomService;
     public BranchAdminRoomRegistrationController(
             BranchAdminRoomRegistrationService branchAdminRoomRegistrationService,
             BranchAdminFetchRoomService branchAdminFetchRoomService
     ){
         this.branchAdminRoomRegistrationService = branchAdminRoomRegistrationService;
         this.branchAdminFetchRoomService = branchAdminFetchRoomService;
     }
     @PostMapping("/room")
    public ResponseEntity<BranchAdminRoomRegistrationResponseDto> AddRoom(@Valid @RequestBody BranchAdminRoomRegistrationDto branchAdminRoomRegistrationDto){
         BranchAdminRoomRegistrationResponseDto AddRoom = branchAdminRoomRegistrationService.AddRoom(branchAdminRoomRegistrationDto);
         return new ResponseEntity<>(AddRoom, HttpStatus.CREATED);
     }

     @GetMapping("/roomlist/{roomid}")
    public ResponseEntity<BranchAdminRoomRegistrationResponseDto> getRoomId(@PathVariable Integer roomid){
         return branchAdminRoomRegistrationService.getRoomId(roomid)
                 .map(ResponseEntity::ok)
                 .orElse(ResponseEntity.notFound().build());
     }

     @GetMapping("/roomlist")
    public ResponseEntity<List<BranchAdminRoomRegistrationResponseDto>> getAllRoom(){
         List<BranchAdminRoomRegistrationResponseDto>getAllRoomList = branchAdminRoomRegistrationService.getAllRoom();
         return ResponseEntity.ok(getAllRoomList);
     }

    @GetMapping("/occupantsRoomList/{roomid}")
    public ResponseEntity<List<String>>getOccupantsList(@PathVariable Integer roomid) {
        List<String> occupantList = branchAdminFetchRoomService.getOccupantsList(roomid);
        return ResponseEntity.ok(occupantList);
    }





}
