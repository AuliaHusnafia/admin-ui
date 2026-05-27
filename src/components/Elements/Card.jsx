import React from "react";

function Card(props) {
  const { title, desc, link, height } = props;

  return (
    <div
      className={`
        bg-white
        rounded-2xl
        p-6
        shadow-lg
        ${height || "min-h-[180px]"}
      `}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl text-gray-02 font-medium">
          {title}
        </h2>

        {link && (
          <span className="text-sm text-gray-03 cursor-pointer">
            View All
          </span>
        )}
      </div>

      <p className="text-[15px] leading-8 text-gray-700">
        {desc}
      </p>
    </div>
  );
}

export default Card;