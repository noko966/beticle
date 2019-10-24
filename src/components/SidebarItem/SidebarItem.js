import React from "react";
import { SidebarItemStyled } from "./SidebarItem.styled";

const SidebarItem = ({ children, nested }) => {
  return <SidebarItemStyled nested={nested}>{children}</SidebarItemStyled>;
};

export { SidebarItem };
