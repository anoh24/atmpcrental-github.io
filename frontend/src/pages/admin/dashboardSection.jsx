import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 16000 },
  { month: "May", revenue: 19000 },
];

const occupancyData = [
  { branch: "Branch CDO", occupancy: 85 },
  { branch: "Branch MARAWI", occupancy: 78 },
];

const tenantTypeData = [
  { name: "Employees", value: 300 },
  { name: "Students", value: 200 },
];

const turnoverData = [
  { month: "Jan", moveIns: 30, moveOuts: 10 },
  { month: "Feb", moveIns: 40, moveOuts: 15 },
  { month: "Mar", moveIns: 35, moveOuts: 20 },
  { month: "Apr", moveIns: 45, moveOuts: 18 },
];

const COLORS = ["#00C49F", "#FF8042"];

const  SuperAdminCharts = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 p-4 z-2">
      {/* Revenue Over Time */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis unit="₱" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Occupancy Rate Comparison */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Occupancy Rate by Branch</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={occupancyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="branch" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="occupancy" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tenant Type Pie Chart */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Tenant Types</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={tenantTypeData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {tenantTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Room Turnover Rate */}
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Room Turnover Rate</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={turnoverData}>
            <defs>
              <linearGradient id="colorMoveIns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMoveOuts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="moveIns" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMoveIns)" />
            <Area type="monotone" dataKey="moveOuts" stroke="#ef4444" fillOpacity={1} fill="url(#colorMoveOuts)" />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default SuperAdminCharts;