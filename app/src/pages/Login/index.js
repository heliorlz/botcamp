import React from "react";

import LoginWrapper from "../../components/LoginWrapper";
import BtnBotcamp from "../../components/BtnBotcamp";
import LogoBotcamp from "../../components/LogoBotcamp";

const Login = () => (
  <LoginWrapper>
    <LogoBotcamp />
    <a href="/chat">
      <BtnBotcamp content="Entrar" />
    </a>
  </LoginWrapper>
);

export default Login;
