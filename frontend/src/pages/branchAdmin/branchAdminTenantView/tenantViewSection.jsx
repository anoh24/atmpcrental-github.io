import UserList from "../../../hooks/branchAdmin/userlist";
const TenantView = () => {
  

  const tenantDetails = { 
    personalInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '09123456789',
    },
    roomInfo: {
      roomNumber: '203',
      floor: '2nd',
      type: 'Single',
    },
    paymentHistory: [
      { month: 'April 2025', amount: '₱5,000', status: 'Paid' },
      { month: 'May 2025', amount: '₱5,000', status: 'Unpaid' },
    ],
    uploadedDocs: ['ID.png', 'Contract.pdf'],
  };



  return (
    <div className="h-full font-oswald px-6 md:px-20 bg-gray-100">
      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 mb-10">
        {/* TENANTS LIST TABLE */}
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
              <tbody>
                <UserList />
              </tbody>
            </table>
          </div>
        </div>


        {/* TENANT DETAILS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PERSONAL INFO */}
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📌 Personal Info</h2>
            <ul className="space-y-2 text-black text-sm">
              <li><strong>Name:</strong> {tenantDetails.personalInfo.name}</li>
              <li><strong>Email:</strong> {tenantDetails.personalInfo.email}</li>
              <li><strong>Phone:</strong> {tenantDetails.personalInfo.phone}</li>
            </ul>
          </div>

          {/* ROOM INFO */}
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📦 Room Info</h2>
            <ul className="space-y-2 text-black text-sm">
              <li><strong>Room No:</strong> {tenantDetails.roomInfo.roomNumber}</li>
              <li><strong>Floor:</strong> {tenantDetails.roomInfo.floor}</li>
              <li><strong>Type:</strong> {tenantDetails.roomInfo.type}</li>
            </ul>
          </div>

          {/* PAYMENT HISTORY */}
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
                      <td className={`p-3 font-semibold ${entry.status === 'Paid' ? 'text-green-700' : 'text-red-600'}`}>
                        {entry.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* UPLOADED DOCUMENTS */}
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h2 className="text-lg font-bold text-black mb-4">📎 Uploaded Documents</h2>
            <ul className="list-disc list-inside text-sm text-black space-y-1">
              {tenantDetails.uploadedDocs.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* MOVE-OUT BUTTON */}
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
