import {useEffect, useState} from "react";

import { apiuserClientRoomList,apiuserClientRoom } from "../../api/branchAdmin/userClientRoomList";
import { apiuserClientRoomOccupantsList } from "../../api/branchAdmin/userClientRoomList";
import { data } from "autoprefixer";
const userClientRoomList = () =>{
    const [addRoom, setAddRoom] = useState(false);
    const [formData, setFormData] = useState({roomnumber : "", capacity : "", monthlyrent : "",});
        const [error, setError] = useState({});
    const [rooms, setRooms] = useState([]);
    const [occupants, setOccupants] = useState([]);
    
    const showAddRoomModal = () => {
        setAddRoom(true);
    }

    const hideAddRoomModal = () =>{
        setAddRoom(false);
    }
const fetchRoomUserClientsOccupants = async () => {
  try {
    const occupantsObj = {};

    await Promise.all(
      rooms.map(async (room) => {
        if (!room.roomid) return;
        const response = await apiuserClientRoomOccupantsList(room.roomid);
        occupantsObj[room.roomid] = response.data; // fixed typo
      })
    );
    
    setOccupants(occupantsObj);
  } catch (err) {
    console.error("Failed to fetch occupants", err);
  }
};
// Fetch occupants whenever rooms are updated
useEffect(() => {
  if (rooms.length > 0) fetchRoomUserClientsOccupants();
}, [rooms]);


    const handleChange = (e) =>{
         const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
    }

    const fetchRoomList = async () =>{
        try{
            const response = await apiuserClientRoomList();
            setRooms(response.data);
        }catch(err){
            console.error("Error fetching room list:", err)
        }
    }

    useEffect(() => {
    fetchRoomList();
    },[]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError({});
        try{
            const response = await apiuserClientRoom(formData);
            setFormData({roomnumber: "", capacity: "", monthlyrent: ""});
            await fetchRoomList();
            return response.data;

        }catch(err){
            console.error("Adding room failed:", err.response?.data);
            setError(err.response?.data);
        }
    }
        return{
            addRoom, 
            occupants,
            fetchRoomUserClientsOccupants,
            showAddRoomModal, 
            hideAddRoomModal,
            handleChange,
            handleSubmit,
            formData,
            error,
            rooms
        };

}
export default userClientRoomList;
  






