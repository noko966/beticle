import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ size, type, text }) => {
  return (
    <ButtonStyled size={size} type={type}>
      123{text}
    </ButtonStyled>
  );
};

export { Button };
