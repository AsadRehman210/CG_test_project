import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar, toggleCollapse } from "../../store/sidebarSlice";
import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";
import { sidebarSections } from "./sidebarSections";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isVisible, isCollapsed } = useSelector((state) => state.sidebar);

  const [isLgScreen, setIsLgScreen] = useState(false);

  // Handle screen resizing
  const handleResize = () => {
    setIsLgScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  // Reset the collapse state when switching to mobile
  useEffect(() => {
    if (!isLgScreen && isCollapsed) {
      dispatch(toggleCollapse()); 
    }
  }, [isLgScreen, dispatch, isCollapsed]);

  const handleClose = () => {
    dispatch(hideSidebar());
  };

  const handleToggleCollapse = () => {
    if (isLgScreen) {
      dispatch(toggleCollapse()); 
    }
  };

  return (
    <div
      className={`${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } w-${isCollapsed ? "16" : "64"} h-screen text-white flex flex-col transition-all duration-300 bg-[#1E293B] absolute lg:static lg:translate-x-0 z-10`}
    >
      {/* Sidebar Header */}
      <SidebarHeader collapsed={isCollapsed} toggleSidebar={handleToggleCollapse} />

      {/* Sidebar Navigation */}
      <nav className={`flex-1 overflow-auto pb-4 hide-scrollbar`}>
        <ul className="divide-y-[1px] divide-[#72869C] px-5">
          {sidebarSections.map((section, index) => (
            <SidebarSection key={index} section={section} collapsed={isCollapsed} />
          ))}
        </ul>
      </nav>

      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 text-white lg:hidden"
        onClick={handleClose}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Sidebar;
