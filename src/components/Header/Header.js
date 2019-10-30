import React from "react";
import { withTheme } from "styled-components";
import Button from "../Button";

import { HeaderWrapper, HeaderLogo } from "./Header.styled";

import { Flex, Box } from "@rebass/grid";

const Header = ({ theme }) => {
  return (
    <HeaderWrapper>

        <HeaderLogo />
        <Box flex="1 1 auto"></Box>
        <Box mr={2}>
          <Button type="transparent" text="History" />
        </Box>
        <Box mr={2}>
          <Button type="transparent" text="Sign In" />
        </Box>
        <Box mr={2}>
          <Button type="transparentPrimaryBordered" text="Sign In" />
        </Box>

    </HeaderWrapper>
  );
};

export default withTheme(Header);
