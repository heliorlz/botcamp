import styled from "styled-components";

import background from "../../img/botcamp-background.png";

const LoginWrapper = styled.main`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 120px 0 80px;
`;

export default LoginWrapper;
