package com.example.rentalApp.RentalApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserClientUpdateProfileReponseDto {
    private Integer customerid;
    private Integer roomid;
    private String email;
    private String fullname;
    private String gender;
    private String birthdate;
    private String phonenumber;
    private String occupation;
    private String address;
    private String contactname;
    private String contactnumber;
    private String relationshipcontact;
    private String message;
    private String approval;
    private String status;
    private String profilephoto;

}
