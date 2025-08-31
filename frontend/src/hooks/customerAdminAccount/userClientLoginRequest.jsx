import { useState } from "react";
import { apiUserClientLoginRequest } from "../../api/customerAdminAccount/userClientLoginRequest";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({});
  const [token, setToken] = useState(null); // ✅ add token state
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));


    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const response = await apiUserClientLoginRequest(formData);

      const receivedToken = response.data.token;
      setToken(receivedToken);

 
      localStorage.setItem("authToken", receivedToken);

      setFormData({ email: "", password: "" }); 
      navigate("/customerAdminAccount/customerAdminDashboardView/customerAdminMainDashboardpage");

      return response.data;
    } catch (err) {
      console.error("Login Failed:", err.response?.data);
      const errorMessage = err.response?.data?.message || "Login failed";

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

  const togglePassword = () => setShowPassword((prev) => !prev);

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
