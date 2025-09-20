package com.example.rentalApp.RentalApplication.dto;


import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BranchAdminRoomRegistrationDto {


    @NotBlank(message = "Room number is required")
    @Digits(integer = 10, fraction = 0, message = "Must be a valid number with up to 10 digits")
    @Positive(message = "Must be positive number")
    private String roomnumber;

    @NotBlank(message = "Capacity is required")
    @Digits(integer = 10, fraction = 0, message = "Must be a valid number with up to 10 digits")
    @Positive(message = "Must be number")
    private String capacity;

    @NotBlank(message = "Monthly rent is required")
    @Digits(integer = 10, fraction = 0, message = "Must be a valid number with up to 10 digits")
    @Positive(message = "Must be number")
    private String monthlyrent;










}
