
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const apiUserClientLoginRequest= async(data)=>{
    return await axios.post(`${API_URL}/api/authentication/login`, data,{
        headers:{"Content-Type":"application/json"}
    });
}