import React from 'react';
import userClientRoomList from '../../../hooks/branchAdmin/userClientRoomList';

const RoomView = () => {
  const{
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
  } = userClientRoomList();
  

  const requests = [
    { id: 'REQ001', room: '101', type: 'Maintenance', status: 'Pending', date: 'May 20, 2025' },
    { id: 'REQ002', room: '104', type: 'Cleaning', status: 'In Progress', date: 'May 21, 2025' },
    { id: 'REQ003', room: '103', type: 'Internet Issue', status: 'Resolved', date: 'May 18, 2025' },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'Occupied': return 'text-red-700';
      case 'Vacant': return 'text-green-700';
      case 'Reserved': return 'text-yellow-700';
      case 'Under Maintenance': return 'text-gray-700';
      default: return '';
    }
  };

  const requestStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'text-yellow-600';
      case 'In Progress': return 'text-blue-600';
      case 'Resolved': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="h-screen font-oswald px-6 md:px-20 bg-gray-100">
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 mb-10">
 
        {/* Rooms List Table */}
        <div className="bg-white rounded-xl shadow-md p-6 border mt-10 mb-10">
          <h2 className="text-lg font-bold text-black mb-4">🏘️ Rooms List</h2>
          <button onClick={showAddRoomModal} className="bg-green-500 text-white text-xs px-3 py-1 mb-2 rounded hover:bg-green-600">Add Room</button>
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-black">
      <thead>
        <tr className="bg-gray-200">
          <th className="text-left p-3">Room No.</th>
          <th className="text-left p-3">Capacity</th>
          <th className="text-left p-3">Status</th>
          <th className="text-left p-3">Price</th>
          <th className="text-left p-3">Occupants</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room) => (
          <tr key={room.roomid} className="border-t hover:bg-gray-50 cursor-pointer">
            <td className="p-3">{room.roomnumber}</td>
            <td className="p-3">{room.capacity}</td>
            <td className={`p-3 font-semibold ${room.status === "Available" ? "text-green-600" : "text-red-600"}`}>
              {room.status}
            </td>
            <td className="p-3">₱{room.monthlyrent}</td>
            <td className="p-3">
              <select className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black">
                <option>-- Show Occupant --</option>
                {(occupants[room.roomid] || []).map((fullname, index) => (
                  <option key={index} value={fullname}>
                    {fullname}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
        </div>
        {/* show add room modal */}
      {addRoom &&(
        <div className="fixed inset-0 px-6 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl text-black font-semibold mb-4">Add Room</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-black font-medium text-sm mb-1">Room #</label>
                <input
                  name="roomnumber"
                  type="text"
                  value={formData.roomnumber}
                  onChange={handleChange}
                  className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
                  {error.roomnumber && (
                <p className="text-red-500 text-sm">{error.roomnumber}</p>
              )}
              </div>
                <div className="mb-4">
                <label className="text-black font-medium text-sm mb-1">Capacity</label>
                <input
                  name="capacity"
                  type="text"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
                  {error.capacity && (
                <p className="text-red-500 text-sm">{error.capacity}</p>
              )}
              </div>
              <div className="mb-4 relative">
                <label className="text-black font-medium text-sm mb-1">Monthly Rent</label>
                  <span className="absolute left-3 top-8 text-black pointer-events-none select-none">
                    PHP
                  </span>
                <input
                  name="monthlyrent"
                  type="text"
                  value={formData.monthlyrent}
                  onChange={handleChange}
                  className="bg-white text-black border border-gray-300 rounded-lg  py-2 px-12 w-full focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder ="0.00"
                />
                  {error.monthlyrent && (
                <p className="text-red-500 text-sm">{error.monthlyrent}</p>
              )}
              </div>

              <div className="flex justify-end gap-2">
                <button onClick={hideAddRoomModal}
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add Room
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        

        {/* Room Requests Table */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg font-bold text-black mb-4">🛠️ Room Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-sm text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3">Request ID</th>
                  <th className="text-left p-3">Room</th>
                  <th className="text-left p-3">Type</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3">{req.id}</td>
                    <td className="p-3">{req.room}</td>
                    <td className="p-3">{req.type}</td>
                    <td className={`p-3 font-semibold ${requestStatusColor(req.status)}`}>{req.status}</td>
                    <td className="p-3">{req.date}</td>
                    <td className="p-3 flex gap-2 flex-wrap">
                      <button className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600">Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>          
    </div>
  );
};

export default RoomView;
