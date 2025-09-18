package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;

import java.util.List;
import java.util.Optional;

public interface BranchAdminRoomRegistrationService {

    BranchAdminRoomRegistrationResponseDto AddRoom(BranchAdminRoomRegistrationDto dto);
    Optional<BranchAdminRoomRegistrationResponseDto>getRoomId(Integer roomid);
    List<BranchAdminRoomRegistrationResponseDto>getAllRoom();




}
