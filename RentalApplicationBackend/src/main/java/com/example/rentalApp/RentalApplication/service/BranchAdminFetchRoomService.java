package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;


import java.util.List;
import java.util.Optional;

public interface BranchAdminFetchRoomService {
    List<String> getAllRoomsAvailable();
    List<String> getSpecificRoom(Integer customerid);
    List<String> getOccupantsList(Integer roomid);
}
