import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const apiuserClientRoom = async(roomid) =>{
    return await axios.post(`${API_URL}/apiBranchAdminRoomList/room`, roomid,{
        headers: {"Content-Type":"application/json"},
    });
}
export const apiuserClientRoomList = async (data) => {
  return await axios.get(`${API_URL}/apiBranchAdminRoomList/roomlist`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

