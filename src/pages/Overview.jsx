// src/pages/Overview.jsx
import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';

function Overview() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, John Doe!</h2>
          <p className="text-gray-500 mt-2">Here's what's happening with your finances today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm opacity-80">Total Balance</p>
            <p className="text-3xl font-bold mt-2">$12,450.00</p>
            <p className="text-sm mt-2 opacity-80">↑ 12.5% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm opacity-80">Monthly Income</p>
            <p className="text-3xl font-bold mt-2">$5,200.00</p>
            <p className="text-sm mt-2 opacity-80">↑ 8.2% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <p className="text-sm opacity-80">Monthly Expenses</p>
            <p className="text-3xl font-bold mt-2">$3,450.00</p>
            <p className="text-sm mt-2 opacity-80">↓ 5.1% from last month</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
            <button className="text-blue-600 text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { name: "Spotify", date: "May 19, 2023", amount: "-$12.99", type: "expense" },
              { name: "Salary", date: "May 15, 2023", amount: "+$5,000.00", type: "income" },
              { name: "Amazon", date: "May 14, 2023", amount: "-$89.99", type: "expense" },
              { name: "Uber Eats", date: "May 12, 2023", amount: "-$24.50", type: "expense" },
            ].map((transaction, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-800">{transaction.name}</p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Overview;