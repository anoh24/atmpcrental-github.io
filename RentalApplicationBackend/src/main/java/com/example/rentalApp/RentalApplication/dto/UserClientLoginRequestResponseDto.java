package com.example.rentalApp.RentalApplication.dto;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserClientLoginRequestResponseDto {
    private Integer customerid;
    private String token;
    private String email;
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
