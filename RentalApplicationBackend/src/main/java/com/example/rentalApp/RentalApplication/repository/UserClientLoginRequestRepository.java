package com.example.rentalApp.RentalApplication.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.rentalApp.RentalApplication.entity.CustomerDetailsEntity;
import java.util.Optional;
public interface UserClientLoginRequestRepository extends JpaRepository<CustomerDetailsEntity, Integer> {
    Optional<CustomerDetailsEntity> findByEmail(String email);

}
