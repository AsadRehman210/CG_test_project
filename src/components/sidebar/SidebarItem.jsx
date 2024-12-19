import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dropdown from "../../assets/images/dropdown.svg"

const SidebarItem = ({ item, collapsed }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <div className="flex items-center">
        <NavLink
          to={item.route || "#"}
          className={({ isActive }) =>
            `w-full py-2 ${!collapsed ? "px-2" : "px-0 justify-center"} rounded flex items-center space-x-3 cursor-pointer hover:bg-gray-700 ${
              isActive || item.active ? "bg-gray-700" : ""
            }`
          }
          onClick={item.dropdown ? toggleDropdown : undefined}
        >
          <img src={item.image} alt={item.title} className="w-5 h-5 text-white" />
          {!collapsed && (
            <span className="text-xs flex-1 font-normal text-white">{item.title}</span>
          )}
          {!collapsed && item.dropdown && (
            <img src={dropdown} alt='dropdown' className="w-[.5rem] h-[.5rem] text-white" />
          )}
        </NavLink>
      </div>

      {/* Dropdown Options */}
      {!collapsed && isDropdownVisible && item.subItems && (
        <ul className="ml-8 mt-1 space-y-1">
          {item.subItems.map((subItem, index) => (
            <li key={index}>
              <NavLink
                to={subItem.route}
                className={({ isActive }) =>
                  `text-xs text-white block py-1 px-2 ${
                    isActive ? "text-gray-500" : ""
                  }`
                }
              >
                {subItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
