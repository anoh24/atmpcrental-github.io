import { useState, useEffect } from "react";
import { apiUpdateUserClientValidation, apiUserClientRegistrationList } from "../../api/branchAdmin/userClientValidation";
import Swal from "sweetalert2";

const useUserClientValidation = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Modal + form states
  const [selectRow, setSelectRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationApproval, setValidationApproval] = useState("");

  // Show list of user clients
  const fetchUsers = async () => {
    try {
      const res = await apiUserClientRegistrationList();
      setUsers(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users");
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

  // Closing modal
  const closeModal = () => {
    setSelectRow(null);
    setValidationApproval("");
    setIsModalOpen(false);
  };

  // User client validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectRow || !validationApproval) return;

    try {
      const updatedUser = await updateUserApproval(selectRow.customerid, validationApproval);
      const message = updatedUser.data?.message || "You have successfully validated the account";

      closeModal();

      Swal.fire({
        title: "Validated",
        text: message,
        icon: "success",
        width: "400px",
        confirmButtonText: "OK",
        confirmButtonColor: "#22c55e"
      });

      return updatedUser.data;
    } catch (err) {
      console.error("User client validation failed:", err.updatedUser?.data || err.message);
    }
  };

  return {
    users,
    error,
    selectRow,
    isModalOpen,
    validationApproval,
    setValidationApproval,
    handleRowClick,
    closeModal,
    handleSubmit,
  };
};

export default useUserClientValidation;
