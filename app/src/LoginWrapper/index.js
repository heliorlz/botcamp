import styled from "styled-components";

import background from "../img/botcamp-background.png";

const LoginWrapper = styled.main`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// import "./style.css";

// const LoginWrapper = () => {
//   return <main className="login-wrapper" />;
// };

export default LoginWrapper;
