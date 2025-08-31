import axios from "axios";
//Validating approval of user client API
const API_URL = import.meta.env.VITE_API_URL;
export const apiUpdateUserClientValidation = async (customerid, data) =>{
    return await axios.put(`${API_URL}/api/${customerid}`, data,{
        headers:{"Content-Type":"application/json"},
    });
}