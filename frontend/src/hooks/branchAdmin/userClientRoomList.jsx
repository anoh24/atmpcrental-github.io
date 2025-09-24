import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  apiuserClientRoomList,
  apiuserClientRoom,
  apiuserClientRoomOccupantsList,
  apibranchroomupdate,
} from "../../api/branchAdmin/userClientRoomList";

const userClientRoomList = () => {
  // -----------------------------
  // State
  // -----------------------------
  const [isModalAddRoom, setIsModalAddRoom] = useState(false);
  const [isModalUpdateRoom, setIsModalUpdateRoom] = useState(false);

  const [formData, setFormData] = useState({
    roomnumber: "",
    capacity: "",
    monthlyrent: "",
  });

  const [updateFormData, setUpdateFormData] = useState({
    roomid: "",
    roomnumber: "",
    capacity: "",
    monthlyrent: "",
  });

  const [error, setError] = useState({});
  const [errorUpdate, setErrorUpdate] = useState({});
  const [rooms, setRooms] = useState([]);
  const [occupants, setOccupants] = useState({});

  // -----------------------------
  // Modal Handlers
  // -----------------------------
  const showAddRoomModal = () => setIsModalAddRoom(true);
  const hideAddRoomModal = () => setIsModalAddRoom(false);

  const handleRowClick = (room) => {
    setUpdateFormData({
      roomid: room.roomid,
      roomnumber: room.roomnumber || "",
      capacity: room.capacity || "",
      monthlyrent: room.monthlyrent || "",
    });
    setIsModalUpdateRoom(true);
  };

  const hideUpdateRoomModal = () => setIsModalUpdateRoom(false);

  // -----------------------------
  // API Calls
  // -----------------------------
  const fetchRoomList = async () => {
    try {
      const response = await apiuserClientRoomList();
      setRooms(response.data);
    } catch (err) {
      console.error("Error fetching room list:", err);
    }
  };

  const fetchRoomUserClientsOccupants = async () => {
    try {
      const occupantsObj = {};
      await Promise.all(
        rooms.map(async (room) => {
          if (!room.roomid) return;
          const response = await apiuserClientRoomOccupantsList(room.roomid);
          occupantsObj[room.roomid] = response.data;
        })
      );
      setOccupants(occupantsObj);
    } catch (err) {
      console.error("Failed to fetch occupants", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const response = await apiuserClientRoom(formData);
      const message = response.data?.message || "You have successfully added Room.";
      setFormData({ roomnumber: "", capacity: "", monthlyrent: "" });

      Swal.fire({
        title: "Room Added",
        text: message,
        icon: "success",
        confirmButtonColor: "#22c55e",
        width: "400px",
      });

      await fetchRoomList();
      return response.data;
    } catch (err) {
      console.error("Adding room failed:", err.response?.data);
      setError(err.response?.data);
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setErrorUpdate({});
    try {
      const response = await apibranchroomupdate(
       updateFormData.roomid, updateFormData
      );
      const message = response.data?.message || "You have successfully added Room.";
      setUpdateFormData({
        roomid: "",
        roomnumber: "",
        capacity: "",
        monthlyrent: "",
      });

      hideUpdateRoomModal();

      Swal.fire({
        title: "Room Update",
        text: message,
        icon: "success",
        confirmButtonColor: "#22c55e",
        width: "400px",
      });

      await fetchRoomList();
      return response.data;
    } catch (err) {
      console.error("Updating room failed:", err.response?.data);
      setErrorUpdate(err.response?.data);
    }
  };

  // -----------------------------
  // Form Handlers
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
   
  };

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateFormData((prev) => ({ ...prev, [name]: value }));

  };

  // -----------------------------
  // Effects
  // -----------------------------
  useEffect(() => {
    fetchRoomList();
  }, []);

  useEffect(() => {
    if (rooms.length > 0) fetchRoomUserClientsOccupants();
  }, [rooms]);

  // -----------------------------
  // Return (hook API)
  // -----------------------------
  return {
    // Data
    rooms,
    occupants,

    // Form states
    formData,
    updateFormData,
    error,
    errorUpdate,

    // Modal states
    isModalAddRoom,
    isModalUpdateRoom,

    // Handlers
    handleChange,
    handleChangeUpdate,
    handleSubmit,
    handleSubmitUpdate,
    handleRowClick, // ✅ kept exactly as you had it

    // Modal handlers
    showAddRoomModal,
    hideAddRoomModal,
    hideUpdateRoomModal,
  };
};

export default userClientRoomList;
