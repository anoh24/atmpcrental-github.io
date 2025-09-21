import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
 
  const tenants = [
    { name: 'Students', value: 60 },
    { name: 'Employees', value: 40 }
  ];

  const roomStats = [
    { name: 'Occupied', value: 12 },
    { name: 'Vacant', value: 8 },
    { name: 'Reserved', value: 5 },
    { name: 'Maintenance', value: 3 }
  ];

  const billing = [
    { month: 'Jan', income: 50000 },
    { month: 'Feb', income: 45000 },
    { month: 'Mar', income: 60000 },
    { month: 'Apr', income: 58000 },
    { month: 'May', income: 62000 }
  ];

  const notifications = [
    { id: 1, message: 'Payment received from Juan Dela Cruz', date: 'May 25, 2025' },
    { id: 2, message: 'Room 102 is now vacant', date: 'May 24, 2025' },
    { id: 3, message: 'Maintenance request completed for Room 104', date: 'May 23, 2025' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="h-screen mx-auto bg-gray-100 font-oswald px-6 py-10 md:px-20">
      <h1 className="text-3xl font-black text-black mb-10">📊 Rental Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {/* Pie Chart: Tenant Type */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">👥 Tenant Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={tenants}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {tenants.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart: Room Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">🏠 Room Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={roomStats}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {roomStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: Billing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border col-span-1 md:col-span-2 hover:shadow-xl transition-all">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">💵 Monthly Income</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={billing}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#00C49F" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Notifications */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">🔔 Recent Notifications</h2>
        <ul className="divide-y divide-gray-200">
          {notifications.map((note) => (
            <li key={note.id} className="py-3">
              <div className="text-black font-medium">{note.message}</div>
              <div className="text-sm text-gray-500">{note.date}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border">
          <h3 className="text-md font-semibold text-gray-700 mb-2">🏘️ Total Rooms</h3>
          <p className="text-2xl font-bold text-indigo-600">28</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border">
          <h3 className="text-md font-semibold text-gray-700 mb-2">👤 Total Tenants</h3>
          <p className="text-2xl font-bold text-green-600">45</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border">
          <h3 className="text-md font-semibold text-gray-700 mb-2">📅 Active Contracts</h3>
          <p className="text-2xl font-bold text-blue-600">22</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border">
          <h3 className="text-md font-semibold text-gray-700 mb-2">📈 This Month's Income</h3>
          <p className="text-2xl font-bold text-emerald-600">₱62,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;