"use client"
import { useState } from "react";
import Image from 'next/image';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="pt-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
            <img src="/logo.svg" alt="My Icon" width={50} height={50} />
            <img className="ml-2" src="/text_logo.svg" alt="My Icon" width={80} height={80} />
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-base font-medium hover:text-gray-300">
                About Us
              </a>
              <a href="#" className="text-base font-medium hover:text-gray-300">
                Features
              </a>
              <a href="#" className="text-base font-medium hover:text-gray-300">
                Solution
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                      <img src="/menubar.svg" alt="My Icon" width={20} height={20} />

                ) : (
                      <img src="/menubar.svg" alt="My Icon" width={20} height={20} />

                )}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Home
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                About Us
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Features
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                Solution
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }