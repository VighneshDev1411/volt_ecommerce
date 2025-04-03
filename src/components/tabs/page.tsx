"use client";
import { useState } from "react";

const CategoryTabs = ({ onTabChange }: any) => {
  const [activeTab, setActiveTab] = useState("best-sellers");

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className="flex justify-center space-x-4 bg-white py-4">
      <button
        className={`px-6 py-2 font-semibold border-b-4 ${
          activeTab === "best-sellers"
            ? "border-red-600 text-red-600"
            : "border-transparent text-gray-600"
        }`}
        onClick={() => handleTabChange("best-sellers")}
      >
        BEST SELLERS
      </button>
      <button
        className={`px-6 py-2 font-semibold border-b-4 ${
          activeTab === "new-arrivals"
            ? "border-red-600 text-red-600"
            : "border-transparent text-gray-600"
        }`}
        onClick={() => handleTabChange("new-arrivals")}
      >
        NEW ARRIVALS
      </button>
    </div>
  );
};

export default CategoryTabs;
