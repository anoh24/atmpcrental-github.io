package com.example.rentalApp.RentalApplication.service;

import java.util.List;

public interface tableRoomService {
    List<String> getAllRoomsAvailable();
    List<String> getSpecificRoom(Integer customerid);
}
