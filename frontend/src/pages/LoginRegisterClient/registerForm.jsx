import React, { useState } from 'react';
import { FaArrowRight,FaGoogle,FaFacebook,FaEye,FaEyeSlash  } from 'react-icons/fa';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                required
              />
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
                required
              />
              {formData.password && (
                <div
                  className="absolute right-3 top-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={togglePassword}
                  >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                   )}
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
