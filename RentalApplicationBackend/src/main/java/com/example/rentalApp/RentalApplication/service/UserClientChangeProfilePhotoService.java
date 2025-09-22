package com.example.rentalApp.RentalApplication.service;

import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;

import org.springframework.web.multipart.MultipartFile;



public interface UserClientChangeProfilePhotoService {
   UserClientChangeProfilePhotoResponseDto updateProfile(Integer id, MultipartFile file);

}
