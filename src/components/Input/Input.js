import React from "react";
import { InputContainerStyled, InputStyled, InputError, InputLabel } from "./Input.styled";

const Input = ({ type, error, errorMessage, label }) => {
  return (
    <InputContainerStyled>
      <InputLabel error={error}>{label}</InputLabel>
      <InputStyled error={error} type={type} />
      <InputError>{errorMessage}</InputError>
    </InputContainerStyled>
  );
};

export { Input };
