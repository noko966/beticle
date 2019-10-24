import styled from "styled-components";

const OddContainerStyled = styled.div`
  width: 82px;
  height: 58px;
  border-radius: 5px;
  background-color: ${p => (p.type === "buy" ? "#6c9d3a" : "#0264fb")};
  color: #1f2022;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const OddPriceStyled = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const OddFactorStyled = styled.span`
  font-size: 19px;
  font-weight: bold;
`;

export { OddContainerStyled, OddFactorStyled, OddPriceStyled };
