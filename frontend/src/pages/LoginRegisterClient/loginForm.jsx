import React, { useState } from 'react';
import { FaArrowRight,FaGoogle,FaFacebook,FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  const LoginForm = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    
    <div className="py-40 w-full">
      <h1 className=" text-black text-center text-4xl font-black">Login to Your Account</h1>
        <div className="text-center text-gray-600 mt-10 max-w-7xl mx-auto px-4">
          <p>Log in to view your personal profile, view your rental status, and track your payments,</p>
          <p>Manage billing information, submit maintenance requests, and communicate with landlord.</p>
          <br></br>
          <p className="text-xs">NOTE!: If you forgot your password just type the Email and then click the 
            FORGOT PASSWORD text at the bottom and<br></br>
          it will send your password in your Email.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
        <div className="border-gray-800 ">
          <form onSubmit={handleSubmit} className="p-6 px-20 rounded shadow-md md:shadow-none">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 px-3 py-2 border-0 focus:border-none 
                focus:outline-none  text-white-700"
                required
              />
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Type your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-800 px-3 py-2 border-0 focus:border-none focus:outline-none 
                 text-white-700"
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
              from-green-500 to-white hover:from-white hover:to-green-500
              transition-all duration-1000 eas-in-out"
            >
              Login
              <FaArrowRight className="text-black font-bold mt-1" />
            </button>
          </form>
        </div>


        <div className="flex flex-col mt-7 space-y-4 px-20">
          <button
            type="button"
            className="flex justify-between w-full text-white py-2 px-10 bg-red-600 hover:bg-red-400"
          >
            <FaGoogle className="text-white mt-1" />
            Sign in with Google
          </button>
          <button
            type="button"
            className="flex justify-between w-full text-white py-2 px-10 bg-blue-800 hover:bg-blue-600"
          >
            <FaFacebook className="text-white mt-1" />
            Sign in with Facebook
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-7">
      <p className="text-blue-800 text-xs mt-20 cursor-pointer hover:text-blue-600">Forgot Password</p> 
      <Link to="/registerpage" className="text-blue-800 text-xs mt-20 cursor-pointer hover:text-blue-600">
      Create Account
      </Link>
      </div>
    </div>
  );
};

export default LoginForm;
