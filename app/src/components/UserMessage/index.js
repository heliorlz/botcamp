import styled from "styled-components";

const UserMessage = styled.input.attrs({
  type: "text",
  placeholder: "!cpf"
})`
  box-sizing: border-box;
  width: 257px;
  height: 40px;
  padding: 10px 0 10px 15px;
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 15px;
  border-top-right-radius: 0;
  color: #ffffff;
  font-size: 16px;
`;

export default UserMessage;
