import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  
  ${reset}
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    font-family: 'Roboto', sans-serif !important;
  }
  body, html, #root{
    height: 100%
  }
  *{
    box-sizing:border-box;
  }
`;

//components
import Header from "./components/Header/Header";
import { Flex, Box } from "@rebass/grid";

import { SidebarItem } from "./components/SidebarItem";

import { RightMenuItem } from "./components/RightMenuItem";
import { Order } from "./components/Order";

import { Competition } from "./components/Competition";
import { MiniCompetition } from "./components/MiniCompetition";
import { withTheme } from "styled-components";

//popups
import SignInPopup from "./components/SignInPopup";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <GlobalStyles />
        <Header />
        <Flex width={1} bg={this.props.theme.Layout.bg} height="100%">
          <Box flex="0 0 390px">
            <SidebarItem text="sidebar item"></SidebarItem>
            <SidebarItem active={true} text="sidebar item"></SidebarItem>
            <SidebarItem text="sidebar item"></SidebarItem>
            <SidebarItem text="sidebar item"></SidebarItem>
            <SidebarItem text="sidebar item"></SidebarItem>

            <SidebarItem text="sidebar item" factor="1.5"></SidebarItem>
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
              <Order type='sell' name='Order name' returnn='20' lagability='30'/>
              <Order type='buy' name='Order name'/>
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
        {/* <SignInPopup /> */}
      </div>
    );
  }
}

export default withTheme(App);
