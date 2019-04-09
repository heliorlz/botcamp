import React, { Component } from "react";

import "./styles/reset.css";

import LoginWrapper from "./LoginWrapper";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";

class App extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoBotcamp />
        <BtnBotcamp content="Entrar"/>
      </LoginWrapper>
    );
  }
}

export default App;
