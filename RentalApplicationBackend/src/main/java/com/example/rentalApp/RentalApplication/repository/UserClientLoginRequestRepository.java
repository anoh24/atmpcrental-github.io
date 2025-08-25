package com.example.rentalApp.RentalApplication.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import java.util.Optional;
public interface UserClientLoginRequestRepository extends JpaRepository<UserClientRegistrationForValidationEntity , Integer> {
    Optional<UserClientRegistrationForValidationEntity> findByEmail(String email);
}
