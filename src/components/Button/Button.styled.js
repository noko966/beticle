import styled from "styled-components";

const Style = p => {
  let style = "";
  switch (p.type) {
    case "transparent":
      style = `height:50px; background-color: transparent; border-color: transparent; color:${p.theme.colors.textSec}`;
      break;
    case "transparentPrimaryBordered":
      style = `height:50px; background-color: transparent; border-color: ${p.theme.colors.akcent}; color:${p.theme.colors.akcent}`;
      break;
    case "small":
      style = "height:30px";
      break;
    case "popup":
        style = `height:60px; background-color: ${p.theme.colors.akcent}; border-color: ${p.theme.colors.akcent}; color:${p.theme.colors.white}`;
        break;
    case "orderBuy":
        style = `height:40px; background-color: #fff; border-color: #fff; text-transform:uppercase; color:${p.theme.colors.akcent};`;
        break;
    default:
      
      break;
  }

  return style;
};

const ButtonStyled = styled.button`
  border: 0;
  border:1px solid;
  border-radius: 5px;
  appearance: none;
  
  font-size: 18px;
  font-weight: 500;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 500;
  width:auto;
  outline: 0;
  ${p => Style(p)}
  
  cursor: pointer;
`;

export { ButtonStyled };
