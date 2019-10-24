import React from "react";
import { SidebarStyled } from "./Sidebar.styled";

const Sidebar = ({ children }) => {
  return <SidebarStyled>{children}</SidebarStyled>;
};

export { Sidebar };
