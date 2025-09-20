package com.example.rentalApp.RentalApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tbl_customerdetails")
public class CustomerDetailsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerid;


    private Integer roomid;

    private String email;
    private String password;
    private String approval;
    private String status;
    private String branch;
    private String fullname;
    private String gender;
    private String birthdate;
    private String phonenumber;
    private String Occupation;
    private String address;
    private String contactname;
    private String contactnumber;
    private String relationshipcontact;
    private String profilephoto;



}
