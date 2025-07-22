package com.example.rentalApp.RentalApplication.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.rentalApp.RentalApplication.dto.UserClientValidationDto;
import com.example.rentalApp.RentalApplication.dto.UserClientValidationResponseDto;
import com.example.rentalApp.RentalApplication.service.UserClientValidationService;
import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost/5173")
@RestController
@RequestMapping("/api")
public class UserClientValidationController {
}
