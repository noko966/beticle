import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ size, type, text, bg, color }) => {
  return (
    <ButtonStyled size={size} type={type} bg={bg} color={color}>
      123{text}
    </ButtonStyled>
  );
};

export { Button };
