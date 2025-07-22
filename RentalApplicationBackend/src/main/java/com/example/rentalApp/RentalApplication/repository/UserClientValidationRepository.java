package com.example.rentalApp.RentalApplication.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.rentalApp.RentalApplication.entity.UserClientValidationEntity;
public interface UserClientValidationRepository extends JpaRepository<UserClientValidationEntity, Integer>  {

}
