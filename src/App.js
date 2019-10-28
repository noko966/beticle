import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  
  ${reset}
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    font-family: 'Roboto', sans-serif !important;
  }
  *{
    box-sizing:border-box;
  }
`;

//components
import { Flex, Box } from "@rebass/grid";
import { Odd } from "./components/Odd";
import { Score } from "./components/Score";
import { Team } from "./components/Team";
import { Button } from "./components/Button";
import { Sidebar } from "./components/Sidebar";
import { SidebarItem } from "./components/SidebarItem";

import { Badge } from "./components/Badge";

import { RightMenuItem } from "./components/RightMenuItem";
import { SellBuy } from "./components/SellBuy";

import { Text } from "./components/Text";

import { Competition } from "./components/Competition";
import { MiniCompetition } from "./components/MiniCompetition";
import { withTheme } from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Flex width={1} bg={this.props.theme.Layout.bg}>
          <Box width="390px">
            <Sidebar>
              <SidebarItem>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem>text</SidebarItem>
              <SidebarItem>text</SidebarItem>
            </Sidebar>
          </Box>
          <Box px={2} flex="1 0 auto">
            <Flex mb={2}>
              <Box width={1 / 2}>
                <MiniCompetition
                  type="buy"
                  subName="subName"
                  name="Competition name"
                  HTName="home team name"
                  ATName="away team name"
                  HTPercentage="10%"
                  HTFactor="10"
                  ATPercentage="20%"
                  ATFactor="20"
                  deltaUp={true}
                />
              </Box>
              <Box width="15px"></Box>
              <Box width={1 / 2}>
                <MiniCompetition
                  type="buy"
                  subName="subName"
                  name="Competition name"
                  HTName="home team name"
                  ATName="away team name"
                  HTPercentage="10%"
                  HTFactor="10"
                  ATPercentage="20%"
                  ATFactor="20"
                  deltaUp={true}
                />
              </Box>
            </Flex>

            <Competition
              name="COMPETITION NAME"
              type="TRADING"
              scoreHT={10}
              scoreAT={5}
              HT="home team"
              AT="home team"
              marketCup="Market  Cap: 500$"
              status="Live"
              oddsBuy={[
                { price: 10, factor: 20, type: "buy" },
                { price: 10, factor: 20, type: "buy" }
              ]}
              oddsBuyName="NAME OF THE HOME TEAM
SECOND PART "
              oddsSell={[{ price: 10, factor: 20 }, { price: 10, factor: 20 }]}
              oddsSellName="NAME OF THE HOME TEAM SECOND PART "
            />
            <Competition
              name="COMPETITION NAME"
              type="TRADING"
              scoreHT={10}
              scoreAT={5}
              HT="home team"
              AT="home team"
              marketCup="Market  Cap: 500$"
              status="Live"
              oddsBuy={[
                { price: 10, factor: 20, type: "buy" },
                { price: 10, factor: 20, type: "buy" }
              ]}
              oddsBuyName="NAME OF THE HOME TEAM
SECOND PART "
              oddsSell={[{ price: 10, factor: 20 }, { price: 10, factor: 20 }]}
              oddsSellName="NAME OF THE HOME TEAM SECOND PART ">
              <SellBuy />
            </Competition>
          </Box>
          <Box width="420px">
            <RightMenuItem
              competition="competition name"
              type="buy"
              winner="Manchester City"
              itemCount="10"
              ammount="200"
            />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default withTheme(App);
