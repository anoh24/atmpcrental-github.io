
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const apiUserClientProfile= async(data)=>{
    return await axios.get(`${API_URL}/api/{customerid}`, data,{
        headers:{"Content-Type":"application/json"}
    });
}