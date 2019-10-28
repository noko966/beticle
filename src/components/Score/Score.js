import React from "react";
import {
  TeamHomeStyled,
  TeamAwayStyled,
  ScoreSeparatorStyled,
  ScoreHomeStyled,
  ScoreAwayStyled
} from "./Score.styled";
import { Flex, Box } from "@rebass/grid";

const Score = ({ HT, AT, scoreHT, scoreAT }) => {
  return (
    <Flex flexDirection="column">
      <Flex mb={2}>
        <TeamHomeStyled>{HT}</TeamHomeStyled>
        <ScoreSeparatorStyled></ScoreSeparatorStyled>
        <TeamAwayStyled>{AT}</TeamAwayStyled>
      </Flex>
      <Flex mb={2}>
        <ScoreHomeStyled>{scoreHT}</ScoreHomeStyled>
        <ScoreSeparatorStyled>:</ScoreSeparatorStyled>
        <ScoreAwayStyled>{scoreAT}</ScoreAwayStyled>
      </Flex>
    </Flex>
  );
};

export { Score };
