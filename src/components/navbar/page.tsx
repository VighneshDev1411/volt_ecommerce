"use client";

import { useState } from "react";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import volt_logo from "../../../public/assets/images/volt.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar({
  setCartOpen,
}: {
  setCartOpen: (open: boolean) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav
      className={`bg-0A2463 shadow-md border-t-4 border-[#222222] ${inter.className}`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src={volt_logo} alt="logo" className="w-16" />
        </div>

        <div className="hidden md:flex space-x-6 text-white-800 font-medium">
          {[
            "CRAZY DEALS",
            "WELLNESS",
            "FITNESS",
            "SHOP BY CONCERN",
            "WEIGHT MANAGEMENT",
            "BRANDS",
          ].map((menu) => (
            <div className="relative" key={menu}>
              <button
                onClick={() => toggleDropdown(menu)}
                className="hover:text-gray-700 flex items-center space-x-1"
              >
                <span>{menu}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen === menu && (
                <div className="absolute bg-white shadow-lg p-3 mt-2 w-48 z-10">
                  <p className="text-gray-600 hover:text-red-600">
                    Submenu Item 1
                  </p>
                  <p className="text-gray-600 hover:text-red-600">
                    Submenu Item 2
                  </p>
                </div>
              )}
            </div>
          ))}
          <a href="#" className="hover:text-gray-600">
            BLOGS
          </a>
        </div>

        <div className="flex items-center space-x-4 text-white-800">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          <ShoppingCart
            className="w-5 h-5 cursor-pointer hover:text-gray-600"
            onClick={() => setCartOpen(true)}
          />
        </div>
      </div>
    </nav>
  );
}
