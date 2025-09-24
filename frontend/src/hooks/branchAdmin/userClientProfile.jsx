// useUserClientProfile.js
import React, { useState } from "react";
import { apiUserClientList } from "../../api/branchAdmin/userClientValidation";

const useUserClientProfile = () => {
  // -----------------------------
  // State
  // -----------------------------
  const [userClient, setUserClient] = useState(null); 
  const [profilePic, setProfilePic] = useState(null);  

  // -----------------------------
  // Fetch user client data by customer ID
  // -----------------------------
  const fetchUsersClient = async (customerid) => {
    try {
      const response = await apiUserClientList(customerid);

      // Set user client data, ensuring customerid exists
      setUserClient({
        ...response.data,
        customerid: response.data.customerid || "",
      });

      // Set profile picture or fallback placeholder
      if (response.data.profilephoto) {
        setProfilePic(`/userClientProfilePhoto/${response.data.profilephoto}?t=${Date.now()}`);
      } else {
        setProfilePic("https://placehold.co/150x150");
      }
    } catch (err) {
      console.error("Error fetching user client", err);
    }
  };

  // -----------------------------
  // Return state and fetch function
  // -----------------------------
  return {
    userClient,
    profilePic,
    fetchUsersClient,
  };
};

export default useUserClientProfile;
