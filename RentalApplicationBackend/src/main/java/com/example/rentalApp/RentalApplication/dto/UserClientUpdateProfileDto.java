package com.example.rentalApp.RentalApplication.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.NumberFormat;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserClientUpdateProfileDto {
    @NotNull(message="You did not select a room number")
    @Min(value = 1, message = "Only 1 to 200 characters are allowed")
    @Max(value = 200, message = "Only 1 to 200 characters are allowed")
    private Integer roomid;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters are allowed")
    private String email;

    @NotBlank(message = "Fullname is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters are allowed")
    private String fullname;

    @NotBlank(message = "You did not select a gender")
    private String gender;

    @NotBlank(message = "Birth date is required")
    @Size(min = 2, max = 200, message = "Only 2 to 200 characters are allowed")
    private String birthdate;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{11}$", message = "Phone number must be exactly 11 digits")
    private String phonenumber;

    @NotBlank(message = "Occupation is required")
    @Size(min = 5, max = 200, message = "Only 5 to 200 characters is allowed")
    private String occupation;

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
    private String approval;
    private String status;
    private String profilephoto;
}
