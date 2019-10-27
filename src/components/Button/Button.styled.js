import styled from "styled-components";

const Height = p => {
  let height = "";
  switch (p.size) {
    case "large":
      height = "height:40px";
      break;
    case "small":
      height = "height:30px";
      break;
    default:
      height = "height:30px";
      break;
  }

  return height;
};

const ButtonStyled = styled.button`
  background-color: ${p => p.bg || '#0264fb'};
  color: ${p => p.color || '#fff'};
  border-radius: 5px;
  appearance: none;
  ${p => Height(p)}
  font-size: 18px;
  font-weight: 500;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export { ButtonStyled };
