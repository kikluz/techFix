import React from "react";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

// ? Create a header and navigation.
const Header = () => {
  return (
    <header className="bg-primary text-primary-content py-2">
      <div className="align-element flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-1">
            <FaPhone className="text-sm" />
            <span> (555) 123-TECH</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            <span>123 Tech Street, City</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-xs" />
          <span>Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
