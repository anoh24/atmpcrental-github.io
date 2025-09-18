import useUserClientValidation from "../../../hooks/branchAdmin/userClientValidation";

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

  const tenantDetails = { personalInfo: { name: "John Doe", email: "john.doe@example.com", phone: "09123456789" },
   roomInfo: { roomNumber: "203", floor: "2nd", type: "Single" },
    paymentHistory: [ { month: "April 2025", amount: "₱5,000", status: "Paid" }, 
      { month: "May 2025", amount: "₱5,000", status: "Unpaid" }, ],
       uploadedDocs: ["ID.png", "Contract.pdf"], };

  // Render users table rows
  const renderUsers = () => {



    return users.map((user) => (
      
      <tr
        key={user.customerid}
        onClick={() => handleRowClick(user)}
        className="border-t hover:bg-gray-50 cursor-pointer"
      >

        <td className="p-3">{user.fullname}</td>
        <td className="p-3">{user.gender}</td>
        <td className="p-3">{user.birthdate}</td>
        <td className="p-3">{user.phonenumber}</td>
        <td className="p-3">{user.occupation}</td>
        <td className="p-3">{user.email}</td>
        <td className="p-3">{user.address}</td>
        <td className="p-3">{user.governmentid}</td>
        <td className="p-3">{user.roomnumber}</td>
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
    <div className="h-screen font-oswald px-6 md:px-20 bg-gray-100">
      {/* Modal */}
      {isModalOpen && selectRow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl text-black font-semibold mb-4">Validation</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-black font-medium text-sm mb-1">Email</label>
                <input
                  name="email"
                  type="text"
                  value={selectRow.email}
                  readOnly
                  className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="approval" className="text-black font-medium text-sm mb-1">
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
                  <option value={selectRow.approval}>{selectRow.approval}</option>
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
        <div className="bg-white rounded-xl shadow-md p-6 border mt-10 mb-10">
          <h2 className="text-lg font-bold text-black mb-4">🏠 Tenants List</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Gender</th>
                  <th className="text-left p-3">Birthdate</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Occupation</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Address</th>
                  <th className="text-left p-3">Gov. ID</th>
                  <th className="text-left p-3">Room</th>
                  <th className="text-left p-3">Contact Name</th>
                  <th className="text-left p-3">Contact Number</th>
                  <th className="text-left p-3">Relationship</th>
                  <th className="text-left p-3">Approval</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>{renderUsers()}</tbody>
            </table>
          </div>
        </div>

        {/* Tenant Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📌 Personal Info</h2>
            <ul className="space-y-2 text-black text-sm">
              <li><strong>Name:</strong> {tenantDetails.personalInfo.name}</li>
              <li><strong>Email:</strong> {tenantDetails.personalInfo.email}</li>
              <li><strong>Phone:</strong> {tenantDetails.personalInfo.phone}</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📦 Room Info</h2>
            <ul className="space-y-2 text-black text-sm">
              <li><strong>Room No:</strong> {tenantDetails.roomInfo.roomNumber}</li>
              <li><strong>Floor:</strong> {tenantDetails.roomInfo.floor}</li>
              <li><strong>Type:</strong> {tenantDetails.roomInfo.type}</li>
            </ul>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">💵 Payment History</h2>
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
                          entry.status === "Paid" ? "text-green-700" : "text-red-600"
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

          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📎 Uploaded Documents</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-1">
              {tenantDetails.uploadedDocs.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

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
