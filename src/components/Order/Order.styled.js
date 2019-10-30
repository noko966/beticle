import styled from "styled-components";



const OrderWrapper = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background-color: ${p => p.type === 'sell' ? p.theme.colors.akcent : p.theme.colors.buyAkcent};
  padding: 15px 88px 15px 43px;
  margin-bottom:15px;
  
`;


const NameStyled = styled.span`
text-transform:uppercase;
  font-size: 18px;
  color:#fff;
`;

const SubNameStyled = styled.span`
text-transform:uppercase;
  font-size: 22px;
  color:#1f2022;
  margin-bottom:7px;
`;

const Details = styled.span`
  font-size: 17px;
  color:#fff;
`;

const DetailsAmount = styled.span`
  font-size: 17px;
  color:#dda42f;
`;



export { OrderWrapper, NameStyled, SubNameStyled, Details, DetailsAmount };
