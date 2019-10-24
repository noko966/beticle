import styled from "styled-components";

const LayoutStyled = styled.div`
  background-color: ${p => p.bg || p.theme.Layout.bg};
  color: ${p => p.color || p.theme.Layout.color};
  width: ${p => p.width || p.theme.Layout.width};
  height: ${p => p.height || p.theme.Layout.height};
  display:flex;

`;
const LeftMenuContainerStyled = styled.div`
  background-color: ${p => p.bg || p.theme.LayoutLeft.bg};
  color: ${p => p.color || p.theme.LayoutLeft.color};
  width: ${p => p.width || p.theme.LayoutLeft.width};
  height: ${p => p.height || p.theme.LayoutLeft.height};
`;
const MidMenuContainerStyled = styled.div`
  flex-grow: 1;
  min-width: 1px;
`;
const RightMenuContainerStyled = styled.div`
  background-color: ${p => p.bg || p.theme.LayoutRight.bg};
  color: ${p => p.color || p.theme.LayoutRight.color};
  width: ${p => p.width || p.theme.LayoutRight.width};
  height: ${p => p.height || p.theme.LayoutRight.height};
`;

export {
  LayoutStyled,
  LeftMenuContainerStyled,
  MidMenuContainerStyled,
  RightMenuContainerStyled
};
