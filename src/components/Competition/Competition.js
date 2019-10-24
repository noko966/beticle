import React from "react";
import {
  CompetionContainerStyled,
  CompetionNameStyled,
  CompetionTypeStyled,
  CompetitionOddsGroupStyled,
  CompetitionSeparator,
  CompetitionStatus,
  CompetitionMarketCap
} from "./Competition.styled";
import { Score } from "../Score";
import { OddGroup } from "../OddGroup";
import { Flex } from "@rebass/grid";

const Competition = ({
  name,
  type,
  scoreHT,
  scoreAT,
  HT,
  AT,
  oddsBuyName,
  oddsBuy,
  oddsSellName,
  oddsSell,
  status,
  marketCup
}) => {
  return (
    <CompetionContainerStyled>
      <Flex alignItems='center' mb='8px'>
        <Flex width={1 / 2}>
          <CompetionNameStyled>{name}</CompetionNameStyled>
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <CompetionTypeStyled>{type}</CompetionTypeStyled>
        </Flex>
      </Flex>
      <Flex>
        <Flex flex="1 1 auto" flexDirection="column">
          <Score HT={HT} AT={AT} scoreHT={scoreHT} scoreAT={scoreAT} />
          <CompetitionSeparator />
          <Flex>
            <Flex width={1 / 2} justifyContent="flex-end">
              <CompetitionStatus>{status}</CompetitionStatus>
            </Flex>
            <Flex width={1 / 2} justifyContent="flex-end">
              <CompetitionMarketCap>{marketCup}</CompetitionMarketCap>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex="0 1 auto">
          <CompetitionOddsGroupStyled>
            <OddGroup name={oddsBuyName} odds={oddsBuy} />
          </CompetitionOddsGroupStyled>
          <CompetitionOddsGroupStyled>
            <OddGroup name={oddsSellName} odds={oddsSell} />
          </CompetitionOddsGroupStyled>
        </Flex>
      </Flex>
    </CompetionContainerStyled>
  );
};

export { Competition };
