import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/services", text: "services" },
  { id: 3, url: "/book-repair", text: "book repair" },
  { id: 4, url: "/repair-status", text: "repair status" },
  { id: 5, url: "/about", text: "about" },
  { id: 6, url: "/contact", text: "contact" },
];
const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
