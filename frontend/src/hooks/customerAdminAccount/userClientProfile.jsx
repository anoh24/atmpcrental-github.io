// useProfileForm.js
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {apiUserClientProfile} from "../../api/customerAdminAccount/userClientProfile"; 
import {apiUserClientUpdateProfile } from "../../api/customerAdminAccount/userClientUpdateProfile";

const userClientProfile = () => {
 

  const [formData, setFormData] = useState({
    customerid:"",
    fullname: "",
    gender: "",
    birthdate: "",
    phonenumber: "",
    occupation: "",
    email: "",
    address: "",
    contactname: "",
    contactnumber: "",
    relationshipcontact: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

 
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const customerid = localStorage.getItem("customerid");
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
    handleChange,
    handleSubmit,
    setFormData, 
  };
};

export default userClientProfile;
