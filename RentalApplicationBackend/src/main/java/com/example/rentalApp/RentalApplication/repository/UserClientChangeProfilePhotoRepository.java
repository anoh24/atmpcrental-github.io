package com.example.rentalApp.RentalApplication.repository;

import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserClientChangeProfilePhotoRepository extends JpaRepository<CustomerDetailsEntity, Integer> {
}
