import React, { useState } from "react";

const userAsignRoom = () => {
    const [addRoom, setAddRoom] = useState(false);

    const showAddRoomModal = () => {
        setAddRoom(true);
    }

    const hideAddRoomModal = () =>{
        setAddRoom(false);
    }



    return{
        addRoom, 
        showAddRoomModal, 
        hideAddRoomModal
    };
}

export default userAsignRoom;


