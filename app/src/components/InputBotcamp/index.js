import styled from "styled-components";

const InputBotcamp = styled.input.attrs({
  type: "text",
  placeholder: "Diz aí..."
})`
  width: 100vw;
  height: 50px;
  padding: 13px 11px 13px 16px;
  box-sizing: border-box;
  background-color: #fbfbff;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.33);
  position: absolute;
  bottom: 0;
`;

export default InputBotcamp;
