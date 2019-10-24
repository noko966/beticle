import styled from "styled-components";

const BadgeStyled = styled.span`
  width: ${p => p.theme.Badge.width && p.theme.Badge.width};
  height: ${p => p.theme.Badge.height && p.theme.Badge.height};
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.Badge.bg && p.theme.Badge.bg};
  color: ${p => p.theme.Badge.color && p.theme.Badge.color};
  border-radius: ${p =>
    p.theme.Badge.borderRadius && p.theme.Badge.borderRadius};
  padding: 0 ${p => p.theme.Badge.spacing && p.theme.Badge.spacing};
`;

export { BadgeStyled };
