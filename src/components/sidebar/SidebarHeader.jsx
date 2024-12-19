import React from "react";
import logoImg from "../../assets/images/GUiU.svg";
import closeMenu from "../../assets/images/close menu.svg";

const SidebarHeader = ({ collapsed, toggleSidebar }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-700 h-[80px]">
    <div className="flex items-center space-x-2">
      {!collapsed && (
        <>
          <img src={logoImg} alt="GuiU Logo" className="h-[2.125rem] w-[2.125rem]" />
          <div>
            <div className="text-white font-bold text-[1.063rem] leading-none">GuiU</div>
            <div className="text-white font-medium text-[0.688rem] uppercase">
              Guichet Unique
            </div>
          </div>
        </>
      )}
    </div>
    <button onClick={toggleSidebar} className="focus:outline-none hidden lg:flex">
      <img
        src={closeMenu}
        alt="Close Menu"
        className="h-[1.375rem] w-[1.375rem] transition-transform"
        style={{ transform: collapsed ? "rotate(180deg)" : "rotate(0deg)" }}
      />
    </button>
  </div>
);

export default SidebarHeader;
