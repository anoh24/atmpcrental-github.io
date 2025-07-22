package com.example.rentalApp.RentalApplication.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table (name = "tbl_customerdetails")
public class UserClientValidationEntity {
    private Integer customerid;
    private String approval;
}
