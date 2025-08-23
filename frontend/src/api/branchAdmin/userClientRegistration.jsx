import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const apiUserClientRegistration= async(data) =>{
    return await axios.post(`${API_URL}/api/userclients`, data,{
        headers: {"Content-Type":"application/json"}
    });
}