import React, { useState } from 'react';
import { FaUser, FaLock, FaPlus, FaTimes } from 'react-icons/fa';

const RegisterBranchAdminAccount = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', password: 'password123' },
    { id: 2, username: 'jane_smith', password: '12345678' },
    { id: 3, username: 'admin_user', password: 'admin@2024' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleAddUser = () => {
    if (!newUser.username || !newUser.password) return;
    const newId = users.length + 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ username: '', password: '' });
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            📋 Registered Branch Admin Accounts
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow"
          >
            <FaPlus />
            Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-green-100 text-green-900">
              <tr>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-2">
                    <FaUser />
                    User Account
                  </div>
                </th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-2">
                    <FaLock />
                    Password
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr
                  key={user.id}
                  className="bg-white border-b hover:bg-green-50 transition duration-200"
                >
                  <td className="py-4 px-6">{user.username}</td>
                  <td className="py-4 px-6">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Add New Admin User
            </h3>
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={e =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              className="text-black w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={e =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              className="text-black w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleAddUser}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold"
            >
              Add User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterBranchAdminAccount;
