import axios from "axios";
const API_URL =  import.meta.env.VITE_API_URL;
export const apiUserClientUpdateProfile = async(data,customerid) =>{
return await axios.put(`${API_URL}/apiUpdateUserClientProfile/${customerid}`,data,{
        headers:{"Conten-Type":"application/json"}
    });
}