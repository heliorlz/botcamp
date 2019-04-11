import React from "react";
import { Link } from "react-router-dom";

import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import HeaderWrapper from "../../components/HeaderWrapper";
import FooterWrapper from "../../components/FooterWraper";
import InputBotcamp from "../../components/InputBotcamp";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/">
        <LogoutBotcamp />
      </Link>
    </HeaderWrapper>
    <FooterWrapper>
      <InputBotcamp />
    </FooterWrapper>
  </>
);

export default Chat;
