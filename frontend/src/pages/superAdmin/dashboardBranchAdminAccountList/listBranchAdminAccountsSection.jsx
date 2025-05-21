import React, { useState } from 'react';
import { FaUser, FaLock, FaEdit, FaTrash } from 'react-icons/fa';

const ListBranchAdminAccounts = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', password: 'password123' },
    { id: 2, username: 'jane_smith', password: '12345678' },
    { id: 3, username: 'admin_user', password: 'admin@2024' },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Update user with ID: ${id}`);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-green-700 mb-6">
          🧾 Manage Branch Admin Accounts
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border rounded-lg overflow-hidden">
            <thead className="bg-green-100 text-green-900 uppercase text-xs">
              <tr>
                <th className="py-3 px-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaUser />
                    User Account
                  </div>
                </th>
                <th className="py-3 px-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaLock />
                    Password
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-green-50`}
                >
                  <td className="py-4 px-6 font-medium">{user.username}</td>
                  <td className="py-4 px-6">{user.password}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleUpdate(user.id)}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow"
                      >
                        <FaEdit />
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBranchAdminAccounts;
