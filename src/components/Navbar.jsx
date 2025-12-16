import React from "react";
import { FaWrench, FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
            <FaWrench className="text-2xl text-primary" />
            <span>Novatech</span>
          </NavLink>
          {/* mobil dropdown  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 round-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* desktop navlinks */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <NavLinks />
          </ul>
        </div>
        {/*   CTA Button */}
        <div className="navbar-end">
          <NavLink Link to="/book-repair" className="btn btn-primary">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
