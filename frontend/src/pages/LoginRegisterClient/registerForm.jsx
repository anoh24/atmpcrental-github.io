import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowRight,FaEye,FaEyeSlash  } from 'react-icons/fa';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error , setError] = useState({});
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
    setError({...error, [e.target.name]: ""});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError({});
    setShowAlert(false);
    
    try{
      const response = await axios.post("http://localhost:8080/api/userclients", formData);
      setMessage(response.data.message);
      setShowAlert(true);
      setFormData({email: "", password: ""});

      setTimeout(() =>{
        setShowAlert(false);
      },10000)
    }
    catch(err){
      if(err.response && err.response.status === 400){
        setError(err.response.data);
      }
      else{
        setMessage("An error occurred");
      }
    }
  };
  const [showPassword,setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev)
  return (
    <div className="py-40 w-full">
      <h1 className=" text-black text-center text-4xl font-black">Sign Up Your Account</h1>
        <div className="text-center text-gray-600 mt-10 max-w-7xl mx-auto px-4">
            <p>Create your account to connect with trusted landlord — just like many renters already have.</p>

          <br></br>
          <p className="text-xs">NOTE!: If you want to go back to the Login form just click the Login/Register Button</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-10 max-w-md mx-auto">
        <div className=" border-gray-800 ">
          <form onSubmit={handleSubmit} className="p-6 px-20 rounded">
            {showAlert && (
              <div className="p-3 text-white bg-green-400 rounded shadow-sm mb-2">
                {message}
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white px-3 py-2 border border-gray-600
                focus:outline-none focus:ring-1 focus:ring-black text-black"
               
              />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Type your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white px-3 py-2 border border-gray-600
                focus:outline-none focus:ring-1 focus:ring-black text-black"
               
              />
              {formData.password && (
                <div
                  className="absolute right-3 top-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={togglePassword}
                  >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                   )}
                {error.password && <p className="text-red-500 text-sm">{error.password} </p>}
            </div>

            <button
              type="submit"
              className="flex justify-between w-full text-white text-left py-2 px-3 bg-gradient-to-r 
              from-green-500 to-white hover:from-white hover:to-green-500 hover:bg-gradient-to-t 
              transition-all duration-1000 eas-in-out"
            >
              Sign Up
              <FaArrowRight className="text-black font-bold mt-1" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default RegisterForm;
