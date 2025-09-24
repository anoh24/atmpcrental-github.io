import { useState } from "react";
import { apiUserClientLoginRequest } from "../../api/customerAdminAccount/userClientLoginRequest";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useLoginForm = () => {
  // -----------------------------
  // State
  // -----------------------------
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({});
  const [token, setToken] = useState(null); // Store auth token
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const navigate = useNavigate();

  // -----------------------------
  // Handlers
  // -----------------------------

  // Update form fields and clear error for the field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  // Submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({}); // Reset errors
    try {
      const response = await apiUserClientLoginRequest(formData);

      // Store token and customer ID
      const receivedToken = response.data.token;
      const customerid = response.data.customerid;
      setToken(receivedToken);
      localStorage.setItem("customerid", customerid);
      localStorage.setItem("authToken", receivedToken);

      // Clear form
      setFormData({ email: "", password: "" });

      // Navigate to dashboard
      navigate("/customerAdminAccount/customerAdminDashboardView/customerAdminMainDashboardpage");

      return response.data;
    } catch (err) {
      console.error("Login Failed:", err.response?.data);
      const errorMessage = err.response?.data?.message || "Login failed";

      // Handle errors by type
      if (errorMessage.includes("Email")) {
        setError((prev) => ({ ...prev, email: errorMessage }));
      } else if (errorMessage.includes("Invalid")) {
        setError((prev) => ({ ...prev, password: errorMessage }));
      } else if (errorMessage.includes("not yet approved")) {
        Swal.fire({
          title: "Approval",
          text: errorMessage,
          icon: "info",
          width: "400px",
          confirmButtonText: "OK",
          confirmButtonColor: "#22c55e"
        });
      } else {
        setError((prev) => ({ ...prev, general: errorMessage }));
      }
    }
  };

  // Toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // -----------------------------
  // Return
  // -----------------------------
  return {
    formData,      
    error,         
    token,          
    handleChange,  
    handleSubmit,    
    showPassword,    
    togglePassword   
  };
};

export default useLoginForm;
