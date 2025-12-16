import React from "react";
import { FaPhone, FaComment, FaClock, FaMapMarkerAlt } from "react-icons/fa";

// ? Create a header and navigation.
const Header = () => {
  return (
    <header className="bg-primary text-primary-content py-2 hidden md:block">
      <div className="align-element flex flex-col sm:flex-row justify-between items-center text-sm ml-4 mr-4">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-1">
            <FaPhone className="text-sm" />
            <span> 1(415)215-57-40</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            <span>
              88 Belvedere st. suite 209 Second Floor San Rafael CA 94901
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FaComment className="text-xs" />
          <span>Se Habla Español </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
