import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "2025-06-01", value: 10000 },
  { date: "2025-06-10", value: 12000 },
  { date: "2025-06-20", value: 15000 },
  { date: "2025-06-28", value: 14000 },
];

const UserDashboard = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-primary mb-4">User Dashboard</h2>
    <div className="bg-white rounded shadow p-4 mb-6">
      <div className="mb-4">
        <span className="font-semibold">Balance:</span> <span className="text-blue-700">$14,000</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Investments:</span> 3 assets
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-2">Recent Activity</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Deposited $2,000</li>
        <li>Bought 1 BTC</li>
        <li>Sold 10 AAPL</li>
      </ul>
    </div>
  </div>
);

export default UserDashboard;
