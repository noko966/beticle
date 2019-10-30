import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const Theme = {
  colors:{
    mainBg:"#151516",
    widget:"#1f2022",
    akcent:"#0264fb",
    buyAkcent:"#6c9d3a",
    textSec: '#4a4a4a',
    sidebarText: '#9b9b9b',
    white: '#fff'
  },
  header:{
    height:'90px'
  },
  space: [ 0, 6, 12, 24, 32 ],
  SidebarItem: {
    height: "62px",
    bg: "#333",
    color: "#9b9b9b",
    bgHover: "#444",
    colorHover: "#fff",
    spacing: "38px"
  },
  Badge: {
    height: "40px",
    width: "auto",
    bg: "blue",
    color: "#999",
    bgHover: "#252525",
    colorHover: "#fff",
    spacing: "16px"
  },
  SidebarItemNested: {
    height: "62px",
    bg: "#d8d8d8",
    color: "#9b9b9b",
    bgHover: "#252525",
    colorHover: "#fff",
    spacing: "38px"
  },
  Layout: {
    width: "100%",
    height: "100%",
    bg: "#1a1a1a",
    color: "#fff",
    spacing: "16px"
  },
  LayoutLeft: {
    width: "250px",
    height: "100%",
    bg: "#1a1a1a",
    color: "#fff",
    spacing: "16px"
  },
  LayoutMid: {
    height: "100%",
    bg: "#1a1a1a",
    color: "#fff",
    spacing: "16px"
  },
  LayoutRight: {
    width: "420px",
    height: "100%",
    bg: "#1a1a1a",
    color: "#fff",
    spacing: "16px"
  },
  Spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '24px',
  }
};

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
