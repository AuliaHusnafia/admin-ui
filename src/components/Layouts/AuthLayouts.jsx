import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children, title } = props;

  return (
    <div className="min-h-screen bg-gray-05 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <Logo />
        {title && (
          <h2 className="text-center text-xl font-semibold text-gray-01 mt-1 mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;