const AdminDashboard = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-primary mb-4">Admin Dashboard</h2>
    <div className="bg-white rounded shadow p-4 mb-6">
      <h3 className="font-semibold mb-2">User List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">KYC</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">admin@example.com</td>
              <td className="border px-4 py-2">ADMIN</td>
              <td className="border px-4 py-2">APPROVED</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-2">System Logs</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>User admin@example.com logged in.</li>
        <li>Portfolio updated for user 1.</li>
      </ul>
    </div>
  </div>
);

export default AdminDashboard;
