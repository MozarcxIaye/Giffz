import React from "react";
import { Link } from "react-router-dom"; 
import navBarData from "../../../constants/mock/Innernav";
import Dropdown from "../../../units/Dropdown";
import { IoIosArrowDown } from "react-icons/io";

// Navbar Component
const InnerNavbar = () => (
  <nav className="flex justify-center gap-4 p-2 bg-[#C92686]">
    {navBarData.navBar.map((navItem, index) => (
      <div
        key={index}
        className={`dropdown dropdown-hover ${
          navItem.dropdown.length > 0 ? "" : "no-dropdown"
        }`}
      >
        <Link
          to={navItem.link}
          tabIndex={0}
          className="btn m-1 bg-transparent text-white border-none"
        >
          {navItem.title}
          {navItem.title !== "HOME" && navItem.dropdown.length > 0 && (
            <IoIosArrowDown className="ml-2" />
          )}
        </Link>
        {navItem.dropdown.length > 0 && <Dropdown items={navItem.dropdown} />}
      </div>
    ))}
  </nav>
);

export default InnerNavbar;
