// useRegisterForm.js
import { useState } from "react";
import { apiUserClientRegistration } from "../../api/customerAdminAccount/userClientRegistration";
import Swal from "sweetalert2";

const useRegisterForm = () => {
  // -----------------------------
  // State
  // -----------------------------
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    branch: ""
  });
  const [error, setError] = useState({});          
  const [showPassword, setShowPassword] = useState(false);
  const [branch, setBranch] = useState("");        

  // -----------------------------
  // Handlers
  // -----------------------------

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" }); // Clear error for this field
  };

  // Toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // Submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({}); // Clear previous errors

    try {
      const response = await apiUserClientRegistration(formData);

      // Reset form fields
      setFormData({ email: "", password: "", branch: "" });

      // Show success message
      const message = response.data?.message || "Account registered, we'll email you after your account is validated.";
      Swal.fire({
        title: "Registered",
        text: message,
        icon: "success",
        width: "400px",
        confirmButtonText: "OK",
        confirmButtonColor: "#22c55e"
      });

      return response.data;
    } catch (err) {
      console.error("Registration failed:", err.response?.data);
      setError(err.response?.data); // Set backend errors
    }
  };

  // -----------------------------
  // Return
  // -----------------------------
  return {
    branch,
    setBranch,
    formData,
    error,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
  };
};

export default useRegisterForm;
