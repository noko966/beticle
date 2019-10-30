import React from "react";
import {
  OrderWrapper,
  NameStyled,
  SubNameStyled,
  Details,
  DetailsAmount
} from "./Order.styled";
import { Flex, Box } from "@rebass/grid";
import {OrderInput} from "../OrderInput";
import Button from "../Button";



const Order = ({ type, name, returnn, lagability }) => {
  return (
    <OrderWrapper type={type}>
      <Flex alignItems='center'>
        <Flex flex='1 0 auto' flexDirection="column">
          <SubNameStyled>{type}</SubNameStyled>
          <NameStyled>{name}</NameStyled>
        </Flex>
        <Flex flexDirection="column">
          <Flex justifyContent='flex-end' mb='6px' pr='80px'>
            {returnn && (
              <Box mr='10px'>
                <Details>Return: </Details>
                <DetailsAmount>${returnn}</DetailsAmount>
              </Box>
            )}
            {lagability && (
              <Box>
                <Details>Return: </Details>
                <DetailsAmount>${lagability}</DetailsAmount>
              </Box>
            )}
          </Flex>
          <Flex>
            <Box mr='15px'>
              <OrderInput/>
            </Box>
            <Box mr='15px'>
              <OrderInput/>
            </Box>
            <Box width='100px'></Box>
            <Box mr='15px'>
            <Button type='orderBuy' text='buy'/>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </OrderWrapper>
  );
};

export { Order };
