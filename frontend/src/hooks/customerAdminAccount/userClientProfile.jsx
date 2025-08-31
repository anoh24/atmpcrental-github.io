// useProfileForm.js
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {apiUserClientProfile} from "../../api/customerAdminAccount/userClientProfile"; 


const userClientProfile = () => {
 

  const [formData, setFormData] = useState({
    customerid:"",
    fullName: "",
    gender: "",
    birthdate: "",
    phoneNumber: "",
    occupation: "",
    email: "",
    address: "",
    emergencyName: "",
    emergencyNumber: "",
    relationship: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setError((prev) => ({ ...prev, [name]: "" }));
  };

 
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const customerid =  localStorage.getItem("customerid");
        const response = await apiUserClientProfile(customerid); 
        setFormData(response.data); // assuming backend returns same keys
        setLoading(false);
   
  
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setError({ general: "Failed to load profile" });
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting profile form:", formData);

//       const response = await apiUpdateProfile(formData);

//       Swal.fire({
//         title: "Profile Updated",
//         text: "Your profile information has been saved successfully.",
//         icon: "success",
//         confirmButtonColor: "#22c55e",
//         width: "400px",
//       });

//       return response.data;
//     } catch (err) {
//       console.error("Profile update failed:", err);
//       setError(err.response?.data || { general: "Something went wrong" });
//     }
//   };

  return {
    formData,
    error,
    loading,
    handleChange,
    // handleSubmit,
    setFormData, 
  };
};

export default userClientProfile;
