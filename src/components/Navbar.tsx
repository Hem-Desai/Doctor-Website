import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react"; // Removed Instagram import
import "../styles/animations.css";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover-lift">
              <svg
                className="h-8 w-8 text-emerald-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  className="animate-leaf"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
              <span className="text-xl font-semibold text-gray-900 font-playfair">
                Dr. Anupama Desai
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-rich-600 hover:text-rich-900 hover:bg-rich-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive("/contact")
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/patient-form"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive("/patient-form")
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
              }`}
            >
              Patient Form
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Doctor Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive("/")
                ? "text-emerald-600 bg-emerald-50"
                : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive("/contact")
                ? "text-emerald-600 bg-emerald-50"
                : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/patient-form"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive("/patient-form")
                ? "text-emerald-600 bg-emerald-50"
                : "text-rich-600 hover:text-emerald-500 hover:bg-rich-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Patient Form
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctor Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
