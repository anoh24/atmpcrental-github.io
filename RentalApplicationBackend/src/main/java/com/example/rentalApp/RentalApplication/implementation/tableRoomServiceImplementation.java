package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.repository.tableRoomRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.rentalApp.RentalApplication.service.tableRoomService;
import java.util.List;

@Service
public class tableRoomServiceImplementation implements tableRoomService {

    private final tableRoomRepository tableRoomRepository;

    public tableRoomServiceImplementation(tableRoomRepository tableRoomRepository){
        this.tableRoomRepository = tableRoomRepository;
    }
    @Override
    public List<String> getAllRoomsAvailable(){
        return tableRoomRepository.getAllRooms();
    }
    @Override
    public  List<String> getSpecificRoom(Integer customerid){
        return tableRoomRepository.getAssignedRoom(customerid);
    }
}
