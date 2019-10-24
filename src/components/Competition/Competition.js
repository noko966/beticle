import React from "react";
import {
  CompetionContainerStyled,
  CompetionFooterStyled,
  CompetionNameStyled,
  CompetionContentStyled,
  CompetionTypeStyled,
  CompetitionTeamsContainerStyled,
  CompetitionOddsGroupStyled,
  CompetitionOddsGroupContainerStyled
} from "./Competition.styled";
import { Score } from "../Score";
import { OddGroup } from "../OddGroup";

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
  oddsSell
}) => {
  return (
    <CompetionContainerStyled>
      <CompetionNameStyled>{name}</CompetionNameStyled>
      <CompetionTypeStyled>{type}</CompetionTypeStyled>
      <CompetionContentStyled>
        <CompetitionTeamsContainerStyled>
          <Score HT={HT} AT={AT} scoreHT={scoreHT} scoreAT={scoreAT} />
        </CompetitionTeamsContainerStyled>
        <CompetitionOddsGroupContainerStyled>
          <CompetitionOddsGroupStyled>
            <OddGroup name={oddsBuyName} odds={oddsBuy} />
          </CompetitionOddsGroupStyled>
          <CompetitionOddsGroupStyled>
            <OddGroup name={oddsSellName} odds={oddsSell} />
          </CompetitionOddsGroupStyled>
        </CompetitionOddsGroupContainerStyled>
      </CompetionContentStyled>
      <CompetionFooterStyled></CompetionFooterStyled>
    </CompetionContainerStyled>
  );
};

export { Competition };
