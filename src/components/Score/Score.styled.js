import styled from "styled-components";

const TeamHomeStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 1px;
  flex-basis: calc(50% - 17px);
`;

const TeamAwayStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 1px;
  flex-basis: calc(50% - 17px);
`;

const ScoreHomeStyled = styled.span`
  font-size: 32px;
  font-weight: bold;
  text-align: right;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 1px;
  flex-basis: calc(50% - 17px);
`;

const ScoreAwayStyled = styled.span`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  flex-shrink: 0;
  flex-grow: 1;
  min-width: 1px;
  flex-basis: calc(50% - 17px);
`;

const ScoreSeparatorStyled = styled.span`
  font-size: 32px;
  font-weight: bold;
  width: 36px;
  text-align: center;
  flex-shrink: 0;
`;

export {
  ScoreSeparatorStyled,
  ScoreAwayStyled,
  ScoreHomeStyled,
  TeamHomeStyled,
  TeamAwayStyled
};
