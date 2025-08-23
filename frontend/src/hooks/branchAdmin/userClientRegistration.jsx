import { useState } from "react";
import { apiUserClientRegistration } from "../../api/branchAdmin/userClientRegistration";
import Swal from "sweetalert2";
const useRegisterForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", branch: "" ,});
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [branch, setBranch]= useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" }); // clear error for this field
  };

  const showRegistrationAlert = () =>{
        Swal.fire({
          title:"Registered",
          text:"User client successfully registered ",
          icon:"success",
          width:"400px",
          confirmButtonText:"OK",
          confirmButtonColor:"#22c55e"
        })
  }
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const response = await apiUserClientRegistration(formData);
      setFormData({ email: "", password: "", branch:"" });
      showRegistrationAlert();
      return response.data;
    } catch (err) {
      console.error("Registration failed:", err.response?.data);
      setError(err.response?.data); // ✅ set backend errors
    }
  };

  return {
    branch,
    setBranch,
    formData,
    error,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
    showRegistrationAlert
  };
};

export default useRegisterForm;
