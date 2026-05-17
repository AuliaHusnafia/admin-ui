import React from "react";

function Button(props) {
  const { children, type = "submit", variant = "primary", onClick } = props;

  const baseClasses = "h-12 rounded-md text-sm w-full";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-02",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;

  return (
    <>
      <button className={finalClasses} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;