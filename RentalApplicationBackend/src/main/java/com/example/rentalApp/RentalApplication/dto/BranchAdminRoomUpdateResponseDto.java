package com.example.rentalApp.RentalApplication.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BranchAdminRoomUpdateResponseDto {
    private Integer roomid;
    private String roomnumber;
    private String capacity;
    private String monthlyrent;

    private String message;
}
