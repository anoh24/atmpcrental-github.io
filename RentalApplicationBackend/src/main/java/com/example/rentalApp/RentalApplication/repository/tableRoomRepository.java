package com.example.rentalApp.RentalApplication.repository;
import com.example.rentalApp.RentalApplication.entity.RoomEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface tableRoomRepository extends JpaRepository<RoomEntity, Integer> {

    @Query("SELECT r.roomid , r.roomnumber FROM RoomEntity r")
    List<String> getAllRooms();

    @Query(value = "SELECT r.roomid, r.roomnumber " +
            "FROM RoomEntity r " +
            "JOIN CustomerDetailsEntity c ON c.roomid = r.roomid " +
            "WHERE c.customerid = :customerid")
    List<String> getAssignedRoom(@Param("customerid") Integer customerid);
}
