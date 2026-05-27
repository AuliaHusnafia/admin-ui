// src/components/Layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../Elements/Icon';
import NotificationsIcon from '@mui/icons-material/Notifications'; // ✅ Tambahkan import

function MainLayout({ children }) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Overview', path: '/overview', icon: 'Overview' },
    { name: 'Balances', path: '/balances', icon: 'Balance' },
    { name: 'Transaction', path: '/transaction', icon: 'Transaction' },
    { name: 'Bills', path: '/bills', icon: 'Bill' },
    { name: 'Expenses', path: '/expenses', icon: 'Expense' },
    { name: 'Goals', path: '/goals', icon: 'Goal' },
    { name: 'Settings', path: '/settings', icon: 'Setting' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Finebank.IO</h1>
          <h1 className={`font-bold text-xl ${isSidebarOpen && 'hidden'}`}>F</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex items-center px-4 py-3 rounded-lg transition-all duration-200
                  ${active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                <span className="w-6 h-6">
                  {item.icon === 'Overview' && <Icon.Overview size={20} />}
                  {item.icon === 'Balance' && <Icon.Balance size={20} />}
                  {item.icon === 'Transaction' && <Icon.Transaction size={20} />}
                  {item.icon === 'Bill' && <Icon.Bill size={20} />}
                  {item.icon === 'Expense' && <Icon.Expense size={20} />}
                  {item.icon === 'Goal' && <Icon.Goal size={20} />}
                  {item.icon === 'Setting' && <Icon.Setting size={20} />}
                </span>
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Sidebar */}
        <div className="border-t border-gray-800 p-4 space-y-3">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>
              <p className="text-sm font-medium">John Doe</p>
              <Link to="/profile" className="text-xs text-gray-400 hover:text-white">
                View Profile
              </Link>
            </div>
          </div>
          
          <Link
            to="/login"
            className={`
              w-full flex items-center px-4 py-2 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all
              ${!isSidebarOpen && 'justify-center'}
            `}
          >
            <Icon.Logout size={20} />
            <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header - Username, Date, dan Notifikasi */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Username & Date */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Username</h2>
              <p className="text-sm text-gray-500">May 19, 2023</p>
            </div>
            
            {/* Right side - Notifikasi & Toggle Sidebar button */}
            <div className="flex items-center space-x-4">
              {/* ✅ Icon Notifikasi */}
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <NotificationsIcon className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Toggle Sidebar Button */}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;