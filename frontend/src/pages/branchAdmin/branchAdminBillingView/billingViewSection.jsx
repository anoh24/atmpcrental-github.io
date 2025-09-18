import React, { useState } from 'react';

const BillingView = () => {
  const [receipt, setReceipt] = useState(null);

  const rentPayments = [
    { month: 'April 2025', amount: '₱5,000', status: 'Paid', date: 'April 5, 2025' },
    { month: 'May 2025', amount: '₱5,000', status: 'Unpaid', date: '-' },
  ];

  const invoices = [
    { invoiceNo: 'INV-001', dueDate: '2025-05-01', amount: '₱5,000', status: 'Paid' },
    { invoiceNo: 'INV-002', dueDate: '2025-06-01', amount: '₱5,000', status: 'Unpaid' },
  ];

  const handleReceiptChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  return (
    <div className="h-screen font-oswald px-6 md:px-20 bg-gray-100">
      <div className=" mx-auto max-w-3xl grid grid-cols-1 gap-6 mb-10">

        {/* Rent Payment History */}
        <div className="bg-white rounded-xl shadow-md p-6 border mt-10">
          <h2 className="text-lg font-bold text-black mb-4">💳 Rent Payments</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3">Month</th>
                  <th className="text-left p-3">Amount</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Date Paid</th>
                </tr>
              </thead>
              <tbody>
                {rentPayments.map((payment, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">{payment.month}</td>
                    <td className="p-3">{payment.amount}</td>
                    <td className={`p-3 font-semibold ${payment.status === 'Paid' ? 'text-green-700' : 'text-red-600'}`}>
                      {payment.status}
                    </td>
                    <td className="p-3">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg font-bold text-black mb-4">🧾 Due/Paid Invoices</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3">Invoice No.</th>
                  <th className="text-left p-3">Due Date</th>
                  <th className="text-left p-3">Amount</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">{inv.invoiceNo}</td>
                    <td className="p-3">{inv.dueDate}</td>
                    <td className="p-3">{inv.amount}</td>
                    <td className={`p-3 font-semibold ${inv.status === 'Paid' ? 'text-green-700' : 'text-red-600'}`}>
                      {inv.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload Receipts */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg font-bold text-black mb-4">📤 Upload Receipt</h2>
          <form className="flex flex-col gap-4 text-sm">
            <input
              type="file"
              onChange={handleReceiptChange}
              className="border p-2 rounded-md bg-gray-50"
              accept="image/*,application/pdf"
            />
            {receipt && <p className="text-green-700">Selected File: {receipt.name}</p>}
            <button
              type="submit"
              className="self-start bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-700 transition"
            >
              ✅ Confirm Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingView;
