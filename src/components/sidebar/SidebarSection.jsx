import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarSection = ({ section, collapsed }) => (
  <div className="mt-4">
    {section.title && !collapsed && (
      <div className="text-[0.625rem] text-[#72869C] pt-5 uppercase font-normal">
        {section.title}
      </div>
    )}
    <ul className="space-y-1 mt-2">
      {section.items.map((item, index) => (
        <SidebarItem key={index} item={item} collapsed={collapsed} />
      ))}
    </ul>
  </div>
);

export default SidebarSection;
