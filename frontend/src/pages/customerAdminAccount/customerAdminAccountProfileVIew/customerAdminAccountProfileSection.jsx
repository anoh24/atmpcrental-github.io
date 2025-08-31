import React, { useState } from "react";
import userClientProfile from "../../../hooks/customerAdminAccount/userClientProfile"
const CustomerAdminAccountProfileSection = () => {
 
 const {
    formData,
    // error,
    // showPassword,
    // togglePassword,
    handleChange,
    // handleSubmit,
  } = userClientProfile();
  const inputClass =
    "bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black";

  const labelClass = "text-black font-medium text-sm mb-1";

  return (
    <div className="relative mt-28 flex flex-col gap-6 max-w-3xl mx-auto px-2 sm:px-4 font-oswald mb-10">
      <div className=" grid grid-cols-1 gap-6 ">
        <form
          // onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 border"
        >
          <h2 className="text-lg font-bold text-black mb-4 border-b pb-2">
            🧍 Personal Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="fullName"
                className={inputClass}
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Gender</label>
              <select
                name="gender"
                className={inputClass}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Birthdate</label>
              <input
                name="birthdate"
                type="date"
                className={inputClass}
                value={formData.birthdate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                name="phoneNumber"
                className={inputClass}
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Occupation</label>
              <input
                name="occupation"
                className={inputClass}
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                name="email"
                type="email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Address</label>
              <textarea
                name="address"
                className={`${inputClass} h-24`}
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Profile Photo</label>
              <input
                name="profilePhoto"
                type="file"
                accept="image/*"
                className={inputClass}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Government ID</label>
              <input
                name="govId"
                type="file"
                className={inputClass}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">
              🚨 Emergency Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Contact Name</label>
                <input
                  name="emergencyName"
                  className={inputClass}
                  value={formData.emergencyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Contact Number</label>
                <input
                  name="emergencyNumber"
                  className={inputClass}
                  value={formData.emergencyNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Relationship</label>
                <select
                  name="relationship"
                  className={inputClass}
                  value={formData.relationship}
                  onChange={handleChange}
                >
                  <option value="">Select Relationship</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg font-bold shadow-md transition"
            >
              💾 Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerAdminAccountProfileSection;
