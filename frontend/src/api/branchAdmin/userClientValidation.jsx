import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const apiUpdateUserClientValidation = async (customerid) =>{
    return await axios.put(`${API_URL}/api/userclients/${customerid}`);
}