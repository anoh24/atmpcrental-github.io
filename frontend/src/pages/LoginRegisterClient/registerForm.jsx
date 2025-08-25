import React from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import useRegisterForm from "../../hooks/branchAdmin/userClientRegistration"; // adjust path if needed

const RegisterForm = () => {
  const {
    formData,
    error,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
    branch,
    setBranch
  
  } = useRegisterForm();

  return (
    <div className="py-40 w-full">
      <h1 className=" text-black text-center text-4xl font-black">
        Sign Up Your Account
      </h1>
      <div className="text-center text-gray-600 mt-10 max-w-7xl mx-auto px-4">
        <p>
          Create your account to connect with trusted landlord — just like many
          renters already have.
        </p>
        <br />
        <p className="text-xs">
          NOTE!: If you want to go back to the Login form just click the
          Login/Register Button
        </p>
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
                focus:outline-none focus:ring-1 focus:ring-black text-black rounded"
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Type your Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-white px-3 py-2 border border-gray-600
                focus:outline-none focus:ring-1 focus:ring-black text-black rounded"
              />
              {formData.password && (
                <div
                  className="absolute right-3 top-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                  onClick={togglePassword}
                  required
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              )}
              {error.password && (
                <p className="text-red-500 text-sm">{error.password} </p>
              )}
            </div>
              <div className="mb-4">
                <select
                  name="branch"
                  id="branch"
                  className="w-full px-3 py-2 bg-white border border-gray-700 rounded text-black"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>Select your branch</option>
                  <option value="Cagayan De Oro">Cagayan De Oro</option>
                  <option value="Marawi City">Marawi City</option>
                </select>
                                  {error.branch &&(
                     <p className="text-red-500 text-sm">{error.branch} </p>
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
