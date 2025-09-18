import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import { apiuserClientRoomList,apiuserClientRoom } from "../../api/branchAdmin/userClientRoomList";

const userClientRoomList = () =>{
    const [addRoom, setAddRoom] = useState(false);
    const [formData, setFormData] = useState({roomnumber : "", capacity : "", monthlyrent : "",});
        const [error, setError] = useState({});
    const [rooms, setRooms] = useState([]);
    const showAddRoomModal = () => {
        setAddRoom(true);
    }

    const hideAddRoomModal = () =>{
        setAddRoom(false);
    }



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
  






