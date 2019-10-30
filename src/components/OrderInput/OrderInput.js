import React from "react";
import { OrderInputStyled } from "./OrderInput.styled";

const OrderInput = ({ text, type }) => {
  return <OrderInputStyled type={type}>{text}</OrderInputStyled>;
};

export { OrderInput };
