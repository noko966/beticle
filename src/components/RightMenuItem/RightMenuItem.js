import React from "react";
import { Flex } from "@rebass/grid";
import {
  RightMenuItemContainerStyled,
  RightMenuItemCompetitionStyled,
  RightMenuItemTypeStyled,
  RightMenuItemWinnerStyled,
  RightMenuItemCountTextStyled,
  RightMenuItemCountNumberStyled,
  RightMenuItemPayoutTextStyled,
  RightMenuItemPayoutNumberStyled,
  RightMenuItemHeaderSeparatorStyled,
  RightMenuItemFooterSeparatorStyled
} from "./RightMenuItem.styled";

const RightMenuItem = ({ competition, type, winner, itemCount, ammount }) => {
  return (
    <RightMenuItemContainerStyled>
      <Flex mb="8px">
        <Flex width={1 / 2}>
          <RightMenuItemCompetitionStyled>
            {competition}
          </RightMenuItemCompetitionStyled>
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <RightMenuItemTypeStyled>{type}</RightMenuItemTypeStyled>
        </Flex>
      </Flex>
      <Flex mb="8px">
        <RightMenuItemHeaderSeparatorStyled />
      </Flex>
      <Flex mb="8px">
        <RightMenuItemWinnerStyled>{winner}</RightMenuItemWinnerStyled>
      </Flex>
      <Flex mb="8px">
        <Flex width={1 / 2}>
          <RightMenuItemCountNumberStyled>
            {itemCount}
          </RightMenuItemCountNumberStyled>
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <RightMenuItemCountTextStyled>Count:</RightMenuItemCountTextStyled>
        </Flex>
      </Flex>
      <Flex mb="8px">
        <Flex width={1 / 2}>
          <RightMenuItemPayoutNumberStyled>
            {ammount}
          </RightMenuItemPayoutNumberStyled>
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <RightMenuItemPayoutTextStyled>Payout:</RightMenuItemPayoutTextStyled>
        </Flex>
      </Flex>
      <Flex mb="8px">
        <RightMenuItemFooterSeparatorStyled />
      </Flex>
    </RightMenuItemContainerStyled>
  );
};

export { RightMenuItem };
