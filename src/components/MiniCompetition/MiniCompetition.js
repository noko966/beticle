import React from "react";
import {
  MiniCompetitionStyled,
  MiniCompetitionNameStyled,
  MiniCompetitionTypeStyled,
  MiniCompetitionSubNameStyled,
  MiniCompetitionTeamNameStyled,
  MiniCompetitionFactorStyled,
  MiniCompetitionPercentageStyled,
  MiniCompetitionArrowStyled,
  MiniCompetitionCommentStyled,
  MiniCompetitionFooterTextStyled
} from "./MiniCompetition.styled";
import { Flex, Box } from "@rebass/grid";
import { Separator } from "../Separator";

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
  deltaDown,
  comment,
  date,
  marketCap
}) => {
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
            {(deltaUp || deltaDown) && <MiniCompetitionArrowStyled />}
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
            {(deltaUp || deltaDown) && <MiniCompetitionArrowStyled />}
          </Flex>
        </Box>
      </Flex>
      <Flex mb="15px" justifyContent="flex-end">
        <MiniCompetitionCommentStyled>{comment}</MiniCompetitionCommentStyled>
      </Flex>
      <Separator />
      <Flex mt='10px'>
        <Box width={1 / 2}>
          <MiniCompetitionFooterTextStyled>
            {date}
          </MiniCompetitionFooterTextStyled>
        </Box>
        <Box width={1 / 2} textAlign="right">
          {marketCap && (
            <MiniCompetitionFooterTextStyled>
              market Cap {marketCap}
            </MiniCompetitionFooterTextStyled>
          )}
        </Box>
      </Flex>
    </MiniCompetitionStyled>
  );
};

export { MiniCompetition };
