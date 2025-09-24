package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateResponseDto;

public interface BranchAdminRoomUpdateService {
    BranchAdminRoomUpdateResponseDto updateRoom(Integer roomid, BranchAdminRoomUpdateDto dto);
}
