import { useState, useEffect } from "react";
import axios from "axios";
import { apiUpdateUserClientValidation } from "../../api/branchAdmin/userClientValidation";

const API_URL = import.meta.env.VITE_API_URL; // Replace with your API base URL

const useUserClientValidation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users client list
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/api/userclientslist`);
      setUsers(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Update user approval form
  const updateUserApproval = async (customerid, approval) => {
    const formData = { customerid, approval };
    try {
      const response = await apiUpdateUserClientValidation(customerid, formData);
      // Update local state immediately
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.customerid === customerid ?
       { ...user, approval: response.data.approval, status: response.data.status } : user
        )
      );
      return response.data;
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      throw err;
    }
  };

  return { users, loading, error, fetchUsers, updateUserApproval };
};

export default useUserClientValidation;
