import React from "react";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useLogout = () =>{
    const navigate = useNavigate();
    const handleLogout = () => {
          Swal.fire({
             title:"Are you sure?",
             text:"You will be logged out. ",
             icon:"warning",
             width:"400px",
             showCancelButton: true,
             confirmButtonText: "Yes, logout",
             confirmButtonColor: "#22c55e",
             cancelButtonText: "Cancel",
             cancelButtonColor: "#f54f4f",
           }).then((result) =>{
            if(result.isConfirmed){
                localStorage.removeItem("token");

                navigate("/loginpage");
                Swal.fire({
                    title: "Logged out",
                    text: "You have been logged out successfully.",
                    icon: "success",
                    width: "400px",
                    confirmButtonColor: "#22c55e",
                });

            }
           })
    }
    return {handleLogout}
}

