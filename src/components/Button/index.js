import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ type, text }) => {
  return (
    <ButtonStyled type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
