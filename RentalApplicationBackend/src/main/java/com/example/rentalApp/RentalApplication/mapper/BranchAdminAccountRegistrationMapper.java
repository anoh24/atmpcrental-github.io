package com.example.rentalApp.RentalApplication.mapper;

import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.entity.AdminAccountEntity;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BranchAdminAccountRegistrationMapper {

    public AdminAccountEntity toEntity(BranchAdminAccountRegistrationDto dto){
        AdminAccountEntity entity = new AdminAccountEntity();
        Optional.ofNullable(dto.getEmail()).ifPresent(entity::setEmail);
        Optional.ofNullable(dto.getPassword()).ifPresent(entity::setPassword);
        Optional.ofNullable(dto.getBranch()).ifPresent(entity::setBranch);

        return entity;
    }
    public BranchAdminAccountRegistrationResponseDto toDto(AdminAccountEntity entity){
        BranchAdminAccountRegistrationResponseDto dto = new BranchAdminAccountRegistrationResponseDto();
        Optional.ofNullable(entity.getEmail()).ifPresent(dto::setEmail);
        Optional.ofNullable(entity.getPassword()).ifPresent(dto::setPassword);
        Optional.ofNullable(entity.getBranch()).ifPresent(dto::setBranch);

        return dto;
    }
}
