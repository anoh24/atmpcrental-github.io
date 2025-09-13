import axios from "axios";
const API_URL= import.meta.env.VITE_API_URL;
export const apiUserClientChangeProfilePhoto = async(customerid, formData) =>{
    return await axios.put(`${API_URL}/apiUpdateUserClientProfile/${customerid}/profile-photo`, formData,{
         headers:{"Content-Type":"multipart/form-data"}
    });
}