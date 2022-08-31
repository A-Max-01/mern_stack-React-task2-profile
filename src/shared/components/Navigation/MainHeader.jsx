import React from "react";
import { Header } from "@mantine/core";
import "./MainHeader.css";
const MainHeader = (props) => {
  return <Header className="Header">{props.children}</Header>;
};

export default MainHeader;
