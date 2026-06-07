import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout(props) {
  const { children, title } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name}`}>
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-xl p-10">
        <div className="mb-8">
          <Logo />
        </div>
        {title && (
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;