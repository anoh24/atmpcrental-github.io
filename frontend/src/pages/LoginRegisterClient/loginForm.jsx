import React from 'react';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useLoginForm from '../../hooks/customerAdminAccount/userClientLoginRequest'; // adjust path as needed

const LoginForm = () => {
  const {
    formData,
    error,
    handleChange,
    handleSubmit,
    showPassword,
    togglePassword
  } = useLoginForm();

  return (
    <div className="py-40 w-full">
      <h1 className=" text-black text-center text-4xl font-black">Login to Your Account</h1>
      <div className="text-center text-gray-600 mt-10 max-w-7xl mx-auto px-4">
        <p>Log in to view your personal profile, view your rental status, and track your payments,</p>
        <p>Manage billing information, submit maintenance requests, and communicate with landlord.</p>
        <br />
        <p className="text-xs">NOTE!: If you forgot your password just type the Email and then click the 
          FORGOT PASSWORD text at the bottom and<br />
          it will send your password in your Email.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-10 max-w-md mx-auto">
        <div className="border-gray-800 ">
          <form onSubmit={handleSubmit} className="p-6 px-20 rounded ">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white px-3 py-2 border border-gray-600
                focus:outline-none focus:ring-1 focus:ring-black text-black rounded"
              />
               {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Type your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white px-3 py-2 border border-gray-600
                focus:outline-none focus:ring-1 focus:ring-black text-black rounded"
              />
               {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
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

            <div className="flex justify-center gap-7">
              <p className="text-blue-800 text-xs mt-20 cursor-pointer hover:text-blue-600">Forgot Password</p> 
              <Link to="/registerpage" className="text-blue-800 text-xs mt-20 cursor-pointer hover:text-blue-600">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
