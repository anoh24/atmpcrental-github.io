package com.example.rentalApp.RentalApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tbl_room")
public class BranchAdminRoomRegistrationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roomid;

    private Integer customerid;
    private String roomnumber;
    private String capacity;
    private String monthlyrent;
}
