import React from "react";
import { SidebarItemStyled, SidebarFactorStyled } from "./SidebarItem.styled";
import { Flex, Box } from "@rebass/grid";

const SidebarItem = ({ text, type, icon, factor, active }) => {
  return <SidebarItemStyled active={active} type={type} text={text} icon={icon} factor={factor}>
    <Box flex='0 0 30px' mr={2}>{icon}</Box>
    <Box flex='1 0 auto' mr={2}>{text}</Box>
    <Box flex='0 0 40px' mr={2}><SidebarFactorStyled>{factor}</SidebarFactorStyled></Box>
    <Box flex='0 0 30px'>></Box>
  </SidebarItemStyled>;
};

export { SidebarItem };
