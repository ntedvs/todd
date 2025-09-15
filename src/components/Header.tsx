"use client"

import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Pennsylvania Department of Corrections
            </h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-[#55a1d5] font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#55a1d5] font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#55a1d5] font-medium">
              Services
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-[#55a1d5] font-medium">
              Benefits
            </a>
            <a
              href="#contact"
              className="bg-[#55a1d5] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1e3660] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#55a1d5] hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#hero" className="text-gray-700 hover:text-[#55a1d5] font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#55a1d5] font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#55a1d5] font-medium">
                Services
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-[#55a1d5] font-medium">
                Benefits
              </a>
              <a
                href="#contact"
                className="bg-[#55a1d5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e3660] transition-colors text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}