import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#0d1117] fixed top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Hamburger + Brand */}
            <div className="flex justify-start items-center space-x-6">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md hover:bg-white/10"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
              <span className="text-2xl font-bold text-blue-400">NoteLog</span>
            </div>

            {/* Right: Profile */}
            <img
              src=""
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-64 bg-[#0d1117] h-full shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu Links */}
            <nav className="mt-10 flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gray-300 text-lg">
                Dashboard
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-lg">
                Notes
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-lg">
                Features
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-lg">
                About
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
