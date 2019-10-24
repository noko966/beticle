import React from "react";
import { TeamStyled } from "./Team.styled";

const Team = ({ teamName, type }) => {
  return <TeamStyled type={type}>{teamName}</TeamStyled>;
};

export { Team };
