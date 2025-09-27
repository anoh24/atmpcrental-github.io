package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.entity.AdminAccountEntity;
import com.example.rentalApp.RentalApplication.mapper.BranchAdminAccountRegistrationMapper;
import com.example.rentalApp.RentalApplication.repository.BranchAdminAccountRegistrationRepository;
import com.example.rentalApp.RentalApplication.service.BranchAdminAccountRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class BranchAdminAccountServiceImplementation implements BranchAdminAccountRegistrationService {

    private final BranchAdminAccountRegistrationRepository branchAdminAccountRegistrationRepository;
    private final BranchAdminAccountRegistrationMapper branchAdminAccountRegistrationMapper;
    private  final PasswordEncoder  passwordEncoder;

    @Autowired
    public BranchAdminAccountServiceImplementation(
            BranchAdminAccountRegistrationMapper branchAdminAccountRegistrationMapper,
            BranchAdminAccountRegistrationRepository branchAdminAccountRegistrationRepository,
            PasswordEncoder passwordEncoder
    ){
        this.branchAdminAccountRegistrationRepository = branchAdminAccountRegistrationRepository;
        this.branchAdminAccountRegistrationMapper = branchAdminAccountRegistrationMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public BranchAdminAccountRegistrationResponseDto saveAdminAccount(BranchAdminAccountRegistrationDto dto){
        AdminAccountEntity entity = branchAdminAccountRegistrationMapper.toEntity(dto);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        AdminAccountEntity saved = branchAdminAccountRegistrationRepository.save(entity);
        BranchAdminAccountRegistrationResponseDto responseDto = branchAdminAccountRegistrationMapper.toDto(saved);
        responseDto.setMessage("Account successfully registered!");

        return responseDto;
    }


}
