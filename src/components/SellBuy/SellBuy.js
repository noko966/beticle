import React from "react";
import {
  SellBuyStyled,
  SellBuyTypeStyled,
  SellBuyNameStyled,
  SellBuyReturnStyled,
  SellBuyReturnAmountStyled
} from "./SellBuy.styled";
import { Flex, Box } from "@rebass/grid";
import { Button } from "../Button";
import { Input } from "../Input";

const SellBuy = ({ text, type }) => {
  return (
    <SellBuyStyled type={type}>
      <Flex alignItems="center" height="100%">
        <Flex flex="1 0 auto" flexDirection="column">
          <SellBuyTypeStyled>sell</SellBuyTypeStyled>
          <SellBuyNameStyled>team name</SellBuyNameStyled>
        </Flex>
        <Box flex="0 0 120px" mr={2}>
          <Input />
        </Box>
        <Box flex="0 0 120px" mr={2}>
          <Input />
        </Box>
        <Box alignSelf="flex-start" mr={2}>
          <SellBuyReturnStyled>return:</SellBuyReturnStyled>
          <SellBuyReturnAmountStyled>$20</SellBuyReturnAmountStyled>
        </Box>
        <Flex flex="0 0 auto">
          <Button bg="#fff" color="#0264fb">
            Sell
          </Button>
        </Flex>
        <Flex></Flex>
      </Flex>
    </SellBuyStyled>
  );
};

export { SellBuy };
