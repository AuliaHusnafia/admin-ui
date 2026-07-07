import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout(props) {
  const { children, title } = props;
  const { theme, mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name} ${mode} auth-bg`}>
      <div className={`w-full max-w-md rounded-[40px] shadow-xl p-10 ${mode === "dark" ? "bg-slate-900 text-white" : "bg-white text-gray-900"}`}>
        <div className="mb-8">
          <Logo />
        </div>
        {title && (
          <h2 className={mode === "dark" ? "text-center text-2xl font-semibold mb-6 text-white" : "text-center text-2xl font-semibold mb-6 text-gray-800"}>
            {title}
          </h2>
        )}
        {children}
        <div className="mt-6 flex flex-col items-center gap-3 text-sm">
          <span className={mode === "dark" ? "text-gray-300" : "text-gray-500"}>
            Toggle aplikasi ke {mode === "light" ? "dark" : "light"} mode
          </span>
          <button
            type="button"
            onClick={toggleMode}
            className={mode === "dark"
              ? "rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
              : "rounded-full border border-gray-300 bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-100"
            }
          >
            {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;