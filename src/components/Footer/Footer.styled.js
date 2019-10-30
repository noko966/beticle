import styled from "styled-components";
import Logo from "../../assets/images/logo_header.png";

const FooterWrapper = styled.div`
  background-color: #151516;
  width: 100%;
  border-top: 2px solid #4a4a4a;
  padding: 24px 15px;
`;

const FooterLogo = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${Logo});
  background-size: 60px 60px;
`;

const FooterLink = styled.a`
  font-size: 22px;
  color: #4a4a4a;
  margin-bottom: 25px;
`;

const FooterCopyRight = styled.a`
  font-size: 22px;
  color: #4a4a4a;
  margin-bottom: 25px;
`;

export { FooterWrapper, FooterLogo, FooterLink, FooterCopyRight };
