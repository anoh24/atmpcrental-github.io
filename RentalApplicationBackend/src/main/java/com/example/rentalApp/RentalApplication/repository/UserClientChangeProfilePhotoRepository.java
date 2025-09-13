package com.example.rentalApp.RentalApplication.repository;

import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserClientChangeProfilePhotoRepository extends JpaRepository<UserClientRegistrationForValidationEntity, Integer> {
}
