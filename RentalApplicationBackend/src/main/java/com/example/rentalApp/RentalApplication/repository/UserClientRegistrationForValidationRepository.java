package com.example.rentalApp.RentalApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;

@Repository
public interface UserClientRegistrationForValidationRepository extends JpaRepository<CustomerDetailsEntity, Integer>{
    
}
