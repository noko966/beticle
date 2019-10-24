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
import {
  LayoutStyled,
  LeftMenuContainerStyled,
  MidMenuContainerStyled,
  RightMenuContainerStyled
} from "./components/Layout/Layout.styled";

import { Odd } from "./components/Odd";
import { Score } from "./components/Score";
import { Team } from "./components/Team";
import { Button } from "./components/Button";
import { Sidebar } from "./components/Sidebar";
import { SidebarItem } from "./components/SidebarItem";

import { Badge } from "./components/Badge";

import { RightMenuItem } from "./components/RightMenuItem";

import { Text } from "./components/Text";

import { Competition } from "./components/Competition";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <LayoutStyled>
          <LeftMenuContainerStyled>
            <Sidebar>
              <SidebarItem>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem nested={true}>text</SidebarItem>
              <SidebarItem>text</SidebarItem>
              <SidebarItem>text</SidebarItem>
            </Sidebar>
          </LeftMenuContainerStyled>
          <MidMenuContainerStyled>
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
              oddsSellName="NAME OF THE HOME TEAM SECOND PART "
            />
          </MidMenuContainerStyled>
          <RightMenuContainerStyled>
            <RightMenuItem
              competition="competition name"
              type="buy"
              winner="Manchester City"
              itemCount="10"
              ammount="200"
            />
            <RightMenuItem
              competition="competition name"
              type="buy"
              winner="Manchester City"
              itemCount="10"
              ammount="200"
            />
            <RightMenuItem
              competition="competition name"
              type="buy"
              winner="Manchester City"
              itemCount="10"
              ammount="200"
            />
            <RightMenuItem
              competition="competition name"
              type="buy"
              winner="Manchester City"
              itemCount="10"
              ammount="200"
            />
          </RightMenuContainerStyled>
        </LayoutStyled>

        {/* <Competition
          name="COMPETITION NAME"
          type="TRADING"
          scoreHT={10}
          scoreAT={5}
          HT="home team"
          AT="home team"
          oddsBuy={[
            { price: 10, factor: 20, type: "buy" },
            { price: 10, factor: 20, type: "buy" }
          ]}
          oddsBuyName="NAME OF THE HOME TEAM
SECOND PART "
          oddsSell={[{ price: 10, factor: 20 }, { price: 10, factor: 20 }]}
          oddsSellName="NAME OF THE HOME TEAM SECOND PART "
        ></Competition>

        <Button size="large" />
        <Button size="small" /> */}
      </div>
    );
  }
}

export default App;
