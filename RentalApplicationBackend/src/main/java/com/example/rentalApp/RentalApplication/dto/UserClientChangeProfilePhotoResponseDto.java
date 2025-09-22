package com.example.rentalApp.RentalApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserClientChangeProfilePhotoResponseDto {
    private Integer customerid;
    private String profilephoto;
    private String message;
}
