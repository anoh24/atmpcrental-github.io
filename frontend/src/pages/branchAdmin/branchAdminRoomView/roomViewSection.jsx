import React from 'react';

const RoomView = () => {
  const rooms = [
    {
      number: '101',
      type: 'Studio',
      status: 'Occupied',
      price: '₱5,000',
      occupant: 'Juan Dela Cruz',
    },
    {
      number: '102',
      type: '1BR',
      status: 'Vacant',
      price: '₱6,000',
      occupant: '-',
    },
    {
      number: '103',
      type: 'Studio',
      status: 'Reserved',
      price: '₱5,500',
      occupant: 'Maria Clara',
    },
    {
      number: '104',
      type: '2BR',
      status: 'Under Maintenance',
      price: '₱8,000',
      occupant: '-',
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'Occupied':
        return 'text-red-700';
      case 'Vacant':
        return 'text-green-700';
      case 'Reserved':
        return 'text-yellow-700';
      case 'Under Maintenance':
        return 'text-gray-700';
      default:
        return '';
    }
  };

  return (
    <div className="h-screen font-oswald py-10 px-4 md:px-20 bg-gray-100">
      {/* ROOMS LIST TABLE */}
      <div className="bg-white max-w-5xl mx-auto rounded-xl shadow-md p-6 border mb-10">
        <h2 className="text-lg font-bold text-black mb-4">🏘️ Rooms List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-black">
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
                  <td className="p-3 flex gap-2">
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600">View</button>
                    <button className="bg-yellow-500 text-white text-xs px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                    <button className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600">Vacate</button>
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
