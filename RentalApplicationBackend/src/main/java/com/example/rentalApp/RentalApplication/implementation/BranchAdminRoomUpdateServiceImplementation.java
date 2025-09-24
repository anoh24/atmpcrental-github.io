package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateResponseDto;
import com.example.rentalApp.RentalApplication.entity.RoomEntity;
import com.example.rentalApp.RentalApplication.mapper.BranchAdminRoomUpdateMapper;
import com.example.rentalApp.RentalApplication.repository.BranchAdminFetchRoomUpdateRepository;

import com.example.rentalApp.RentalApplication.service.BranchAdminRoomUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BranchAdminRoomUpdateServiceImplementation implements BranchAdminRoomUpdateService {

    private  final BranchAdminRoomUpdateMapper branchAdminRoomUpdateMapper;
    private final BranchAdminFetchRoomUpdateRepository branchAdminFetchRoomUpdateRepository;

    @Autowired
    public BranchAdminRoomUpdateServiceImplementation(
            BranchAdminRoomUpdateMapper branchAdminRoomUpdateMapper,
            BranchAdminFetchRoomUpdateRepository branchAdminFetchRoomUpdateRepository
            ){
        this.branchAdminFetchRoomUpdateRepository = branchAdminFetchRoomUpdateRepository;
        this.branchAdminRoomUpdateMapper = branchAdminRoomUpdateMapper;
    }

    @Override
    public BranchAdminRoomUpdateResponseDto updateRoom(Integer roomid, BranchAdminRoomUpdateDto dto){
        RoomEntity existing = branchAdminFetchRoomUpdateRepository.findById(roomid)
                .orElseThrow(() -> new RuntimeException("User Not Found by id" + roomid));
                branchAdminRoomUpdateMapper.UpdateEntityFromDto(dto, existing);
        RoomEntity updated = branchAdminFetchRoomUpdateRepository.save(existing);
        BranchAdminRoomUpdateResponseDto  responseDto = branchAdminRoomUpdateMapper.toDto(updated);
        responseDto.setMessage("You have successfully updated Room.");
        return branchAdminRoomUpdateMapper.toDto(updated);
    }
}
