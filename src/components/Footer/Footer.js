import React from "react";

import Button from "../Button";

import {
  FooterWrapper,
  FooterLogo,
  FooterLink,
  FooterCopyRight
} from "./Footer.styled";

import { Flex, Box } from "@rebass/grid";

const Footer = ({ theme }) => {
  return (
    <FooterWrapper>
      <Flex>
        <Box mr='90px'>
        <FooterLogo />
        </Box>

          <Flex flex='1 0 auto' flexDirection="column">
            <FooterLink>About</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Terms of Privacy</FooterLink>
            <FooterLink>Betting Rules</FooterLink>
          </Flex>
          <Box alignSelf='flex-end'>
          <FooterCopyRight> ⓒ 2019 Beticle . All rights reserved.</FooterCopyRight></Box>

      </Flex>
    </FooterWrapper>
  );
};

export default Footer;
