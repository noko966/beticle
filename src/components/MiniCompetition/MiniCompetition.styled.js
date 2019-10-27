import styled from "styled-components";

const MiniCompetitionStyled = styled.div`
  width: 100%;
  padding: 33px 43px;
  background-color: #1f2022;
  border-radius: 5px;
`;

const MiniCompetitionNameStyled = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const MiniCompetitionSubNameStyled = styled.span`
  color: #9b9b9b;
  font-size: 18px;
`;

const MiniCompetitionTypeStyled = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const MiniCompetitionTeamNameStyled = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  display: block;
`;

const MiniCompetitionPercentageStyled = styled.span`
  color: #0264fb;
  font-size: 35px;
  font-weight: bold;
  margin-right: 10px;
`;

const MiniCompetitionFactorStyled = styled.span`
  background-color: #0264fb;
  color: #1f2022;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  border-radius: 5px;
  padding: 0 8px;
`;

const MiniCompetitionCommentStyled = styled.span`
  background-color: #4a4a4a;
  color: #1f2022;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  padding: 0 8px;
`;

const MiniCompetitionArrowStyled = styled.i`
  font-size: 32px;
  color: ${p => p.deltaUp ? '#7ed321' : '#d0021b'};
  &::before {
    content:'⭣';
    content: ${p => p.deltaUp ? '⭡' : '⭣'};
  }
`;

export {
  MiniCompetitionStyled,
  MiniCompetitionNameStyled,
  MiniCompetitionTypeStyled,
  MiniCompetitionSubNameStyled,
  MiniCompetitionTeamNameStyled,
  MiniCompetitionPercentageStyled,
  MiniCompetitionFactorStyled,
  MiniCompetitionArrowStyled,
  MiniCompetitionCommentStyled
};
