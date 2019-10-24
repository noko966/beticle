import styled from "styled-components";

const OddGroupContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const OddGroupNameStyled = styled.span`
  font-size: 15px;
  font-weight: normal;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
`;

const OddContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  > div:first-child {
    margin-right: 8px;
  }
`;

export { OddGroupContainerStyled, OddGroupNameStyled, OddContainerStyled };
