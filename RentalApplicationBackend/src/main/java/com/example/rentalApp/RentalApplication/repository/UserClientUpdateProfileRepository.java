package com.example.rentalApp.RentalApplication.repository;


import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserClientUpdateProfileRepository extends JpaRepository<CustomerDetailsEntity, Integer> {


}
