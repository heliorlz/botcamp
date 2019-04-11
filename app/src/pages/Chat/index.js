import React from "react";

import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import HeaderWrapper from "../../components/HeaderWrapper";
import FooterWrapper from "../../components/FooterWraper";
import InputBotcamp from "../../components/InputBotcamp";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <a href="/">
        <LogoutBotcamp />
      </a>
    </HeaderWrapper>
    <FooterWrapper>
      <InputBotcamp />
    </FooterWrapper>
  </>
);

export default Chat;
