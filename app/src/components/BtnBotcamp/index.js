import styled from "styled-components";

const BtnBotcamp = styled.button.attrs({
  children: props => props.content // catching content from App.js btnbotcamp call
})`
  width: 280px;
  height: 50px;
  border-radius: 25px;
  background-color: #ee3e25;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;

export default BtnBotcamp;
