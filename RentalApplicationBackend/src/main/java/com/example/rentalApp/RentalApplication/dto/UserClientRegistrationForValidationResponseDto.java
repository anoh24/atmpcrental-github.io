package com.example.rentalApp.RentalApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserClientRegistrationForValidationResponseDto {
    private Integer customerid;
    private Integer roomid;
    private String email;
    private String approval;
    private String status;
    private String branch;
    private String message;

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
