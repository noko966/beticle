import React from "react";
import {
  OddGroupContainerStyled,
  OddGroupNameStyled,
  OddContainerStyled
} from "./OddGroup.styled";
import { Odd } from "../Odd";

const OddGroup = ({ name, odds }) => {
  return (
    <OddGroupContainerStyled>
      <OddGroupNameStyled>{name}</OddGroupNameStyled>
      <OddContainerStyled>
        {odds &&
          odds.map(odd => {
            return (
              <Odd key={odd.id} price={odd.price} type={odd.type} factor={odd.factor} />
            );
          })}
      </OddContainerStyled>
    </OddGroupContainerStyled>
  );
};

export { OddGroup };
