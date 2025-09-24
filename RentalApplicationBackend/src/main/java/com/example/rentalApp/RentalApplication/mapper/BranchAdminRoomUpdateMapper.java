package com.example.rentalApp.RentalApplication.mapper;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomUpdateResponseDto;
import com.example.rentalApp.RentalApplication.entity.RoomEntity;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BranchAdminRoomUpdateMapper {

    public void UpdateEntityFromDto(BranchAdminRoomUpdateDto dto, RoomEntity entity){
        Optional.ofNullable(dto.getRoomnumber()).ifPresent(entity::setRoomnumber);
        Optional.ofNullable(dto.getCapacity()).ifPresent(entity::setCapacity);
        Optional.ofNullable(dto.getMonthlyrent()).ifPresent(entity::setMonthlyrent);
    }

    public BranchAdminRoomUpdateResponseDto toDto(RoomEntity entity){
        BranchAdminRoomUpdateResponseDto dto = new BranchAdminRoomUpdateResponseDto();
        Optional.ofNullable(entity.getRoomid()).ifPresent(dto::setRoomid);
        Optional.ofNullable(entity.getRoomnumber()).ifPresent(dto::setRoomnumber);
        Optional.ofNullable(entity.getCapacity()).ifPresent(dto::setCapacity);
        Optional.ofNullable(entity.getMonthlyrent()).ifPresent(dto::setMonthlyrent);

        return dto;
    }


}
