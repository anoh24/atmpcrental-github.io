import userClientProfile from "../../../hooks/customerAdminAccount/userClientProfile"
import { useState } from "react";

const CustomerAdminAccountProfileSection = () => {
  const {
    formData,

    error,
    profilePic,
    handleProfilePicChange,
    handleChange,
    handleSubmit,
  } = userClientProfile();



  const inputClass =
    "bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black";

  const labelClass = "text-black font-medium text-sm mb-1";



  return (
    <div className="relative mt-28 flex flex-col gap-6 max-w-3xl mx-auto px-2 sm:px-4 font-oswald mb-10">
      <div className="grid grid-cols-1 gap-6 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 border"
        >
          <h2 className="text-lg font-bold text-black mb-4 border-b pb-2">
            🧍 Personal Information
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative w-28 h-28">
              {/* Profile Image */}
              <img
                src={profilePic || "https://placehold.co/150x150"}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border border-gray-300 shadow-md"
              />

              {/* Circular overlay button */}
              <label
                htmlFor="profile-upload"
                className="absolute bottom-1 right-1 bg-black text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-gray-800"
                title="Change profile photo"
              >
                &#9998; {/* pencil icon, you can replace with SVG */}
              </label>

              {/* Hidden file input */}
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </div>
          </div>

          <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="fullname"
                className={inputClass}
                value={formData.fullname || ""}
                onChange={handleChange}
              />
              {error.fullname && (
                <p className="text-red-500 text-sm">{error.fullname}</p>
              )}
            </div>
          <div className="grid md:grid-cols-2 gap-4">


            <div>
              <label className={labelClass}>Gender</label>
              <select
                name="gender"
                className={inputClass}
                value={formData.gender || ""}
                onChange={handleChange}
              >
                <option value="" hidden>Select Gender</option>
                   <option value="Male">Male</option>
                <option value="Female">Female</option>

              </select>
              {error.gender && (
                <p className="text-red-500 text-sm">{error.gender}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Birthdate</label>
              <input
                name="birthdate"
                type="date"
                className={inputClass}
                value={formData.birthdate || ""}
                onChange={handleChange}
              />
              {error.birthdate && (
                <p className="text-red-500 text-sm">{error.birthdate}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                name="phonenumber"
                className={inputClass}
                value={formData.phonenumber || ""}
                onChange={handleChange}
              />
              {error.phonenumber && (
                <p className="text-red-500 text-sm">{error.phonenumber}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Occupation</label>
              <input
                name="occupation"
                className={inputClass}
                value={formData.occupation || ""}
                onChange={handleChange}
              />
              {error.occupation && (
                <p className="text-red-500 text-sm">{error.occupation}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                name="email"
                type="email"
                className={inputClass}
                value={formData.email || ""}
                onChange={handleChange}
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>
            
            
           <div>
              <label className={labelClass}>Room #</label>
                <select
                  name="roomid"
                  className={inputClass}
                  value={formData.roomid || ""}
                  onChange={handleChange}
                >
                <option value="" hidden>
                  {formData.roomid ? formData.assignedRoomNumber : "Select Room"}
                </option>

                  {formData.rooms?.map((room) => (
                    <option key={room.roomid} value={room.roomid}>
                      {room.roomnumber}
                    </option>
                  ))}
                </select>
                {error.roomid && (
                <p className="text-red-500 text-sm">{error.roomid}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Address</label>
              <textarea
                name="address"
                className={`${inputClass} h-24`}
                value={formData.address || ""}
                onChange={handleChange}
              />
              {error.address && (
                <p className="text-red-500 text-sm">{error.address}</p>
              )}
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
                  name="contactname"
                  className={inputClass}
                  value={formData.contactname || ""}
                  onChange={handleChange}
                />
                {error.contactname && (
                  <p className="text-red-500 text-sm">{error.contactname}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Contact Number</label>
                <input
                  name="contactnumber"
                  className={inputClass}
                  value={formData.contactnumber || ""}
                  onChange={handleChange}
                />
                {error.contactnumber && (
                  <p className="text-red-500 text-sm">{error.contactnumber}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Relationship</label>
                <select
                  name="relationshipcontact"
                  className={inputClass}
                  value={formData.relationshipcontact || ""}
                  onChange={handleChange}
                >
                  <option value="" hidden>Select Relationship</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                </select>
                {error.relationshipcontact && (
                  <p className="text-red-500 text-sm">{error.relationshipcontact}</p>
                )}
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
