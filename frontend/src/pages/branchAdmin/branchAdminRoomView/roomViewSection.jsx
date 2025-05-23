import React from 'react';

const RoomView = () => {
  const rooms = [
    { number: '101', type: 'Studio', status: 'Occupied', price: '₱5,000', occupant: 'Juan Dela Cruz' },
    { number: '102', type: '1BR', status: 'Vacant', price: '₱6,000', occupant: '-' },
    { number: '103', type: 'Studio', status: 'Reserved', price: '₱5,500', occupant: 'Maria Clara' },
    { number: '104', type: '2BR', status: 'Under Maintenance', price: '₱8,000', occupant: '-' },
  ];

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
    <div className="min-h-screen font-oswald py-10 px-4 md:px-80 mx- bg-gray-100 space-y-10">
      
      {/* Rooms List Table */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="text-lg font-bold text-black mb-4">🏘️ Rooms List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm text-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left p-3">Room No.</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Price</th>
                <th className="text-left p-3">Occupant</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-3">{room.number}</td>
                  <td className="p-3">{room.type}</td>
                  <td className={`p-3 font-semibold ${statusColor(room.status)}`}>{room.status}</td>
                  <td className="p-3">{room.price}</td>
                  <td className="p-3">{room.occupant}</td>
                  <td className="p-3 flex gap-2 flex-wrap">
                   <button className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
  );
};

export default RoomView;
