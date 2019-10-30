import styled from "styled-components";

const Style = p => {
  let style = "";
  switch (p.type) {
    case "inner":
      style = `background-color:${p.theme.colors.widget}; color:${p.theme.colors.sidebarText}`;
      break;
    default:
      style = `background-color:${p.theme.colors.widget}; color:${p.theme.colors.sidebarText}`;
      break;
  }

  return style;
};

const SidebarItemStyled = styled.a`
display:flex;
align-items:center;
  width: 100%;
  height: 62px;
  padding: 0 ${p => p.theme.space[2]}px;
  ${p => Style(p)}

  ${p => {return p.active ? `color: ${p.theme.colors.akcent}` : ``}}
`;

const SidebarFactorStyled = styled.span`
  display:block;
  width:100%;
  height:23px;
  line-height:23px;
  border: 1px solid currentColor;
  border-radius:2px;
  text-align:center;
  
  &:empty{
    display:none;
  }
`;

export { SidebarItemStyled, SidebarFactorStyled };
