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
      <Flex>
        <Flex width={1 / 2}>
          <CompetionNameStyled>{name}</CompetionNameStyled>
        </Flex>
        <Flex width={1 / 2}>
          <CompetionTypeStyled>{type}</CompetionTypeStyled>
        </Flex>
      </Flex>
      <Flex>
        <Flex>
          <Score HT={HT} AT={AT} scoreHT={scoreHT} scoreAT={scoreAT} />
          <CompetitionSeparator />
          <Flex>
            <CompetitionStatus>{status}</CompetitionStatus>
            <CompetitionMarketCap>{marketCup}</CompetitionMarketCap>
          </Flex>
        </Flex>
        <Flex>
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
