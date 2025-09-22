import React, { useState } from "react";
import useUserClientValidation from "../../../hooks/branchAdmin/userClientValidation";
import userClientProfile from "../../../hooks/branchAdmin/userClientProfile";
const TenantView = () => {
  const {
    users,
    selectRow,
    isModalOpen,
    validationApproval,
    setValidationApproval,
    handleRowClick,
    closeModal,
    handleSubmit,
  } = useUserClientValidation();
  const { userClient,
        profilePic,
        fetchUsersClient
  } = userClientProfile();
  const [searchTerm, setSearchTerm] = useState("");

  const tenantDetails = {

    roomInfo: { roomNumber: "203", floor: "2nd", type: "Single" },
    paymentHistory: [
      { month: "April 2025", amount: "₱5,000", status: "Paid" },
      { month: "May 2025", amount: "₱5,000", status: "Unpaid" },
    ],
    uploadedDocs: ["ID.png", "Contract.pdf"],
  };

  // Render users table rows with filter
  const renderUsers = () => {
    return users
      .filter((user) =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((user) => (
        <tr
          key={user.customerid}
          onClick = {() => fetchUsersClient(user.customerid)}
          onDoubleClick={() => handleRowClick(user)}
          className="border-t hover:bg-gray-50 cursor-pointer"
        >
          <td className="p-3">{user.fullname}</td>
          <td className="p-3">{user.gender}</td>
          <td className="p-3">{user.birthdate}</td>
          <td className="p-3">{user.phonenumber}</td>
          <td className="p-3">{user.occupation}</td>
          <td className="p-3">{user.email}</td>
          <td className="p-3">{user.address}</td>
          <td className="p-3">{user.contactname}</td>
          <td className="p-3">{user.contactnumber}</td>
          <td className="p-3">{user.relationshipcontact}</td>
          <td
            className={`p-3 font-semibold ${
              user.approval === "Invalidated" ? "text-red-500" : "text-green-700"
            }`}
          >
            {user.approval}
          </td>
          <td
            className={`p-3 font-semibold ${
              user.status === "Active" ? "text-green-700" : "text-gray-500"
            }`}
          >
            {user.status}
          </td>
        </tr>
      ));
  };

  return (
    <div className="h-full font-oswald px-6 md:px-20 bg-gray-100">
      {/* Modal */}
      {isModalOpen && selectRow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl text-black font-semibold mb-4">Validation</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-black font-medium text-sm mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  value={selectRow.email}
                  readOnly
                  className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="approval"
                  className="text-black font-medium text-sm mb-1"
                >
                  Select Approval
                </label>
                <select
                  name="approval"
                  id="approval"
                  className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
                  value={validationApproval}
                  onChange={(e) => setValidationApproval(e.target.value)}
                  required
                >
                  <option value={selectRow.approval}>
                    {selectRow.approval}
                  </option>
                  <option value="Validated">Validated</option>
                  <option value="Invalidated">Invalidated</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded"
                >
                  Validate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-md p-6 border mt-10">
          <h2 className="text-lg font-bold text-black mb-4">🏠 Tenants List</h2>

          {/* Search box */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Scrollable wrapper */}
          <div className="overflow-x-auto max-h-60 overflow-y-auto">
            <table className="text-sm text-black table-fixed w-full">
              <thead className="sticky top-0 bg-gray-200 z-10">
                <tr>
                  <th className="text-left p-3 w-40">Full Name</th>
                  <th className="text-left p-3 w-20">Gender</th>
                  <th className="text-left p-3 w-28">Birthdate</th>
                  <th className="text-left p-3 w-32">Phone #</th>
                  <th className="text-left p-3 w-40">Occupation</th>
                  <th className="text-left p-3 w-60">Email</th>
                  <th className="text-left p-3 w-72">Address</th>
                  <th className="text-left p-3 w-40">Contact Name</th>
                  <th className="text-left p-3 w-40">Contact Number</th>
                  <th className="text-left p-3 w-32">Relationship</th>
                  <th className="text-left p-3 w-28">Approval</th>
                  <th className="text-left p-3 w-28">Status</th>
                </tr>
              </thead>
              <tbody>{renderUsers()}</tbody>
            </table>
          </div>
        </div>

        {/* Tenant Details */}
        <div className="max-w-3xl mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 mb-10">
            {/* Profile Picture Centered */}
            <div className="flex  mb-6">
              <img
                 src={profilePic || "https://placehold.co/150x150"}
                alt="Profile"
                className="w-48 h-48 rounded-2xl object-cover border-2 border-gray-300 shadow"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              📌 Personal Information
            </h2>

            {/* Personal Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
              <div>
                <strong>Full Name:</strong>
                {userClient?.fullname || ""}
              </div>
              <div>
                <strong>Gender:</strong> {userClient?.gender || ""}
              </div>
              <div>
                <strong>Birthdate:</strong>
                {userClient?.birthdate || ""}
              </div>
              <div>
                <strong>Phone #:</strong> {userClient?.phonenumber || ""}
              </div>
              <div>
                <strong>Occupation:</strong>
                {userClient?.occupation || ""}
              </div>
              <div>
                <strong>Email:</strong> {userClient?.email || ""}
              </div>
              <div className="sm:col-span-2">
                <strong>Address:</strong> {userClient?.address || ""}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Emergency Contact Section */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              🧑‍🤝‍🧑 Emergency Contact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
              <div>
                <strong>Contact Name:</strong>
                {userClient?.contactname || ""}
              </div>
              <div>
                <strong>Contact Number:</strong>
                {userClient?.contactnumber || ""}
              </div>
              <div>
                <strong>Relationship:</strong>
                {userClient?.relationshipcontact || ""}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Status Section */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              📋 Rental Status
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
              <div>
                <strong>Approval:</strong>
                {userClient?.approval || ""}
              </div>
              <div>
                <strong>Status:</strong> {userClient?.status || ""}
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border mb-10">
            <h2 className="text-lg font-bold text-black mb-4">
              💵 Payment History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-black">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="text-left p-3">Month</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tenantDetails.paymentHistory.map((entry, idx) => (
                    <tr key={idx} className="border-t hover:bg-gray-50">
                      <td className="p-3">{entry.month}</td>
                      <td className="p-3">{entry.amount}</td>
                      <td
                        className={`p-3 font-semibold ${
                          entry.status === "Paid"
                            ? "text-green-700"
                            : "text-red-600"
                        }`}
                      >
                        {entry.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Uploaded Docs */}
          <div className="bg-white rounded-xl shadow-md p-6 border mb-10">
            <h2 className="text-lg font-bold text-black mb-4">
              📎 Uploaded Documents
            </h2>
            <ul className="list-disc list-inside text-sm text-black space-y-1">
              {tenantDetails.uploadedDocs.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="flex justify-end items-center md:col-span-2">
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md transition duration-200">
              🚪 Move-out / Terminate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantView;
