import styled from "styled-components";
import Logo from "../../assets/images/logo_header.png"

const HeaderLogo = styled.div`
  width:80px;
  height:80px;
  background-image:url(${Logo});
  background-size: 80px 80px;
`;

const HeaderWrapper = styled.div`
  background-color: #151516;
  width: 100%;
  height:90px;
  border-bottom: 2px solid #4a4a4a;
  padding: 0 15px;
  display:flex;
  align-items:center;
`;


export {
  HeaderLogo,
  HeaderWrapper

};
