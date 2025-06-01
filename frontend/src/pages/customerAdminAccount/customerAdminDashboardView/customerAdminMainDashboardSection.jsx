import React from "react";

const transactions = [
  {
    id: 1,
    date: "2025-05-28",
    amount: "$1,200",
    receiptUrl: "#",
  },
  {
    id: 2,
    date: "2025-06-01",
    amount: "$900",
    receiptUrl: "#",
  },
  {
    id: 3,
    date: "2025-06-05",
    amount: "$1,500",
    receiptUrl: "#",
  },
];

const notifications = {
  landlordMessages: [
    "Your rent for Downtown Apartment has been received.",
    "Reminder: Lease renewal is due next month.",
  ],
  adminAnnouncements: [
    "System maintenance scheduled for June 10th.",
    "New community guidelines have been posted.",
  ],
  maintenanceUpdates: [
    "Elevator repair completed in your building.",
    "Scheduled water shutdown on June 3rd from 9 AM to 1 PM.",
  ],
};

const CustomerAdminMainDashboardSection = () => {
  return (
    <div className="relative mt-28 flex flex-col gap-6 max-w-3xl mx-auto px-2 sm:px-4 font-oswald mb-10">
      {/* Welcome Card */}
      <div className="bg-white shadow-md rounded-md p-5">
        <h1 className="sm:text-2xl md:text-3xl text-2xl text-gray-600 font-black p-5 w-auto">
          Hello, <span className="text-black">John D. Monkey! </span>
          <br />
          <span className="text-xl">Welcome to your Account Profile</span>
        </h1>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-black border-b pb-2">
          Payment History
        </h2>

        {/* Scrollable wrapper for horizontal overflow */}
        <div className="overflow-x-auto">
          <table className="min-w-[400px] w-full border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-gray-100 uppercase text-black text-sm">
              <tr>
                <th className="py-3 px-4 font-medium">Date</th>
                <th className="py-3 px-4 font-medium">Amount</th>
                <th className="py-3 px-4 font-medium">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(({ id, date, amount, receiptUrl }) => (
                <tr key={id} className="text-sm">
                  <td className="py-3 px-4 text-black text-center">{date}</td>
                  <td className="py-3 px-4 text-black text-center">{amount}</td>
                  <td className="py-3 px-4 text-center">
                    <a
                      href={receiptUrl}
                      download
                      className="text-green-600 hover:text-green-800 font-semibold text-sm"
                      aria-label={`Download receipt for transaction on ${date}`}
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notifications & Messages */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-black border-b pb-2">
          Notifications & Messages
        </h2>

        <div className="space-y-6">
          {/* Landlord Messages */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Landlord Messages</h3>
            <ul className="list-disc list-inside text-gray-700">
              {notifications.landlordMessages.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          </div>

          {/* Admin Announcements */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Admin Announcements</h3>
            <ul className="list-disc list-inside text-gray-700">
              {notifications.adminAnnouncements.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          </div>

          {/* Maintenance Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Maintenance Updates</h3>
            <ul className="list-disc list-inside text-gray-700">
              {notifications.maintenanceUpdates.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAdminMainDashboardSection;
