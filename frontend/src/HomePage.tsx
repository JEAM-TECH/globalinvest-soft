const HomePage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
      <h1 className="text-4xl font-bold text-primary mb-4 text-center">GlobalInvestSoft</h1>
      <p className="text-blue-800 text-center mb-6">A modern platform for investing, tracking portfolios, and managing assets securely.</p>
      <div className="flex flex-col gap-4">
        <button className="bg-primary text-white py-2 rounded hover:bg-primary-dark transition">Login</button>
        <button className="border border-primary text-primary py-2 rounded hover:bg-primary-light transition">Register</button>
      </div>
    </div>
  </div>
);

export default HomePage;
