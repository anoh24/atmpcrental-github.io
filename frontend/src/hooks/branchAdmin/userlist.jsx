// components/branchAdmin/UserList.jsx
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/branchAdmin/userlist'; 
import UserItem from '../../api/branchAdmin/userlistitem'; 

const UserList = () => {
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
        <UserItem key={user.customerid} user={user} />
      ))}
    </>
  );
};

export default UserList;
