import React from "react";
import { Link } from "react-router-dom";

import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import HeaderWrapper from "../../components/HeaderWrapper";
import FooterWrapper from "../../components/FooterWraper";
import InputBotcamp from "../../components/InputBotcamp";
import UserMessage from "../../components/UserMessage";
import MessageWrapper from "../../components/MessageWrapper";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/">
        <LogoutBotcamp />
      </Link>
    </HeaderWrapper>

    <MessageWrapper>
      <UserMessage />
    </MessageWrapper>

    <FooterWrapper>
      <InputBotcamp />
    </FooterWrapper>
  </>
);

export default Chat;
