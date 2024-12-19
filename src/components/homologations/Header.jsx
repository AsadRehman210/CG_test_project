import React, { useState } from "react";
import global from "../../assets/images/Francis.svg";
import setting from "../../assets/images/setting.svg";
import notification from "../../assets/images/Notification.svg";
import dropdown from "../../assets/images/dropdown1.svg";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../store/sidebarSlice";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const Header = () => {
  const [language, setLanguage] = useState("Français");
  const [isLangOpen, setLangOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(showSidebar());
  };

  return (
    <header className="flex flex-wrap justify-between items-center gap-8 py-4 px-4 w-full">
      {/* Left Section */}
      <button
        className="flex lg:hidden text-[#00244D]"
        onClick={handleOpenSidebar}
      >
       <FormatAlignRightIcon />
      </button>
      <div className="text-lg font-bold text-[#00244D] mb-4 sm:mb-0">Homologations</div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 relative w-full sm:w-auto">
        {/* Language Dropdown */}
        <div className="relative bg-white px-4 py-2 rounded-xl mb-2 sm:mb-0">
          <button
            onClick={() => setLangOpen(!isLangOpen)}
            className="flex items-center space-x-3 text-gray-600 hover:text-blue-900 focus:outline-none"
          >
            <img
              src={global}
              alt="global"
              className="w-[1.125rem] h-[1.125rem]"
            />
            <span className="text-sm">{language}</span>
            <img src={dropdown} alt="dropdown" className="w-[.5rem] h-[0.25rem] text-[#00244D !important]" />
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
              {["Français", "English", "Español"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setLangOpen(false);
                  }}
                  className="block px-2 py-1 w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-900"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Settings Icon */}
        <button className="text-gray-600 bg-white px-2 py-2 rounded-xl hover:text-blue-900 focus:outline-none mb-2 sm:mb-0">
          <img
            src={setting}
            alt="setting"
            className="w-[1.25rem] h-[1.25rem]"
          />
        </button>

        {/* Notifications Icon */}
        <button className="relative text-gray-600 bg-white px-4 py-2 rounded-xl hover:text-blue-900 focus:outline-none mb-2 sm:mb-0">
          <img
            src={notification}
            alt="notification"
            className="w-[1.25rem] h-[1.25rem]"
          />
        </button>

        {/* User Dropdown */}
        <div className="relative bg-white px-4 py-2 rounded-xl mb-2 sm:mb-0">
          <button
            onClick={() => setUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-900 focus:outline-none"
          >
            <span className="text-sm">Nicole S.</span>
            <img src={dropdown} alt="dropdown" className="w-[.5rem] h-[0.25rem]" />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <button
                onClick={() => setUserMenuOpen(false)}
                className="block px-2 py-1 w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-900"
              >
                Profile
              </button>
              <button
                onClick={() => setUserMenuOpen(false)}
                className="block px-2 py-1 w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
