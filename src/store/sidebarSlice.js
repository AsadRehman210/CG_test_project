import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true, // Sidebar is visible by default
  isCollapsed: false, // Sidebar is expanded by default
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.isVisible = true;
    },
    hideSidebar: (state) => {
      state.isVisible = false;
    },
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { showSidebar, hideSidebar, toggleSidebar, toggleCollapse } = sidebarSlice.actions;
export default sidebarSlice.reducer;
