import React, { useState } from "react";

const billingData = [
  {
    id: "INV-2025-001",
    period: "May 1–31, 2025",
    issueDate: "2025-06-01",
    dueDate: "2025-06-10",
    amount: 8350,
    status: "Unpaid",
    paymentDate: null,
    method: null,
    breakdown: [
      { type: "Monthly Rent", amount: 6000 },
      { type: "Electricity (May)", amount: 1200 },
      { type: "Water (May)", amount: 350 },
      { type: "Internet", amount: 500 },
      { type: "Maintenance Fee", amount: 300 },
    ],
  },
  {
    id: "INV-2025-002",
    period: "April 1–30, 2025",
    issueDate: "2025-05-01",
    dueDate: "2025-05-10",
    amount: 8100,
    status: "Paid",
    paymentDate: "2025-05-05",
    method: "GCash",
    breakdown: [
      { type: "Monthly Rent", amount: 6000 },
      { type: "Electricity (Apr)", amount: 1100 },
      { type: "Water (Apr)", amount: 350 },
      { type: "Internet", amount: 500 },
      { type: "Maintenance Fee", amount: 150 },
    ],
  },
];

const CustomerAdminAccountBillingSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="space-y-4 font-oswald max-w-3xl mt-28 mx-auto p-1">
      {billingData.map((bill) => (
        <div
          key={bill.id}
          className="rounded-2xl shadow-md bg-white p-4 space-y-4 mx-3"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-black">Invoice: {bill.id}</p>
              <p className="text-sm text-gray-600">Period: {bill.period}</p>
              <p className="text-sm text-gray-600">Issued: {bill.issueDate}</p>
              <p className="text-sm text-gray-600">Due: {bill.dueDate}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-black">₱{bill.amount.toLocaleString()}</p>
              <p
                className={`text-sm font-medium ${
                  bill.status === "Paid"
                    ? "text-green-600"
                    : bill.status === "Overdue"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {bill.status}
              </p>
              {bill.paymentDate && (
                <p className="text-xs text-gray-600">Paid on: {bill.paymentDate}</p>
              )}
              {bill.method && (
                <p className="text-xs text-gray-600">Method: {bill.method}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => toggleDetails(bill.id)}
              className="flex items-center gap-1 text-black hover:underline text-sm"
              aria-expanded={expanded === bill.id}
            >
              <span>{expanded === bill.id ? "▲" : "▼"}</span>
              {expanded === bill.id ? "Hide Details" : "View Details"}
            </button>

            {bill.status !== "Paid" && (
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
                Pay Now
              </button>
            )}
          </div>

          {expanded === bill.id && (
            <div className="mt-4 border-t pt-3 text-black">
              <p className="text-sm font-semibold mb-2">Breakdown</p>
              <div className="space-y-1 text-sm">
                {bill.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } px-2 py-1 text-gray-800`}
                  >
                    <span>{item.type}</span>
                    <span>₱{item.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold pt-2 border-t px-2 py-1 text-black">
                  <span>Total</span>
                  <span>₱{bill.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerAdminAccountBillingSection;
