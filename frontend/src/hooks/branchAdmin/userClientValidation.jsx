import { useState, useEffect } from "react";
import axios from "axios";
import { apiUpdateUserClientValidation } from "../../api/branchAdmin/userClientValidation";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;

const useUserClientValidation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal + form states
  const [selectRow, setSelectRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationApproval, setValidationApproval] = useState("");


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

  // Update user approval
  const updateUserApproval = async (customerid, approval) => {
    const formData = { customerid, approval };
    try {
      const response = await apiUpdateUserClientValidation(customerid, formData);

      // Update local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.customerid === customerid
            ? { ...user, approval: response.data.approval, status: response.data.status }
            : user
        )
      );

      return response.data;
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      throw err;
    }
  };

  // UI handlers
  const handleRowClick = (user) => {
    setSelectRow(user);
    setValidationApproval(user.approval || "");
    setIsModalOpen(true);
  };
//closing Modal
  const closeModal = () => {
    setSelectRow(null);
    setValidationApproval("");
    setIsModalOpen(false);
  };
  //showing Validated alert
  const showValidatedAlert = () =>{
    Swal.fire({
      title:"Validated",
      text:"User client successfully validated",
      icon:"success",
      width:"400px",
      confirmButtonText:"OK",
      confirmButtonColor:"#22c55e"
    })
  }
  //user client validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectRow || !validationApproval) return;

    try {
      const updatedUser = await updateUserApproval(selectRow.customerid, validationApproval);
            closeModal();
            showValidatedAlert();
      return updatedUser.data

    } catch (err) {
      console.error("User client validated:", err.updatedUser?.data);
    }
  };

  return {
    users,
    loading,
    error,
    selectRow,
    isModalOpen,
    validationApproval,
    setValidationApproval,
    handleRowClick,
    closeModal,
    handleSubmit,
    showValidatedAlert
  };
};

export default useUserClientValidation;
