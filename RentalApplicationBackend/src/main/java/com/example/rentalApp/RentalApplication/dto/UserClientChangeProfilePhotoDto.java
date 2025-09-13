package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserClientChangeProfilePhotoDto {
   private Integer customerid;
   private String profilephoto;
}
