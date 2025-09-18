import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const apiUpdateUserClientValidation = async (customerid, data) =>{
    return await axios.put(`${API_URL}/apiValidationUserClient/${customerid}`, data,{
        headers:{"Content-Type":"application/json"},
    });
}   
export const apiUserClientRegistrationList = async (params = {}) => {
  return await axios.get(`${API_URL}/apiUserClientRegistration/userclientslist`, {
    headers: { "Content-Type": "application/json" },
    params, // ✅ if you need query params
  });
}; 