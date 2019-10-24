import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const Theme = {
  SidebarItem: {
    height: "40px",
    bg: "#333",
    color: "#999",
    bgHover: "#444",
    colorHover: "#fff",
    spacing: "16px"
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
    height: "40px",
    bg: "#222",
    color: "#999",
    bgHover: "#252525",
    colorHover: "#fff",
    spacing: "16px"
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
    width: "250px",
    height: "100%",
    bg: "#1a1a1a",
    color: "#fff",
    spacing: "16px"
  }
};

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
