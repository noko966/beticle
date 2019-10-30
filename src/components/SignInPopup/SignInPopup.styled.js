import styled from "styled-components";

const SignInPopupWrapperStyled = styled.div`
  width:550px;
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  background-color:${p=> p.theme.colors.widget};
  padding: 95px 55px 43px 55px;
  a{
    color:${p=> p.theme.colors.akcent};
  }
  button{
    flex-shrink:0;
  }
`;

const SignInPopupHeading = styled.h2`
  font-size:40px;
  font-weight:500;
  color:${p=> p.theme.colors.akcent};
  text-align:center;
  margin-bottom:48px;
`;

const SignInPopupForgotPassword = styled.a`
  font-size:15px;
  font-weight:500;
`;


const SignInPopupFooterText = styled.span`
  font-size:15px;
  font-weight:500;
  color:${p=> p.theme.colors.white};
`;


export { SignInPopupWrapperStyled, SignInPopupHeading, SignInPopupForgotPassword, SignInPopupFooterText };
