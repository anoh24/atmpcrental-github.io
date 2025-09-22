import React, {useState} from "react";
import { apiUserClientList } from "../../api/branchAdmin/userClientValidation";

const userClientProfile = () => {
    const [userClient, setUserClient] = useState(null);
    
  const [profilePic, setProfilePic] = useState(null);
    const fetchUsersClient = async (customerid) =>{
        try{
         const response = await apiUserClientList(customerid);

        setUserClient({
        ...response.data,
        customerid: response.data.customerid || "",
        });

         if (response.data.profilephoto) {
        setProfilePic(`/userClientProfilePhoto/${response.data.profilephoto}?t=${Date.now()}`);
        } else {
        setProfilePic("https://placehold.co/150x150");
        }
        }catch(err){
        console.error("Errore fetching user client",err);
        }

    }



    return{
        userClient,
        profilePic,
        fetchUsersClient
    }
}

export default userClientProfile;