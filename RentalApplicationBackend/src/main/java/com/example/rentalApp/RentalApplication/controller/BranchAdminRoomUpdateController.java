package com.example.rentalApp.RentalApplication.controller;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateResponseDto;
import com.example.rentalApp.RentalApplication.service.BranchAdminRoomUpdateService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
@RestController
@RequestMapping("/apiUpdateRoom")
public class BranchAdminRoomUpdateController {

    private final BranchAdminRoomUpdateService branchAdminRoomUpdateService;

    public BranchAdminRoomUpdateController (BranchAdminRoomUpdateService branchAdminRoomUpdateService){
        this.branchAdminRoomUpdateService = branchAdminRoomUpdateService;
    }

    @PutMapping("/{roomid}")
    public ResponseEntity<BranchAdminRoomUpdateResponseDto> updateRoom(
            @PathVariable("roomid") Integer roomid,
            @Valid @RequestBody BranchAdminRoomUpdateDto dto
            ){
        return  new ResponseEntity<>(branchAdminRoomUpdateService.updateRoom(roomid, dto), HttpStatus.OK);
    }

}
