import styled from "styled-components";

const CompetionNameStyled = styled.h3`
  font-size: 15px;
  font-weight: bold;
  padding-top: 8px;
`;

const CompetionTypeStyled = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;
const CompetionContentStyled = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
`;

const CompetionFooterStyled = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
`;

const CompetitionOddsGroupContainerStyled = styled.div`
  display: flex;
`;

const CompetitionOddsGroupStyled = styled.div`
  display: flex;
  width: 185px;
`;

const CompetionContainerStyled = styled.div`
  color: #fff;
  width: 100%;
  padding: 24px;
  background-color: #1f2022;
  border-radius: 5px;
  position: relative;
  > ${CompetionNameStyled} {
    width: 60%;
  }
  > ${CompetionTypeStyled} {
    position: absolute;
    right: 24px;
    top: 24px;
    text-align: right;
    width: 40%;
  }
`;

const CompetitionTeamsContainerStyled = styled.div`
  flex-grow: 1;
  min-width: 1px;
`;

export {
  CompetionContainerStyled,
  CompetionContentStyled,
  CompetionNameStyled,
  CompetionTypeStyled,
  CompetionFooterStyled,
  CompetitionTeamsContainerStyled,
  CompetitionOddsGroupContainerStyled,
  CompetitionOddsGroupStyled
};
