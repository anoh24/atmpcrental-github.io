
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const apiUserClientProfile = async(customerid, formData)=>{
    return await axios.get(`${API_URL}/apiAuthentication/${customerid}`, formData,{
        headers:{"Content-Type":"multipart/form-data"}
    });
}