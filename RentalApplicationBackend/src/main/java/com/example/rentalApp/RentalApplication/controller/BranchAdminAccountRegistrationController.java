package com.example.rentalApp.RentalApplication.controller;

import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminAccountRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.service.BranchAdminAccountRegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apiBranchAdminAccountRegistration")
public class BranchAdminAccountRegistrationController {

    private final BranchAdminAccountRegistrationService branchAdminAccountRegistrationService;

    public BranchAdminAccountRegistrationController(BranchAdminAccountRegistrationService branchAdminAccountRegistrationService){
        this.branchAdminAccountRegistrationService = branchAdminAccountRegistrationService;
    }

    @PostMapping("/AdminAccount")
    public ResponseEntity<BranchAdminAccountRegistrationResponseDto> saveAdminAccount(@Valid @RequestBody BranchAdminAccountRegistrationDto branchAdminAccountRegistrationDto){
        BranchAdminAccountRegistrationResponseDto  saveAdminAccount = branchAdminAccountRegistrationService.saveAdminAccount(branchAdminAccountRegistrationDto);
        return new ResponseEntity<>(saveAdminAccount, HttpStatus.CREATED);
    }

}
