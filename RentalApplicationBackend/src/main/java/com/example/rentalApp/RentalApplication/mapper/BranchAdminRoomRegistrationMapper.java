package com.example.rentalApp.RentalApplication.mapper;


import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.entity.BranchAdminRoomRegistrationEntity;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BranchAdminRoomRegistrationMapper {

    public BranchAdminRoomRegistrationEntity toEntity(BranchAdminRoomRegistrationDto dto){
        BranchAdminRoomRegistrationEntity entity = new BranchAdminRoomRegistrationEntity();
        Optional.ofNullable(dto.getRoomnumber()).ifPresent(entity::setRoomnumber);
        Optional.ofNullable(dto.getCapacity()).ifPresent(entity::setCapacity);
        Optional.ofNullable(dto.getMonthlyrent()).ifPresent(entity::setMonthlyrent);

        return entity;
    }

    public BranchAdminRoomRegistrationResponseDto toDto(BranchAdminRoomRegistrationEntity entity){
        BranchAdminRoomRegistrationResponseDto dto = new BranchAdminRoomRegistrationResponseDto();
        Optional.ofNullable(entity.getRoomid()).ifPresent(dto::setRoomid);
        Optional.ofNullable(entity.getRoomnumber()).ifPresent(dto::setRoomnumber);
        Optional.ofNullable(entity.getCapacity()).ifPresent(dto::setCapacity);
        Optional.ofNullable(entity.getMonthlyrent()).ifPresent(dto::setMonthlyrent);

        return dto;

    }





}
