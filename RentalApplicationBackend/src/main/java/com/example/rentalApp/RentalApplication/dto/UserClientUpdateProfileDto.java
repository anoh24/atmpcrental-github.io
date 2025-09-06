package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.NumberFormat;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientUpdateProfileDto {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters are allowed")
    private String email;

    @NotBlank(message = "Fullname is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters are allowed")
    private String fullname;

    @NotBlank(message = "You did not select a gender")
    @Size(min = 1 , max = 200, message = "Only 5 to 200 characters are allowed")
    private String gender;

    @NotBlank(message = "Birth date is required")
    @Size(min = 2, max = 200, message = "Only 2 to 200 characters are allowed")
    private String birthdate;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{11}$", message = "Phone number must be exactly 11 digits")
    private String phonenumber;

    @NotBlank(message = "Occupation is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters is allowed")
    private String Occupation;

    @NotBlank(message = "Address is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters are allowed")
    private String address;

    @NotBlank(message = "Contact name is required")
    @Size(min = 5, max = 200, message = "Only 5 to 299 character are allowed")
    private String contactname;

    @NotBlank(message = "Contact number is required")
    @Pattern(regexp = "^[0-9]{11}$", message = "Phone number must be exactly 11 digits")
    private String contactnumber;

    @NotBlank(message = "Relationship contact is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 character are allowed")
    private String relationshipcontact;
}
