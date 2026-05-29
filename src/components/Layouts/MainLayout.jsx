// src/components/Layouts/MainLayout.jsx
import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

function MainLayout(props) {
  const { children } = props;

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/overview" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balances" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bills" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expenses" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goals" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/settings" },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        <aside className="bg-defaultBlack w-64 text-special-bg2 flex flex-col justify-between px-6 py-12">
          <div className="mb-10">
            <Logo variant="secondary" />
            <nav className="flex flex-col gap-2 mt-10">
              {menu.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-md transition-all duration-200 hover:text-white hover:font-bold hover:bg-primary ${isActive
                      ? "bg-primary text-white font-bold"
                      : "text-special-bg2"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer mb-8">
              <div className="mx-auto sm:mx-0">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">
                <Icon.Detail size={15} />
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-special-mainBg flex-1 flex flex-col">
          <header className="border border-b border-gray-05 px-6 py-7 flex justify-between items-center">
            <div className="flex items-center">
              <div className="font-bold text-2xl me-6">Username</div>
              <div className="text-gray-03 hidden sm:block">
                <Icon.ChevronRight size={20} />
                <span>May 19, 2023</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="me-10">
                <NotificationsIcon className="text-gray-01 scale-110" /></div>
              <Input backgroundColor="bg-white" border="border-white" />
            </div>
          </header>
          <main className="flex-1 px-6 py-4">{children}</main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;