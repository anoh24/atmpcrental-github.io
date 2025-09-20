// useProfileForm.js
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {apiUserClientProfile, apiUserClientRoomListAvailable, apiUserClientAssignedRoom} from "../../api/customerAdminAccount/userClientProfile"; 
import {apiUserClientUpdateProfile} from "../../api/customerAdminAccount/userClientUpdateProfile";
import { apiUserClientChangeProfilePhoto } from "../../api/customerAdminAccount/userClientChangeProfilePhoto";

const userClientProfile = () => {
 

  const [formData, setFormData] = useState({
    customerid:"",
    fullname: "",
    gender: "",
    birthdate: "",
    phonenumber: "",
    occupation: "",
    email: "",
    roomid:"",
    address: "",
    contactname: "",
    contactnumber: "",
    relationshipcontact: "",
    rooms:[]
   
  });

  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);
  


const fetchProfile = async () => {
  try {
    const customerid = localStorage.getItem("customerid");
    const response = await apiUserClientProfile(customerid); 

    setFormData((prev) => ({
      ...prev,
      ...response.data,
      assignedRoomNumber: response.data.roomnumber || "", // store assigned room number
    }));

    setLoading(false);

    if (response.data.profilephoto) {
      setProfilePic(`/userClientProfilePhoto/${response.data.profilephoto}?t=${Date.now()}`);
    } else {
      setProfilePic("https://placehold.co/150x150");
    }
  } catch (err) {
    console.error("Failed to fetch profile:", err);
    setError({ general: "Failed to load profile" });
    setLoading(false);
  }
};

const fetchAvailableRooms = async () => {
  try {
    const response = await apiUserClientRoomListAvailable(); 

    const rooms = response.data.map((r) => {
      const [roomid, roomnumber] = r.split(",");
      return { roomid, roomnumber };
    });
    setFormData((prev) => ({
      ...prev,
      rooms
    }));
  } catch (err) {
    console.error("Failed to fetch rooms", err);
  }
};
const fetchAssignedRoom = async () => {
  try {
    const customerid = localStorage.getItem("customerid");
    const response = await apiUserClientAssignedRoom(customerid);

    const assignedRoomStr = response.data[0];
    if (assignedRoomStr) {
      const [roomid, roomnumber] = assignedRoomStr.split(",");
      setFormData((prev) => ({
        ...prev,
        roomid: roomid,             
        assignedRoomNumber: roomnumber 
      }));
    }

  } catch (err) {
    console.error("Failed to fetch assigned room", err);
  }
};

useEffect(() => {
  fetchProfile();
  fetchAvailableRooms();
  fetchAssignedRoom();
}, []);


const handleProfilePicChange = async (e) => {
  e.preventDefault();
  const file = e.target.files?.[0];
  if (!file) return;

  setProfilePic(URL.createObjectURL(file)); 

  const customerid = Number(localStorage.getItem("customerid"));
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await apiUserClientChangeProfilePhoto(customerid, formData);

    if (response.data.profilephoto) {
   
      setProfilePic(`/userClientProfilePhoto/${response.data.profilephoto}?t=${Date.now()}`);
    }


    await fetchProfile();

  } catch (error) {
    console.error("Upload failed", error);
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const customerid = Number(localStorage.getItem("customerid"));
    console.log("Submitting profile form:", { ...formData, customerid });

    const response = await apiUserClientUpdateProfile(formData, customerid);

 

    Swal.fire({
      title: "Profile Updated",
      text: "Your profile information has been saved successfully.",
      icon: "success",
      confirmButtonColor: "#22c55e",
      width: "400px",
    });

    return response.data;
  } catch (err) {
    console.error("Profile update failed:", err);
    setError(err.response?.data || { general: "Something went wrong" });
  }
};

  return {
    formData,
    error,
    loading,
    profilePic,
    handleProfilePicChange,
    handleChange,
    handleSubmit,
    setFormData, 
  };
};

export default userClientProfile;
