import styled from "styled-components";

const SidebarItemStyled = styled.a`
  width: 100%;
  height: ${p => p.height || p.theme.SidebarItem.height};
  padding: 0 ${p => p.spacing || p.theme.SidebarItem.spacing};
  background-color: ${p =>
    p.nested ? p.theme.SidebarItemNested.bg : p.theme.SidebarItem.bg};
  color: ${p =>
    p.nested ? p.theme.SidebarItemNested.color : p.theme.SidebarItem.color};
  display: flex;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${p =>
      p.nested
        ? p.theme.SidebarItemNested.bgHover
        : p.theme.SidebarItem.bgHover};
    color: ${p =>
      p.nested
        ? p.theme.SidebarItemNested.colorHover
        : p.theme.SidebarItem.colorHover};
  }
`;

export { SidebarItemStyled };
