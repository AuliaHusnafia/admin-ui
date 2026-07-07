import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from "../Elements/Icon";

// Map category name to icon
const categoryIcon = {
  Housing: <Icon.House size={28} />,
  Food: <Icon.Food size={28} />,
  Transportation: <Icon.Transport size={28} />,
  Entertainment: <Icon.Gamepad size={28} />,
  Shopping: <Icon.Shopping size={28} />,
  Others: <Icon.Other size={28} />,
};

// Format date: "17 May 2023"
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

function CategoryCard({ category }) {
  // Support various field name conventions from API
  const name = category.name || category.category || category.categoryName || "Unknown";
  const totalAmount = category.totalAmount ?? category.total_amount ?? category.amount ?? 0;
  const percentage = category.percentage ?? category.change ?? 0;
  const isIncrease = category.isIncrease ?? category.is_increase ?? category.increase ?? false;
  const items = category.items ?? category.expenses ?? category.details ?? [];

  const icon = categoryIcon[name] ?? <Icon.Other size={28} />;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Category Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="text-gray-400">{icon}</div>
          <div>
            <div className="text-sm text-gray-400">{name}</div>
            <div className="text-xl font-bold text-gray-800">
              ${totalAmount}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div
            className={`flex items-center gap-1 font-semibold text-sm ${
              isIncrease ? "text-red-500" : "text-green-500"
            }`}
          >
            <span>{percentage}%</span>
            {isIncrease ? (
              <Icon.ArrowUp size={14} color="#ef4444" />
            ) : (
              <Icon.ArrowDown size={14} color="#22c55e" />
            )}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            Compare to the last month
          </div>
        </div>
      </div>

      {/* Sub Items */}
      <div className="divide-y divide-gray-50">
        {items.map((item, idx) => {
          const itemName = item.name ?? item.title ?? item.description ?? "-";
          const itemAmount = item.amount ?? item.price ?? 0;
          const itemDate = item.date ?? item.createdAt ?? item.created_at ?? "";
          return (
            <div
              key={idx}
              className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm text-gray-700">{itemName}</div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-800">
                  ${itemAmount}
                </div>
                <div className="text-xs text-gray-400">
                  {formatDate(itemDate)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CardExpenses({ data = [], loading }) {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div>
      <div className="text-2xl text-gray-02 mb-4">Expenses Comparison</div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-primary">
          <CircularProgress color="inherit" size={50} enableTrackSlot />
          <span className="mt-3">Loading Data</span>
        </div>
      ) : safeData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p>No expense data available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {safeData.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardExpenses;
