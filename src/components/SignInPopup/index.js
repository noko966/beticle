import React from "react";
import {
  SignInPopupWrapperStyled,
  SignInPopupHeading,
  SignInPopupForgotPassword,
  SignInPopupFooterText
} from "./SignInPopup.styled";
import { Input } from "../Input";
import Button from "../Button";

import { Flex, Box } from "@rebass/grid";

const SignInPopup = ({}) => {
  return (
    <SignInPopupWrapperStyled>
      <Flex flexDirection="column">
        <SignInPopupHeading>Sign in</SignInPopupHeading>
        <Box mb={3}>
          <Input label="label" />
        </Box>
        <Box mb={3}>
          <Input label="label" />
        </Box>
        <Flex justifyContent='flex-end' mb={4}>
          <SignInPopupForgotPassword>Forgot password?</SignInPopupForgotPassword>
        </Flex>
        <Button text="log in" type="popup" />
      
        <Flex justifyContent='center' mt={4}>
          <SignInPopupFooterText>DON’T HAVE AN ACCOUNT?</SignInPopupFooterText>
          <SignInPopupForgotPassword> SIGN UP</SignInPopupForgotPassword>
        </Flex>
      </Flex>
    </SignInPopupWrapperStyled>
  );
};

export default SignInPopup;
