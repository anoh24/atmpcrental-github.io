package com.example.rentalApp.RentalApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "tbl_customerdetails")
public class UserClientRegistrationForValidationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerid;
    private String email;
    private String password;
    private String approval;
    private String status;
    private String branch;

}
