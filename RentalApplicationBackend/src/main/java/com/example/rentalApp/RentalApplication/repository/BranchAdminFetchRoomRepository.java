package com.example.rentalApp.RentalApplication.repository;

import com.example.rentalApp.RentalApplication.entity.RoomEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;


public interface BranchAdminFetchRoomRepository extends JpaRepository<RoomEntity, Integer> {

    @Query("SELECT r.roomid , r.roomnumber FROM RoomEntity r")
    List<String> getAllRooms();

    @Query(value = "SELECT r.roomid, r.roomnumber " +
            "FROM RoomEntity r " +
            "JOIN CustomerDetailsEntity c ON c.roomid = r.roomid " +
            "WHERE c.customerid = :customerid")
    List<String> getAssignedRoom(@Param("customerid") Integer customerid);

    @Query("SELECT c.fullname " +
            "FROM CustomerDetailsEntity c " +
            "JOIN RoomEntity r ON r.roomid = c.roomid " +
            "WHERE r.roomid = :roomid")
    List<String> getOccupants( Integer roomid);
}
