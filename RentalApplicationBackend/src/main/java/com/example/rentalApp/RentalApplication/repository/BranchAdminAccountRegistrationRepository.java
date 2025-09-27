package com.example.rentalApp.RentalApplication.repository;

import com.example.rentalApp.RentalApplication.entity.AdminAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BranchAdminAccountRegistrationRepository extends JpaRepository<AdminAccountEntity, Integer>{
    Optional<AdminAccountEntity> findByEmail(String email);
}
