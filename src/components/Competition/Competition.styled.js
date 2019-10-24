import styled from "styled-components";

const CompetionNameStyled = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

const CompetionTypeStyled = styled.h4`
  font-size: 18px;
  font-weight: 500;
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
  margin-bottom: 15px;

`;

const CompetitionSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color:#333;
`;

const CompetitionStatus = styled.span`
    font-size:15px;
    font-weight: bold;
    width: 100%;
    color:#fff;
`;

const CompetitionMarketCap = styled.span`
    font-size:17px;
    font-weight: bold;
    color:#9b9b9b;
    width: 100%;
`;

export {
  CompetionContainerStyled,
  CompetionNameStyled,
  CompetionTypeStyled,
  CompetitionOddsGroupStyled,
  CompetitionSeparator,
  CompetitionStatus,
  CompetitionMarketCap
};
