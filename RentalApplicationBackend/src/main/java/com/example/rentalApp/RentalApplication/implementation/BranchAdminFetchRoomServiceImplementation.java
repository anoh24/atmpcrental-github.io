package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.dto.UserClientRegistrationForValidationResponseDto;
import com.example.rentalApp.RentalApplication.repository.BranchAdminFetchRoomRepository;
import org.springframework.stereotype.Service;
import com.example.rentalApp.RentalApplication.service.BranchAdminFetchRoomService;
import java.util.List;
import java.util.Optional;

@Service
public class BranchAdminFetchRoomServiceImplementation implements BranchAdminFetchRoomService {

    private final BranchAdminFetchRoomRepository branchAdminFetchRoomRepository;

    public BranchAdminFetchRoomServiceImplementation(BranchAdminFetchRoomRepository tableRoomRepository){
        this.branchAdminFetchRoomRepository = tableRoomRepository;
    }
    @Override
    public List<String> getAllRoomsAvailable(){

        return branchAdminFetchRoomRepository.getAllRooms();
    }
    @Override
    public  List<String> getSpecificRoom(Integer customerid){

        return branchAdminFetchRoomRepository.getAssignedRoom(customerid);
    }
    @Override
    public List<String> getOccupantsList(Integer roomid){
        return branchAdminFetchRoomRepository.getOccupants(roomid);
    }
}
