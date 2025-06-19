import React, { useState } from "react";
import { Link } from "react-router-dom";
import CargoProLogo from "../assets/CargoProLogo.png";
import SolutionsDropdown from "./solutions-dropdown";
import SignUpDropdown from "./SignUpDropdown";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (menu === "solutions") {
      setShowSolutions(!showSolutions);
      setShowCompany(false);
    } else if (menu === "company") {
      setShowCompany(!showCompany);
      setShowSolutions(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowSolutions(false);
    setShowCompany(false);
  };

  return (
    <nav className="bg-[#f0f3fc] px-4 md:px-16 py-4 relative z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          <img src={CargoProLogo} alt="CargoPro Logo" className="h-8 w-auto" />
          <div className="font-raleway font-semibold text-[24px] leading-[24px] text-primaryBlue">
            CargoPro
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-[16px] font-medium text-primaryBlue relative">
          <li className="relative">
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center space-x-1 hover:text-primaryBlue"
            >
              <span>Solutions</span>
              {showSolutions ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {showSolutions && (
              <SolutionsDropdown closeMobileMenu={closeMobileMenu} />
            )}
          </li>

          <li>
            <Link to="/industries" className="hover:text-primaryBlue">
              Industries
            </Link>
          </li>

          <li>
            <Link to="/blogs" className="hover:text-primaryBlue">
              Blog
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center space-x-1 hover:text-primaryBlue"
            >
              <span>Company</span>
              {showCompany ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {showCompany && (
              <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md w-40 py-2 z-50">
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contacts#contact-us" className="hover:text-primaryBlue">
              Contacts
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <SignUpDropdown />
          <a
            href="https://calendly.com/pranav-cargopro/30min"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition inline-block"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primaryBlue" />
            ) : (
              <Menu className="h-6 w-6 text-primaryBlue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 py-6 bg-[#f0f3fc] rounded-md shadow-lg space-y-3 text-primaryBlue text-[16px] font-medium">
          <button
            onClick={() => toggleDropdown("solutions")}
            className="w-full flex justify-between items-center py-2"
          >
            <span>Solutions</span>
            {showSolutions ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {showSolutions && (
            <SolutionsDropdown closeMobileMenu={closeMobileMenu} />
          )}

          <a href="/industries" className="block hover:text-primaryBlue">
            Industries
          </a>

          <a href="/blogs" className="block hover:text-primaryBlue">
            Blog
          </a>

          <button
            onClick={() => toggleDropdown("company")}
            className="w-full flex justify-between items-center py-2"
          >
            <span>Company</span>
            {showCompany ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {showCompany && (
            <div className="space-y-2 pl-4">
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block hover:text-primaryBlue"
              >
                About
              </Link>
              <Link
                to="/careers"
                onClick={closeMobileMenu}
                className="block hover:text-primaryBlue"
              >
                Careers
              </Link>
            </div>
          )}

          <a href="/contacts" className="block hover:text-primaryBlue">
            Contact
          </a>

          <hr className="my-3" />
          <SignUpDropdown isMobile={true} />
          <button className="w-full bg-blue-700 text-white rounded-full py-2 hover:bg-blue-800 transition">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
