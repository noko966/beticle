import React from "react";
import { BadgeStyled } from "./Badge.styled";

const Badge = ({ text, type }) => {
  return <BadgeStyled type={type}>{text}</BadgeStyled>;
};

export { Badge };
