import React from "react";
import {
  MiniCompetitionStyled,
  MiniCompetitionNameStyled,
  MiniCompetitionTypeStyled,
  MiniCompetitionSubNameStyled,
  MiniCompetitionTeamNameStyled,
  MiniCompetitionFactorStyled,
  MiniCompetitionPercentageStyled,
  MiniCompetitionArrowStyled
} from "./MiniCompetition.styled";
import { Flex, Box } from "@rebass/grid";

const MiniCompetition = ({
  type,
  name,
  subName,
  theme,
  HTName,
  ATName,
  HTPercentage,
  HTFactor,
  ATPercentage,
  ATFactor,
  deltaUp,
  deltaDown
}) => {
  console.log(theme);
  return (
    <MiniCompetitionStyled>
      <Flex mb={2}>
        <Box width={1 / 2}>
          <MiniCompetitionNameStyled>{name}</MiniCompetitionNameStyled>
        </Box>
        <Box textAlign="right" width={1 / 2}>
          <MiniCompetitionTypeStyled>{type}</MiniCompetitionTypeStyled>
        </Box>
      </Flex>
      <Box mb={3}>
        <MiniCompetitionSubNameStyled>{subName}</MiniCompetitionSubNameStyled>
      </Box>
      <Flex>
        <Box width={1 / 2} mb={3}>
          <MiniCompetitionTeamNameStyled>
            {HTName}
          </MiniCompetitionTeamNameStyled>
          <Flex justifyContent="center" alignItems="center">
            <MiniCompetitionPercentageStyled>
              {HTPercentage}
            </MiniCompetitionPercentageStyled>
            <MiniCompetitionFactorStyled>
              {HTFactor}
            </MiniCompetitionFactorStyled>
            {(deltaUp || deltaDown) && <MiniCompetitionArrowStyled/>}
          </Flex>
        </Box>
        <Box width={1 / 2} mb={3}>
          <MiniCompetitionTeamNameStyled>
            {ATName}
          </MiniCompetitionTeamNameStyled>
          <Flex justifyContent="center" alignItems="center">
            <MiniCompetitionPercentageStyled>
              {ATPercentage}
            </MiniCompetitionPercentageStyled>
            <MiniCompetitionFactorStyled>
              {ATFactor}
            </MiniCompetitionFactorStyled>
            {(deltaUp || deltaDown) && <MiniCompetitionArrowStyled/>}
          </Flex>
        </Box>
      </Flex>
    </MiniCompetitionStyled>
  );
};

export { MiniCompetition };
