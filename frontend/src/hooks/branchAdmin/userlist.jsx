// components/branchAdmin/UserList.jsx
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/branchAdmin/userlist'; 


const UserList = ({onRowClick}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); 
  }, []);

  if (loading) return <tr><td colSpan="15">Loading...</td></tr>;
  if (error) return <tr><td colSpan="15" className="text-red-500">{error}</td></tr>;

  return (
    <>
      {users.map(user => (
        <tr key={user.customerid} onClick = {() => onRowClick(user)} className="border-t hover:bg-gray-50 cursor-pointer">
          <td className="p-3 hidden">{user.customerid}</td>
          <td className="p-3">{user.fullname}</td>
          <td className="p-3">{user.gender}</td>
          <td className="p-3">{user.birthdate}</td>
          <td className="p-3">{user.phonenumber}</td>
          <td className="p-3">{user.occupation}</td>
          <td className="p-3">{user.email}</td>
          <td className="p-3">{user.address}</td>
          <td className="p-3">{user.governmentid}</td>
          <td className="p-3">{user.roomnumber}</td>
          <td className="p-3">{user.contactname}</td>
          <td className="p-3">{user.contactnumber}</td>
          <td className="p-3">{user.relationshipcontact}</td>
          <td className={`p-3 font-semibold ${user.approval === 'Validating...' ? 'text-gray-500' : 'text-green-700'}`}>
            {user.approval}
          </td> 
          <td className={`p-3 font-semibold ${user.status === 'Active' ? 'text-green-700' : 'text-gray-500'}`}>
            {user.status}
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserList;
